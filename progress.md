## Carrier v5 validation

- 161 regression tests passed; syntax and CSS/resource validation passed.
- Inspected front/side/back/full-print captures for all new types; open phone camera and garment neck have raycast regression checks.
- Backpack gusset corners now share endpoints; thin stamped zipper pull replaces torus.
- Mobile browser checks passed 320/375/390/430 layouts, five categories and 12 thumbnails, rotation, material colour, local/full print, actual saved previews and resumed editing.
- Offline file passed with HTTP blocked: all three new types recoloured, saved, resumed and reloaded.
- Published 2907461; live GitHub Pages release carriers-v5 verified. Online browser passed all 12 thumbnails, five categories at 320/390px, and new-object printing/colour/save/resume/reload flows.
- No physical-phone test claimed.

## Carrier v5 implementation

Added notebook, real camera-cutout phone case and draped T-shirt with separate front/back print placement. Refined backpack cloth and flat slotted zipper pulls. 161 tests pass. Initial renders exposed a backpack gusset corner gap and oversmoothed T-shirt seam paths; corrected shared gusset endpoints and densified garment seam paths, joining shoulders and side seams. Mobile/saving/offline checks follow.

## 2026-11-05 · Self-built bags v4

- Followed user request to replace external bag models with original connected geometry.
- Inspected front, quarter, both sides, back and top screenshots. Adjusted backpack shoulder depth and tote gusset folding after review.
- Checked sewn handle endpoints/thickness and that the local main-panel print box clears the backpack pocket.
- Print-position changes preserve settings but do not leave duplicate prints on main panel/pocket; back print remains independent.
- Lint and 157 tests pass. Browser checks pass 320/375/390/430px layouts, all views, full/local prints, saving and resumed editing, rotation, static export and offline rendering with external network blocked.
- Published 296ad55. Live GitHub Pages passed release/model identity checks, all nine thumbnails, category browsing, full printing and 320px layout. The live QA readiness wait was corrected to allow the intentionally hidden small-screen hint.

---

## 2026-11-05 · External bags and object selector v3

- Added attributed backpack/tote GLBs and rendered all nine catalogue thumbnails.
- Changed hierarchy, category browser, selected mark and source credit access.
- Built online + standalone outputs. Lint passed; 156 tests passed. Initial three HTTP tests hit sandbox EACCES, then all passed with loopback access.
- Browser QA passed nine WebGL forms, all textile zones, 320/375/390/430px layouts, static exports, full screen, saving/reopening and pointer rotation.
- Extra checks passed edits during delayed model loading, disposal while loading, embedded offline tote and thumbnails with external model requests blocked.
- Restarted local :8879 with the existing start-preview.ps1 launcher so GLB files are served, retaining its user-environment configuration. Model HTTP 200 verified.
- Pending GitHub Pages verification for carriers-v3.

---

## Carrier realism + compact picker · 2026-11-05

Implemented and checked locally. 155 automated tests pass; syntax/assets/CSS checks pass. Isolated Edge WebGL QA exercised all nine objects, every fabric print zone, local/full layouts, capture, and no shader/browser errors. Workflow QA covered 320x568, 375x667, 390x844 and 430x932, picker keyboard dismissal, saved/reloaded work, resumed editing, pointer rotation and static export. Screenshots: work/qa/carriers-v2 (local, not published). No physical iPhone was available.

Release: 2026-11-05-carriers-v2. Published implementation commit 0a0492c. Live GitHub Pages reports this release; real WebGL duvet border print, nine-item selection sheet and 320px coverage controls verified.

---

# Progress

2026-11-05: Approved concept implemented next. Repository starts at 1799fca with only unrelated untracked preview/work files. Implemented grouped choices, fabric meshes/materials and planar printing; independent face/carrier state, SVG fallback, saved-work labels and portrait framing. 154 tests pass; browser QA verifies nine WebGL forms, all fabric regions, five static exports, refresh/save/resume, pointer rotation and 320/375/390/430 layouts. Published implementation b7419b2 to GitHub Pages. Live mobile-browser check confirms release 2026-11-05-everyday-carriers, nine carrier descriptors, rendered duvet border and visible 320px coverage/footer controls.


