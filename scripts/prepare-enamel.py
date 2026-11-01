"""Prepare the object catalogue, or bulk-process an independent folder of originals."""
import argparse
import hashlib
import json
import shutil
import subprocess
import tempfile
from pathlib import Path
from urllib.request import urlopen

import cv2 as cv
import numpy as np
from PIL import Image, ImageOps, UnidentifiedImageError

from object_cutout import MODEL_SHA, CHECK_SHA, Segmenter, prepare, digest

ROOT = Path(__file__).resolve().parents[1]
MEDIA = ROOT / 'prototype/media/enamel'
MANIFEST = ROOT / 'prototype/object-display.js'
MASTERS = ROOT / 'scripts/enamel-masters'
MODELS = {'isnet-general-use.onnx': MODEL_SHA, 'u2netp.onnx': CHECK_SHA}


def sample_ink(image, sample):
    x,y,w,h = sample["region"]
    roi = image[y:y+h,x:x+w]
    if roi.shape[:2] != (h,w):
        raise ValueError("Region extends outside original: "+sample["key"])
    if sample['ink'] in ('colour-circle','colour-oval'):
        if sample['ink']=='colour-circle':
            side=min(w,h)
            roi=roi[(h-side)//2:(h-side)//2+side,(w-side)//2:(w-side)//2+side]
            w=h=side
        alpha=np.zeros((h,w),np.uint8)
        cv.ellipse(alpha,((w-1)*8,(h-1)*8),((w-1)*8,(h-1)*8),0,0,360,255,-1,cv.LINE_AA,shift=4)
        return Image.fromarray(np.dstack([roi[:,:,::-1],alpha]))
    b,g,r=cv.split(roi.astype(np.float32))
    if sample["ink"]=="blue":
        score=b-r
    elif sample["ink"]=="gold":
        score=np.clip(np.minimum(r,g)/(b+1)*255-95,0,255)
    elif sample["ink"]=="white":
        score=np.minimum(r,g)
    elif sample["ink"]=="orange":
        score=np.minimum(r-g+20,g-b)
    elif sample["ink"]=="red":
        score=r-np.maximum(b,g)
    elif sample["ink"]=="seal":
        gray=cv.cvtColor(roi,cv.COLOR_BGR2GRAY)
        score=cv.morphologyEx(gray,cv.MORPH_BLACKHAT,cv.getStructuringElement(cv.MORPH_ELLIPSE,(43,43))).astype(np.float32)
    else:
        raise ValueError(sample["ink"])
    score=np.clip(score,0,255).astype(np.uint8)
    _, binary=cv.threshold(score,0,255,cv.THRESH_BINARY+cv.THRESH_OTSU)
    if sample["ink"]=="orange":
        binary[(r<g+12)|(r<b+34)]=0
    _,labels,stats,_=cv.connectedComponentsWithStats(binary)
    keep=np.flatnonzero(stats[1:,cv.CC_STAT_AREA]>=max(4,w*h*.0008))+1
    if not keep.size:
        raise ValueError("No printable ink in "+sample["key"])
    mask=np.isin(labels,keep)
    colour=np.median(roi[mask],axis=0).astype(np.uint8)
    alpha=cv.GaussianBlur(mask.astype(np.uint8)*255,(3,3),.5)
    rgba=np.empty((h,w,4),np.uint8)
    rgba[:,:,:3]=colour[::-1]
    rgba[:,:,3]=alpha
    return Image.fromarray(rgba)


def atomic_write(path, write):
    with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as tmp:
        name = Path(tmp.name)
    try:
        write(name)
        name.replace(path)
    finally:
        name.unlink(missing_ok=True)


def save_image(image, path, **options):
    atomic_write(path, lambda tmp: image.save(tmp, format='WEBP', **options))


def models(folder, download):
    for name, expected in MODELS.items():
        dest = folder/name
        if not dest.is_file():
            if not download:
                raise SystemExit(f'Missing {dest}. Use --download-models on the first run.')
            folder.mkdir(parents=True, exist_ok=True)
            def fetch(tmp):
                url = 'https://github.com/danielgatis/rembg/releases/download/v0.0.0/'+name
                with urlopen(url, timeout=90) as reply, tmp.open('wb') as out:
                    shutil.copyfileobj(reply,out)
                if digest(tmp) != expected:
                    raise ValueError('Downloaded model checksum mismatch')
            atomic_write(dest, fetch)
    return Segmenter(folder/'isnet-general-use.onnx'), Segmenter(folder/'u2netp.onnx', small=True)


def subject_frame(image, box):
    if not box:
        return image
    if len(box) != 4 or not 0 <= box[0] < box[2] <= 1 or not 0 <= box[1] < box[3] <= 1:
        raise ValueError('Expected a normalized subject box [left,top,right,bottom]')
    left, top, right, bottom = box
    dx, dy = (right-left)*.14, (bottom-top)*.14
    return image.crop((int(max(0,left-dx)*image.width), int(max(0,top-dy)*image.height),
                       min(image.width,round((right+dx)*image.width)), min(image.height,round((bottom+dy)*image.height))))


def process(key, src, master, options, dest, previous, engines, policy, standalone):
    source_sha = digest(src)
    master_sha = digest(master) if master!=src else source_sha
    hint = MASTERS/(key+'-guide.png') if not standalone else None
    recipe = [policy,source_sha,master_sha,digest(hint) if hint and hint.exists() else None,options,standalone]
    stamp = hashlib.sha256(json.dumps(recipe,sort_keys=True).encode()).hexdigest()
    if previous.get('recipe') == stamp and 'asset' in previous:
        asset = previous['asset']
        published = dest/(asset+'.webp')
        if (not standalone and asset == key) or (published.is_file() and digest(published) == previous.get('assetSha')):
            return previous

    with Image.open(master) as opened:
        original = ImageOps.exif_transpose(opened).convert('RGB')
    frame = subject_frame(original, options.get('subject'))
    guide = None
    if hint and hint.exists() and frame is original:
        with Image.open(hint) as prior:
            if prior.info.get('source-sha256') == master_sha and prior.size == original.size:
                guide = prior.convert('L')
    # Identity in a known group must be explicit. Context is safer than guessing.
    if options.get('occluded'):
        cut, metrics, reasons = None, {}, ['occluded-in-source']
    elif options.get('group') and not (options.get('subject') or options.get('framedMaster') and master!=src):
        cut, metrics, reasons = None, {}, ['group-target-unspecified']
    else:
        cut, metrics, reasons = prepare(frame,*engines,options.get('roll',0),guide)
    mode, asset = ('cutout', key+'-cut') if cut is not None else ('photo',key)
    exported = cut
    # An intentional source frame can still show the object with its background.
    if cut is None and (options.get('subject') or options.get('framedMaster') and master!=src) and 'touches-frame' not in reasons:
        mode, asset, exported = 'context', key+'-view', frame.copy()
        exported.thumbnail((1200,1200),Image.Resampling.LANCZOS)
    if standalone and exported is None:
        exported = original.copy()
        exported.thumbnail((1600,1600),Image.Resampling.LANCZOS)
    if standalone:
        # A rerun replaces the same display file even if a cutout is rejected.
        asset = key
    photo = {'mode':mode,'asset':asset,'sourceSha':source_sha,'recipe':stamp,'checks':metrics,'reasons':reasons}
    if cut is not None:
        rgba = np.asarray(cut, dtype=np.float32)/255
        luminance = rgba[:,:,:3] @ np.float32([.2126,.7152,.0722])
        mass = (rgba[:,:,3]*(1-.2*luminance)).sum(axis=0)
        cx = np.average(np.arange(cut.width)+.5,weights=mass)
        offset = (cut.width/2-cx)/max(cut.size)
        photo['opticalX'] = round(float(np.clip(offset,-.085,.085)),4) if abs(offset)>.015 else 0
    if exported is not None:
        path = dest/(asset+'.webp')
        save_image(exported,path,quality=95,method=6)
        photo['assetSha'] = digest(path)
    return photo


def load_catalog(name):
    return json.loads(subprocess.check_output(['node','-p',"JSON.stringify(require('./prototype/"+name+"'))"],cwd=ROOT,encoding='utf-8'))


def main():
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument('--models',type=Path,default=Path.home()/'.cache/reborn/object-models')
    cli.add_argument('--download-models',action='store_true',help='fetch and verify missing model weights')
    cli.add_argument('--display-only',nargs='*',metavar='OBJECT_KEY',help='skip motif exports, optionally restrict object keys')
    cli.add_argument('--batch',type=Path,help='process photographs in a folder without editing the catalogue')
    cli.add_argument('--output',type=Path,help='separate batch output folder')
    cli.add_argument('--targets',type=Path,help='optional JSON keyed by filename with group and normalized subject box')
    args = cli.parse_args()
    if bool(args.batch) != bool(args.output) or args.targets and not args.batch:
        cli.error('--batch and --output must be used together; --targets applies to batches')
    policy = digest(Path(__file__).with_name('object_cutout.py'))+digest(__file__)
    engines = models(args.models, args.download_models)
    if args.batch:
        if args.batch.resolve() == args.output.resolve() or not args.batch.is_dir():
            cli.error('Use an existing input folder and a separate output folder')
        files = sorted(p for p in args.batch.iterdir() if p.is_file() and p.suffix.lower() in ('.jpg','.jpeg','.png','.webp','.tif','.tiff'))
        if not files:
            cli.error('No supported input images')
        args.output.mkdir(parents=True,exist_ok=True)
        report = args.output/'report.json'
        old = json.loads(report.read_text('utf8')) if report.exists() else {}
        targets = json.loads(args.targets.read_text('utf-8-sig')) if args.targets else {}
        rows = {}
        for src in files:
            try:
                rows[src.name] = process(src.name,src,src,targets.get(src.name,{}),args.output,old.get(src.name,{}),engines,policy,True)
            except (UnidentifiedImageError,OSError,ValueError,cv.error) as error:
                (args.output/(src.name+'.webp')).unlink(missing_ok=True)
                rows[src.name] = {'mode':'unusable','reasons':[str(error)]}
        atomic_write(report,lambda tmp:tmp.write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf8'))
    else:
        photos = load_catalog('photo-catalogue.js')
        old = load_catalog('object-display.js') if MANIFEST.exists() else {}
        rows = {p['key']:old[p['key']] for p in photos if p['key'] in old}
        if set(args.display_only or [])-{p['key'] for p in photos}:
            cli.error('Unknown catalogue key')
        for p in photos:
            key=p['key']
            if args.display_only and key not in args.display_only:
                continue
            src=MEDIA/(key+'.webp')
            master=MASTERS/(key+'.webp')
            with Image.open(src) as source:
                if source.size!=(p['width'],p['height']):
                    raise ValueError('Original dimensions changed: '+key)
                if args.display_only is None:
                    bgr=cv.cvtColor(np.asarray(source.convert('RGB')),cv.COLOR_RGB2BGR)
                    high=MASTERS/(key+'-samples.webp')
                    if high.is_file():
                        with Image.open(high) as high_photo:
                            if p.get('studyKey'):
                                save_image(high_photo,MEDIA/(p['studyKey']+'.webp'),quality=91,method=6)
                            bgr=cv.cvtColor(np.array(high_photo.convert('RGB')),cv.COLOR_RGB2BGR)
                    scale=np.array([bgr.shape[1]/p['width'],bgr.shape[0]/p['height']]*2)
                    for sample in p['samples']:
                        suffix='-v'+str(sample['version']) if sample.get('version',1)>1 else ''
                        art=sample_ink(bgr,{**sample,'region':np.rint(sample['region']*scale).astype(int).tolist()})
                        options={'quality':93} if sample['ink'].startswith('colour-') else {'lossless':True}
                        save_image(art.crop(art.getbbox()),MEDIA/(key+'-'+sample['key']+suffix+'.webp'),method=6,**options)
            rows[key]=process(key,src,master if master.exists() else src,p.get('exhibit',{}),MEDIA,old.get(key,{}),engines,policy,False)
        data=json.dumps(rows,ensure_ascii=False,separators=(',',':'),allow_nan=False)
        contents="/* Generated by prepare-enamel.py. Unlisted objects use their original photograph. */\n(function(r,v){if(typeof module==='object'&&module.exports)module.exports=v;else r.ObjectDisplay=v;})(globalThis,"+data+");\n"
        atomic_write(MANIFEST,lambda tmp:tmp.write_text(contents,encoding='utf8'))
    for key,row in rows.items():
        print(key, row['mode'], ','.join(row['reasons']))


if __name__=='__main__':
    main()
