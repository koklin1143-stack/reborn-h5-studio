# 器物摄影与广场习作

这些是同类实物的摄影参考。杯和盆的名称与收藏单位可在[湖北省可移动革命文物名录（第二批），第 178、182 项](https://wlt.hubei.gov.cn/zfxxgk/zc/qtzdgkwj/202212/P020221207510779946911.pdf)核对。盘的归名来自照片记录。碗采用作者发布的珐琅工艺实例，「蓝釉卷纹碗」是项目展示名称。

广场封面由工作台渲染。潮线（edition-tide）使用 anniversary 折线，碎青（edition-grain）使用 granite 蓝斑，庭中一日（edition-garden）使用 westlake 盘心，二十号（edition-number）使用 desheng 编号，橘色节拍（edition-sun）使用 rays 放射纹。照片取样经过裁切、排布或调色，衍生封面沿用下表相应图片的许可。

| 文件 | 摄影原件 | 摄影者 | 图像许可 |
| --- | --- | --- | --- |
| desheng.webp | [“德胜”炮舰白搪瓷杯 20240314](https://commons.wikimedia.org/wiki/File:“德胜”炮舰白搪瓷杯_20240314.jpg) | Uuongkinghe | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| westlake.webp | [立鹤牌西湖博览会纪念搪瓷盘](https://commons.wikimedia.org/wiki/File:立鹤牌西湖博览会纪念搪瓷盘.jpg) | 三猎 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| blue-enamel.webp | [Enamel bowl](https://commons.wikimedia.org/wiki/File:Enamel_bowl.jpg) | DoubleEyeDesign | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| pinghai.webp | [“平海”铭文搪瓷脸盆（原件使用英文引号）](https://commons.wikimedia.org/wiki/File:%22平海%22铭文搪瓷脸盆_20240314.jpg) | Uuongkinghe | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| granite.webp | [Granitewaremug](https://commons.wikimedia.org/wiki/File:Granitewaremug.jpg) | Sobebunny | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| anniversary.webp | [Cobalt blue enamel basin](https://commons.wikimedia.org/wiki/File:Cobalt_blue_enamel_basin.jpg) | Fumikas Sagisavas | [CC0](https://creativecommons.org/publicdomain/zero/1.0/) |
| rays.webp | [德宏州博物馆 · 现代 · 搪瓷口缸](https://commons.wikimedia.org/wiki/File:德宏州博物馆-现代-搪瓷口缸.jpg) | 瑞丽江的河水 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |

档案保留全幅照片，共创纹样按全幅照片上的坐标取样。首页透明图、供查档的局部照片和纹样沿用各自原照的许可。`scripts/enamel-masters` 中的蓝釉碗、纪念盘和盖盆来自上表对应原件的高分辨率全照。放射纹口缸和蓝斑杯使用对应原件的高分辨率局部。

## 批量准备首页图片

Windows 项目内可直接运行 `powershell -ExecutionPolicy Bypass -File scripts/prepare-materials.ps1 -InputFolder D:/入库原照 -OutputFolder D:/取材结果`。可选 `-Targets D:/targets.json` 指定组照目标。脚本首次运行会准备独立环境和模型，以后复用。省略参数会重新检查已登记器物，并更新本地网页和离线文件。

使用 Python 3.11 或更高版本，在独立 Python 环境安装 `onnxruntime numpy opencv-python Pillow`。首次运行加 `--download-models`，从 rembg 已发布的模型文件下载约 183 MB 并核验 SHA-256。模型缓存在本机，不随网页打包。已有模型可用 `--models 文件夹` 指定。

```powershell
# 将待入库照片放在同一文件夹。输出文件夹与原图文件夹分开。
python scripts/prepare-enamel.py --batch D:/入库原照 --output D:/取材结果 --download-models
# 处理已经登记的全部器物，仅更新首页展示。
python scripts/prepare-enamel.py --display-only
npm run build
```

每张原照对应一张展示图。`report.json` 记录素材、采用的展示方式、检测数值和回退原因。同名文件换图会重新处理，重复运行会复用校验通过的结果。损坏的输入单独列为 `unusable`。项目目录的结果记录在 `prototype/object-display.js`，发布时还会校验原照和衍生图的哈希。没有通过登记和校验的衍生图不会被打包。

- **单件照**直接入库。程序在原图和翻转图上分别分割，对照另一种模型及原照的颜色边界，检查器物像素、触边、多个主体、孔洞稳定性、边界锐度、软边宽度和轮廓偏移。当前透明图门槛包括主体长边至少 640 原生像素、两次掩膜交并比至少 0.975；仅缩小，不放大。具体阈值见 `scripts/object_cutout.py`。
- **组照**须注明要展示哪件。批次可用 `--targets targets.json`，例如 `{"展柜.jpg":{"group":true,"subject":[0.61,0.32,0.86,0.70]}}`。四个数是原图归一化的左、上、右、下边界，程序会自动留边。已知组照没有目标就展示全照。
- **首页只接收透明器物图。** 轮廓通过、文件校验一致且包含透明通道后，器物才进入轮播。批次中的环境局部和全幅照片可供查档。未通过的器物仍可从目录或搜索进入档案，使用该件实物的纹样共创。已知展托或其他物件遮挡器物时，登记 `exhibit.occluded`，更换无遮挡的授权原照以后再重新检测。
- **已有同一张原照的轮廓**可作为第二份依据。`scripts/enamel-masters/*-guide.png` 保存配准到对应原照的蒙版，并在 PNG 元数据中记录底图 SHA-256。程序在原照上重新找边，检查两种模型的支持范围、整圈边界和连续缺乏依据的区段。现有盖盆、斑纹杯和口缸的蒙版来自上表同一照片的既有裁切，沿用对应许可。普通新照片可直接运行自动分割。

## 登记器物与共创纹样

“按明暗提线”在选区内计算局部亮度均值与方差，保留较深的实笔并抑制孤立小点。此模式的颜色用于线纹输出，换色时保留同一组线条。局部阈值参考 [Sauvola 与 Pietikäinen 的原论文](https://doi.org/10.1016/S0031-3203(99)00055-2)。

交互取样使用与原照一致的坐标。西湖纪念盘的 `westlake-study.webp` 来自同一张三猎摄影的高清底片，沿用 CC BY-SA 4.0。打开取样器后才读取高清图。可选的 `scanEllipse` 以画幅比例登记印花区的中心和半径，用于避免将背景及器物口沿列为字纹。点选候选根据已知印色寻找相近的色块，再将邻近笔画分组。候选无需预先登记每个字，也不作文字释读。

矩形、椭圆和套索共用一套取样坐标。新版单色取样在 Oklab 空间比对印色，参照选区内实际出现的底色和褪色色阶估算透明度。局部预览与导出使用同一遮罩。作品记录选区形状、套索节点和取色范围；已有旧稿仍可按保存时的规则恢复。方法参考 [Oklab 原理](https://bottosson.github.io/posts/oklab/) 和 [OpenCV 连通区域标记](https://docs.opencv.org/4.x/d3/dc0/group__imgproc__shape.html)。

首页以透明器物像素计算横向重心，深色像素略加权，把手内孔和留白的权重为零。偏差小于画框宽度的 1.5% 时保持原位，校正上限为 8.5%。只移动轮播中央的展示图，档案与纹样仍使用原照坐标。

同一原照可登记多个分色或原色取样。`ink: 'colour-circle'` 从原照的正方形选区取样，保留原色与正圆轮廓。旧作品保留原版本的椭圆素材。西湖纪念盘的高清取样底片 `scripts/enamel-masters/westlake-samples.webp` 是上表三猎所摄原照的全幅缩小版，沿用 CC BY-SA 4.0。提高已发布素材的清晰度时递增 `version`，已保存作品继续引用原版本。用户自取局部以原图像素记录选框和取样色，各素材的名称、来源、位置与大小随组合一起保存。

1. 核对物件、拍摄者及许可，在 `prototype/photo-catalogue.js` 登记稳定的 key、器型、全幅尺寸与取样。首页分割由批处理完成。
2. 在 `prototype/object-records.js` 用同一 key 登记来历、年代依据、评价者和款识局部。本件估价须附来源，同类成交单列拍卖批次和整组价格。
3. 共创纹样登记独立 key、名称、全幅原图像素坐标和分色方法。运行 `python scripts/prepare-enamel.py` 可一并生成纹样。已有作品使用的纹样换版时另设 key。
4. 运行 `npm run build`。首页、档案和共创共用器物 key，首页展示方式不影响保存过的纹样与器物关联。

分割与比对使用 [IS-Net](https://github.com/xuebinqin/DIS)、[U²-Net](https://github.com/xuebinqin/U-2-Net)、[rembg 发布的 ONNX 权重](https://github.com/danielgatis/rembg) 与 [OpenCV GrabCut](https://github.com/opencv/opencv/blob/4.x/samples/python/grabcut.py)。
