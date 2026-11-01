# 手机取样与收藏状态修正 · 2026-11-01

原取样抽屉将原照、提取方式、结果、改色、命名和保存依次向下排列，手机上需滚动才能发现后半段操作。现在按「选范围 → 调效果」分成两步：步骤入口与底部按钮始终可见；第一步显示选区和小预览，第二步通过「提取 / 改色 / 名称」切换设置。返回改范围保留名称、提取设置和颜色。小屏合并对照与倍率工具栏，为预览留出空间。

参考 [Nielsen Norman Group 的渐进披露说明](https://www.nngroup.com/articles/progressive-disclosure/) 和 [Material 底部面板](https://m1.material.io/components/bottom-sheets.html) 的任务组织方式；沿用现有 UI 样式与取样引擎。

作品详情中的喜欢与收藏使用同一组完整胶囊选中样式，内层文字背景透明。数量和本机收藏持久化规则不变。

验证：

- `npm run lint`、`npm test`（141/141）、`npm run build`。
- `qa-picker-sheet.cjs`：Chromium 和 WebKit；390×740、375×667、320×568；取样抽屉无整体滚动、主按钮可见、预览比例、改色及名称返回保留、保存和刷新恢复、喜欢收藏的完整选中背景与计数。
- `qa-photo-picker.cjs`：在线与单文件版，12 处识别、圆形/椭圆/套索、预览倍率、取色、线纹、透明边缘和最终像素一致性。
- `qa-material-selection.cjs`、`qa-photo-composition.cjs`、`qa-mobile-placement.cjs`：在线与单文件版，满组存入素材库、组合、撤销重做、器型预览、导出和作品保存回归通过。

浏览器脚本使用 `PLAYWRIGHT_MODULE` 指向已安装的 Playwright。WebKit 为桌面上的移动视口模拟，不代表 iPhone Safari 或微信真机验收。测试使用隔离存储，不改变使用者的作品。
