# Magenta Sketch-RNN 笔画组件

原样使用 Google Magenta 发布的 [data_tool.js](https://github.com/magenta/magenta-demos/blob/1146656d0ac54951ddf89486c264582c037f11e4/sketch-rnn-js/data_tool.js)。项目中的副本为 `prototype/vendor/magenta-data-tool.js`，SHA-256 为 `1921a8b0b50e3d56500c25e2b8a0e356711e287eb99b6b97c3374bcec9aca340`。源文件保留 Google 与 softSurfer 的声明，附有 [Apache 2.0 许可全文](magenta-Apache-2.0.txt)。

H5 调用其中的 `simplify_line` 简化手绘笔迹，再生成供千问图像编辑使用的姿态参考。存在橡皮擦笔迹或只有旧位图时，参考图从最终可见像素取样。Sketch-RNN 的狗类 VAE 权重仅在项目外用于本机对比实验，发行包内不含该权重。
