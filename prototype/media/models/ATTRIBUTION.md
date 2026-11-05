# Bag models and preview images

Both models are adapted under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/). Original creator names and source links are also available in the application's “模型来源” dialog.

| Local asset | Original work | Creator |
| --- | --- | --- |
| `backpack.glb` | [Backpack](https://sketchfab.com/3d-models/backpack-5655596f9efe47deb09df57a79b44e04) | [typhomnt](https://sketchfab.com/typhomnt) |
| `tote.glb` | [Batik Beach Tote Bag](https://sketchfab.com/3d-models/batik-beach-tote-bag-12b908ac5af54e79bb0aed793e7c66c7) | [eeelabvisual](https://sketchfab.com/eeelabvisual) |

License verified against the original Sketchfab model API on 2026-11-05: both entries specify `CC Attribution`, `https://creativecommons.org/licenses/by/4.0/`, downloadable, and commercial use allowed with credit.

Adaptations by Reborn Studio: neutral fabric materials, resized textures, normalized coordinates, separated printable faces, additional artwork UVs, and raised tote handles. Original geometry and fabric normal detail are retained. The models are design previews, not production patterns. No endorsement by the original creators is implied.

`../carriers/backpack.webp` and `../carriers/tote.webp` are rendered derivatives of these adapted models, with the same CC BY 4.0 attribution. Other carrier thumbnails depict the project's procedural models.

Original GLBs were retrieved from the [AllenAI Objaverse dataset](https://huggingface.co/datasets/allenai/objaverse), paths `glbs/000-035/5655596f9efe47deb09df57a79b44e04.glb` and `glbs/000-043/12b908ac5af54e79bb0aed793e7c66c7.glb`. Individual model licenses above govern these files. Adaptation script: `scripts/prepare-bag-models.py`; thumbnail renderer: `scripts/build-carrier-thumbnails.cjs`.

To reproduce: download the two credited originals into `work/model-research/pack-artist.glb` and `tote-artist.glb`, run `node scripts/analyze-bag-models.mjs`, then `python scripts/prepare-bag-models.py` (Pillow required). Build and serve the site, then run the thumbnail renderer with `QA_URL` and `PLAYWRIGHT_MODULE` pointing to your local environment.