---

# 第 01 轮进度
2026-10-30
- 检查原生 H5、已有页面、依赖与启动脚本；已读本轮附件及素材规范。没有适用 AGENTS。
- foundation.js/schema.d.ts 补齐七类模型、schema 8 迁移、来源/纹样/器型独立引用，兼容旧渲染字段。
- 原 IndexedDB 增加事务驱动、Blob/草稿原子接口，原有迁移和缓存保留。
- 三底栏、二级广场、来源返回、编辑铭牌、共享视觉 token 与四类状态组件完成。
- 只保留已有外框 3D，不开发复杂 3D/AI；新增显式未配置适配器状态。
- 首次新增测试后 52 项通过，再补持久化门面与视图测试为 56 项，最后补来源/快照/路由回归为 59 项。
- 最终 npm run lint 通过（17 脚本、资源、CSS 括号），npm test 59/59 通过，npm run build 通过（767891 bytes）。原始测试日志 docs/round01-tests.txt。
- 本地 8879 源码入口 GET 200，包含新基础模块。
- 手机实测阻塞：CUA rewriteDocumentation/getBrowser/getState 初始化均报 failed to write kernel assets / 系统找不到指定的路径 / os error 3，js_reset 后仍失败。未生成本轮截图，未声称375/390通过；旧截图标记历史。
- 文档已更新。不推送、不部署、不进入第02轮。待补验仅为第01轮手机浏览器检查及截图。

第02轮：复用底座新增 explore 目录与首页层，61项测试/构建通过。可用的本地 Headless Edge 完成触摸与四视口验收，结果 docs/round02-browser-results.json，截图 previews/round02-*.png。授权摄影不足采用内嵌SVG示意，来源明确。没有进入AI工作台或部署。

第03轮：灵感页与独立输入模型、PNG导出、AI请求状态完成。初次浏览器测试发现协调器初始化未接入（CRLF替换未命中），已修复后全流程复测通过；新增字段撤销后undefined回归已修复默认值，65/65通过。Edge四视口、实际触摸、上传、返回刷新、原编辑衔接通过；AI UI测试使用明确本地fixture。截图与详情docs/round03-report.html。未发布。

第04轮：新增editor-model/pattern-texture/editor-views/editor.css，扩展参数与版本引用。69/69测试、lint、构建通过；Edge实际修改7个参数、触摸、三布局像素差异、版本/图片恢复、注入保存失败/重试、返回/结束/删除通过。截图检查修复绝对定位造成的画布裁边，四视口验证正方形完整在舞台内。第03轮浏览器回归通过。当前构建818612bytes，报告docs/round04-report.html。未部署、未进入3D轮次。

第05轮：程序化三维杯与cup路由完成，复用真实PNG导出。73/73测试、lint、构建通过；Edge实际触摸、同一模型身份、六类参数、相机/草稿/个人图片恢复、贴图异常与上下文丢失/无WebGL降级通过。四视口截图及UV测试图已查看，无镜像/倒置。7,938三角形，6几何/4纹理，闲置不持续绘制。构建1,398,736bytes，docs/round05-report.html。仅本地，无部署。

最终复测：第四轮完整浏览器回归通过；单文件构建产物实际启动并进入真实3D，通过三导航及无JS异常检查（docs/round05-build-smoke.json）。

反馈迭代完成：新增editor-object.js，原编辑工具直接控制真实杯身，保留平面视图与同一草稿。物件旋转和UV拖动区分；保持渲染实例跨工具切换。杯柄改椭圆扁带截面，底部/卷口细化、釉面/光照、自阴影与内腔明暗调整。修复共享vertexColors材质在杯柄缺颜色属性时变黑的问题，加入回归断言。73项单测通过，器物/二维/三维浏览器及单文件构建实测通过。

第07轮：新增manage-model/manage-views，沿用原mine及IndexedDB事务。两器型作品和草稿实际创建关闭后恢复；副本隔离与积分幂等，删除失败重试、缺失预览提示、损坏草稿修复副本均通过。79项测试、lint及构建通过；独立投稿快照/收藏详情返回与数据库首次读取失败、WebGL禁用测试通过。截图四视口，非真机。
