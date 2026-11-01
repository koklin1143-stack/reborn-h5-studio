"""Offline segmentation and admission checks for photographs of opaque artefacts."""
import hashlib
from pathlib import Path

import cv2 as cv
import numpy as np
from PIL import Image, ImageOps

MODEL_SHA = '60920e99c45464f2ba57bee2ad08c919a52bbf852739e96947fbb4358c0d964a'
CHECK_SHA = '309c8469258dda742793dce0ebea8e6dd393174f89934733ecc8b14c76f4ddd8'
MAX_EXPORT = 960
MIN_NATIVE = 640


def digest(path):
    with Path(path).open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


class Segmenter:
    def __init__(self, path, small=False):
        import onnxruntime as ort
        if digest(path) != (CHECK_SHA if small else MODEL_SHA):
            raise ValueError('Unexpected segmentation model checksum: '+str(path))
        self.small = small
        config = ort.SessionOptions()
        config.intra_op_num_threads = 4
        config.inter_op_num_threads = 1
        self.session = ort.InferenceSession(str(path), config, providers=['CPUExecutionProvider'])
        self.input_name = self.session.get_inputs()[0].name
        self.output_name = self.session.get_outputs()[0].name

    def predict(self, rgb):
        size = 320 if self.small else 1024
        small = cv.resize(rgb, (size, size), interpolation=cv.INTER_AREA).astype(np.float32)
        x = small / max(float(small.max()), 1.)
        if self.small:
            x = (x - np.float32([.485,.456,.406])) / np.float32([.229,.224,.225])
        else:
            x -= .5
        x = x.transpose(2, 0, 1)[None]
        scores = self.session.run([self.output_name], {self.input_name: x})[0][0, 0]
        # Flat output has no identifiable subject.
        spread = float(np.ptp(scores))
        if spread < 1e-5:
            return np.zeros(rgb.shape[:2], np.float32)
        return cv.resize((scores - scores.min()) / spread, (rgb.shape[1], rgb.shape[0]))


def parts(mask):
    _, _, stats, _ = cv.connectedComponentsWithStats(mask)
    return sorted(stats[1:, cv.CC_STAT_AREA], reverse=True)


def holes(mask):
    contours, tree = cv.findContours(mask, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE)
    if tree is None:
        return 0
    return sum(t[3] >= 0 and cv.contourArea(c) > max(20, mask.sum()*.0005)
               for c, t in zip(contours, tree[0]))


