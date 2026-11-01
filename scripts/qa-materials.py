"""Run with the material environment and pass the prepared --models directory."""
import argparse
import json
from pathlib import Path
import subprocess
import sys
import tempfile

from PIL import Image, ImageFilter

HERE = Path(__file__).resolve().parent
cli = argparse.ArgumentParser(description=__doc__)
cli.add_argument('--models', required=True)
args = cli.parse_args()

with tempfile.TemporaryDirectory() as tmp:
    src, out = Path(tmp)/'source', Path(tmp)/'display'
    src.mkdir()
    with Image.open(HERE.parent/'prototype/media/enamel/desheng.webp') as source:
        im = source.convert('RGB')
    im.save(src/'clear.png')
    im.resize((210,248)).save(src/'small.png')
    im.filter(ImageFilter.GaussianBlur(10)).save(src/'blurred.png')
    im.crop((185,245,900,1065)).save(src/'clipped.png')
    (src/'invalid.jpg').write_bytes(b'incomplete image')

    def run():
        subprocess.run([sys.executable,str(HERE/'prepare-enamel.py'),'--models',args.models,
                        '--batch',str(src),'--output',str(out)],check=True)
        return json.loads((out/'report.json').read_text('utf8'))

    report = run()
    assert report['clear.png']['mode'] == 'cutout'
    for name, reason in [('small','insufficient-detail'),('blurred','weak-or-soft-edge'),('clipped','touches-frame')]:
        assert report[name+'.png']['mode'] == 'photo'
        assert reason in report[name+'.png']['reasons']
    assert report['invalid.jpg']['mode'] == 'unusable'
    path = out/'clear.png.webp'
    with Image.open(path) as checked:
        assert 'A' in checked.getbands()
    stamp = path.stat().st_mtime_ns
    assert run() == report and path.stat().st_mtime_ns == stamp
    im.resize((210,248)).save(src/'clear.png')
    assert run()['clear.png']['mode'] == 'photo'
    with Image.open(path) as checked:
        assert 'A' not in checked.getbands() and checked.size == (210,248)
    print('Batch checks passed, including cache reuse and replacing a superseded cutout.')