def check(rgb, score_a, score_b, witness):
    """Measure on the same pixel grid. Do not erase extra parts to force a pass."""
    a, b = (score_a >= .5).astype('uint8'), (score_b >= .5).astype('uint8')
    avg = (score_a + score_b)*.5
    mask = (avg >= .5).astype('uint8')
    h, w = mask.shape
    reasons, metrics = [], {}
    pieces = parts(mask)
    if not pieces or mask.mean() < .018 or mask.mean() > .96:
        return None, {}, ['no-isolated-subject']
    x, y, bw, bh = cv.boundingRect(mask)
    length = max(bw, bh)
    metrics['subjectPixels'] = length
    if length < MIN_NATIVE:
        reasons.append('insufficient-detail')
    if min(x, y, w-x-bw, h-y-bh) < max(3, .008*length):
        reasons.append('touches-frame')
    if len(pieces) > 1 and pieces[1] > max(32, pieces[0]*.003):
        reasons.append('multiple-subjects')
    iou = (a & b).sum() / max(1, (a | b).sum())
    metrics['repeatIoU'] = round(float(iou), 4)
    if iou < .975 or holes(a) != holes(b):
        reasons.append('unstable-mask')

    # An independent colour fit may recover glazing and narrow appendages.
    # The interior and exterior far from the prediction seed the two GMMs.
    radius = max(5, round(length*.026))
    inside = cv.distanceTransform(mask, cv.DIST_L2, 5)
    outside = cv.distanceTransform(1-mask, cv.DIST_L2, 5)
    seeds = np.where(mask, cv.GC_PR_FGD, cv.GC_PR_BGD).astype('uint8')
    seeds[inside > radius] = cv.GC_FGD
    seeds[outside > radius] = cv.GC_BGD
    if not (np.any(seeds == cv.GC_FGD) and np.any(seeds == cv.GC_BGD)):
        return None, metrics, reasons+['uncertain-interior']
    cv.setRNGSeed(173)
    cv.grabCut(rgb, seeds, None, np.zeros((1,65)), np.zeros((1,65)), 3, cv.GC_INIT_WITH_MASK)
    fitted = seeds % 2
    kernel = np.ones((3,3), np.uint8)
    boundary = mask - cv.erode(mask, kernel)
    other = fitted - cv.erode(fitted, kernel)
    def distances(line, reference):
        return cv.distanceTransform(1-reference, cv.DIST_L2, 5)[line != 0]
    delta = np.r_[distances(boundary, other), distances(other, boundary)]
    p95 = float(np.percentile(delta, 95))
    metrics['edgeDrift95'] = round(p95/length, 4)
    # A second network can corroborate a modest colour-fit deviation, but
    # large local drift (e.g. a plastic stand merging with a lid) vetoes it.
    independent = (witness >= .5).astype('uint8')
    confirm = (independent & mask).sum()/max(1,(independent | mask).sum())
    other_model = independent - cv.erode(independent,kernel)
    reference_drift = np.r_[distances(boundary,other_model),distances(other_model,boundary)] if other_model.any() else [length]
    aligned = confirm >= .985 and np.percentile(reference_drift,95) <= .009*length and holes(independent) == holes(mask)
    metrics['independentIoU'] = round(float(confirm),4)
    colour_limit = .013 if aligned else .009
    if (p95 > max(3.5, colour_limit*length) or
        (not aligned and (holes(fitted) != holes(mask) or (a & fitted).sum()/max(1,(a | fitted).sum()) < .97))):
        reasons.append('colour-edge-disagrees')
    if confirm < .94:
        reasons.append('models-disagree')

    # Check evidence at the photographed boundary, including low-confidence
    # stretches that can hide a clipped lip even with good whole-mask overlap.
    im = cv.cvtColor(rgb, cv.COLOR_RGB2LAB).astype('float32')
    im = cv.GaussianBlur(im,(3,3),.75)
    gx, gy = [cv.Sobel(im,cv.CV_32F,dx,dy,ksize=3)/4 for dx,dy in [(1,0),(0,1)]]
    grad = np.sqrt((gx**2 + gy**2).sum(axis=2))
    window = np.ones((5,5),np.uint8)
    strength = cv.dilate(grad, window)[boundary != 0]
    blurred = cv.GaussianBlur(im,(0,0),2.8)
    dx, dy = [cv.Sobel(blurred,cv.CV_32F,i,j,ksize=3)/4 for i,j in [(1,0),(0,1)]]
    broad = cv.dilate(np.sqrt((dx**2 + dy**2).sum(axis=2)),window)[boundary != 0]
    sharpness = float(np.median(strength/np.maximum(broad,1)))
    support = float((strength >= 10).mean())
    # Width in input pixels of the model's undecided band, normalized by perimeter.
    band = ((avg > .1) & (avg < .9)).sum() / max(1,boundary.sum())
    metrics.update(edgeSupport=round(support,3), edgeSharpness=round(sharpness,2), softBand=round(float(band),2))
    if support < .83 or sharpness < 1.38 or band > max(3., .005*length):
        reasons.append('weak-or-soft-edge')
    if reasons:
        return None, metrics, reasons
    # Keep the continuous, subpixel model edge. No fixed erosion or feather.
    alpha = np.uint8(np.clip((avg-.14)/.72,0,1)*255 + .5)
    return alpha, metrics, []


def registered_alpha(rgb, guide, scores, metrics):
    """Re-locate a same-photo silhouette on native colour edges. Reject unsupported arcs."""
    mask = np.uint8(np.asarray(guide) > 127)
    x, y, w, h = cv.boundingRect(mask)
    length = max(w,h)
    if length < MIN_NATIVE or min(x,y,mask.shape[1]-x-w,mask.shape[0]-y-h) < length*.008:
        return None
    if len(parts(mask)) != 1:
        return None
    coverage_scores, object_shares = [], []
    for score in scores:
        predicted = np.uint8(score >= .5)
        common = (mask & predicted).sum()
        coverage_scores.append(float(common/mask.sum()))
        object_shares.append(float(common/max(1,predicted.sum())))
    metrics.update(guideCoverage=round(min(coverage_scores),4),guideObjectShare=round(min(object_shares),4))
    # The classifier may have included a stand behind a lid. Require agreement
    # on both the protected foreground and the size of the excluded fringe.
    if min(coverage_scores) < .98 or min(object_shares) < .95:
        return None
    lab = cv.cvtColor(rgb,cv.COLOR_RGB2LAB).astype('float32')
    lab = cv.GaussianBlur(lab,(3,3),.65)
    contours, hierarchy = cv.findContours(mask,cv.RETR_CCOMP,cv.CHAIN_APPROX_NONE)
    painted = np.zeros_like(mask)
    radius = max(4, round(length*.007))
    offsets = np.arange(-radius, radius+.01, .5)
    penalty = 3*np.square(offsets[:,None]-offsets)
    coverage, longest_gap = 1., 0.
    for contour, tree in zip(contours,hierarchy[0]):
        if cv.contourArea(contour) < 15:
            continue
        pts = contour[:,0].astype(float)
        pts = np.vstack([pts,pts[0]])
        distance = np.r_[0., np.linalg.norm(np.diff(pts,axis=0),axis=1).cumsum()]
        t = np.arange(0.,distance[-1],1.5)
        xy = np.column_stack([np.interp(t,distance,col) for col in pts.T])
        xy = (np.roll(xy,-2,axis=0)+2*np.roll(xy,-1,axis=0)+3*xy+2*np.roll(xy,1,axis=0)+np.roll(xy,2,axis=0))/9
        tangent = np.roll(xy,-2,axis=0)-np.roll(xy,2,axis=0)
        normal = tangent[:,::-1]*[-1.,1.] / np.maximum(np.linalg.norm(tangent,axis=1)[:,None],.01)
        probes = xy[:,None]+normal[:,None]*offsets[None,:,None]
        def sample(side):
            uv = np.float32(probes+normal[:,None]*side)
            return cv.remap(lab,uv[:,:,0],uv[:,:,1],cv.INTER_LINEAR,borderMode=cv.BORDER_REPLICATE)
        contrast = np.linalg.norm(sample(1.6)-sample(-1.6),axis=2)
        score = np.minimum(contrast,65.)-3.*np.abs(offsets)
        total,back = score[0],[]
        for row in np.tile(score,(2,1))[1:]:
            candidates=total[:,None]-penalty
            back.append(candidates.argmax(axis=0))
            total=row+candidates.max(axis=0)
        pick=int(total.argmax())
        choices=[]
        for parent in reversed(back[-len(t):]):
            choices.append(pick)
            pick=parent[pick]
        choices=choices[::-1]
        # A short run of dark lettering or coarse textile can outscore the
        # actual rim. Smooth the offset along the rim, not the alpha across it.
        shift=offsets[choices]
        sigma=max(2.,length*.005)
        steps=np.arange(-int(3*sigma),int(3*sigma)+1)
        weights=np.exp(-.5*(steps/sigma)**2)
        shift=sum(np.roll(shift,i)*v for i,v in zip(steps,weights/weights.sum()))
        accepted=np.abs(shift[:,None]-offsets).argmin(axis=1)
        supported=contrast[np.arange(len(t)),accepted]>=8.
        coverage=min(coverage,float(supported.mean()))
        good=np.flatnonzero(supported)
        gap=1.5*(np.diff(np.r_[good,good[0]+len(t)]).max()-1) if len(good) else distance[-1]
        longest_gap=max(longest_gap,float(gap/length))
        edge=np.int32(np.rint((xy+normal*shift[:,None])*16))
        cv.fillPoly(painted,[edge],255 if tree[3]<0 else 0,lineType=cv.LINE_AA,shift=4)
    metrics.update(guideEdgeSupport=round(coverage,3),guideWeakArc=round(longest_gap,4))
    if coverage < .86 or longest_gap > .09 or holes(np.uint8(painted>=128)) != holes(mask):
        return None
    return painted


def prepare(image, model, verifier, roll=0, guide=None):
    im = ImageOps.exif_transpose(image).convert('RGB')
    im.thumbnail((1600,1600),Image.Resampling.LANCZOS)
    rgb = np.asarray(im)
    a = model.predict(rgb)
    b = np.fliplr(model.predict(np.ascontiguousarray(np.fliplr(rgb))))
    witness = verifier.predict(rgb)
    alpha, metrics, reasons = check(rgb, a, b, witness)
    if alpha is None and guide is not None and set(reasons) <= {'colour-edge-disagrees', 'unstable-mask'}:
        alpha = registered_alpha(rgb,guide.resize(im.size,Image.Resampling.NEAREST),(a,b,witness),metrics)
        if alpha is not None:
            reasons = []
    if alpha is None:
        return None, metrics, reasons
    im.putalpha(Image.fromarray(alpha))
    premul = im.convert('RGBa')
    if roll:
        premul = premul.rotate(roll, Image.Resampling.BICUBIC, expand=True)
    xy = premul.getbbox()
    cut = premul.crop(xy)
    cut.thumbnail((MAX_EXPORT, MAX_EXPORT),Image.Resampling.LANCZOS)
    pad = max(4, round(max(cut.size)*.025))
    staged = Image.new('RGBA', (cut.width+2*pad, cut.height+2*pad))
    staged.paste(cut.convert('RGBA'), (pad,pad))
    return staged, metrics, []

