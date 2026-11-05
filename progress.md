## Visible region editing v11

- Replaced separate heading/change link with one bounded thumbnail/name/change button; retained the object catalogue and its keyboard behavior.
- Removed the blurred print-position sheet. Physical-region buttons remain beside the preview; the current-region print switch and coverage controls share a row. Existing independent face layouts and disabled states remain intact.
- Selecting a part aligns its camera and briefly outlines it. Visible model surfaces can be selected with a short tap in rotate mode; orbit drags, placement drags, multi-touch and cancellation never select another part. Enamel hits respect the physical body, inner/outer regions and occluding trim. Highlighting is removed from exported images.
- Built online and standalone artifacts, passed lint and 176 regression tests. Local browser QA passed 26 editable gallery remixes, all 11 carrier position lifecycles, 320/390/430 layouts, real model taps, rotation/placement/pinch/cancel, keyboard, undo/reload and fullscreen.
- Standalone/offline browser QA also passed the same 26 remixes, 11 carriers, gestures, keyboard and persistence checks with HTTP(S) requests blocked.
- Release: `2026-11-06-context-v11`, application commit `e563880`. GitHub Pages run `42086172188` built successfully but its deploy job timed out after ten minutes (`Timeout reached, aborting!`). A failed-job retry was accepted (HTTP 201) but remained queued. Publication is not yet verified; a documentation push starts a fresh build with the same validated application artifacts.
- Resolved: fresh Pages run `42088866926` at `1a67ecb` completed successfully. The public HTML reports v11; the complete live browser suite passed all 26 remixes, 11 carrier lifecycles, actual tap/drag/pinch/cancel gestures, keyboard, undo/reload, fullscreen and mobile layouts. Cancelling the older queued retry returned HTTP 409; both commits contain identical application artifacts. Final public verification is successful.

## Integrated position chooser + gallery v10

- Read NN/G checkbox guidelines and Material UI menu selection documentation. Applied the existing UI/UX skill's hierarchy, 44px targets and focus rules; its script alias resolves to a missing directory, so no generated design-system output was used.
- Removed the entire extra status/focus/remove row. The compact position button opens a sheet: independent faces have checkboxes, face names focus/edit one region; enamel uses radio positions plus 不印花. Duvet centre/edge are two choices under one physical front face. Checkbox toggles preserve active editor/camera and previous scale/coverage, and remain undoable.
- Added fourteen project-authored designs across seven newer carriers (two each), and re-rendered all 26 catalogue covers using current geometry and the exact editable snapshot. Stable publication IDs preserve existing reactions; versioned cover filenames avoid old cached images. Public source/motif attribution retained, personal works untouched.
- Contact sheet visually reviewed for all 26 objects. Local browser passed all covers, every carrier filter, and all detail-to-remix transitions. Offline HTML with HTTP blocked passed independent/single selection, real pocket dragging, undo/redo/reload, fullscreen, and every carrier/position's coverage and removal lifecycle. Lint and 174 regression tests pass.
- Initial 320px screenshot caught the modal during its entry animation; QA now waits for animation completion and checks vertical visibility as well as 44px bounds. Final small-screen screenshots inspected and passed.
- Published 0a39ad7 / 2026-11-06-gallery-v10. Live GitHub Pages passed all 26 covers/details/editable remixes, eleven carrier filters, real pocket dragging, every carrier/position's add/remove/coverage/undo lifecycle, persisted reload, fullscreen and mobile/keyboard focus checks. Live gallery screenshot confirms 26 works and new cover images. No physical-phone test claimed.

## Explicit placement lifecycle v9

- Reproduced the reported mismatch: selected pocket, camera looking at a retained fully printed back, no removal control. The earlier physical-position labels did not solve the underlying automatic printing or camera/edit-target mismatch.
- New surface regions stay blank until the user chooses 放上图案. Added print starts local; the current surface can be removed, undone and re-added. Other intentional face layouts and the original motif survive removal. Old hidden main/pocket history cannot unexpectedly revive during migration.
- Selecting a position, entering placement mode and changing coverage focus the actual selected region. Added quiet region status, focus and add/remove controls, with 44px targets and a disabled placement action for empty surfaces.
- Lint and 171 regression tests pass. Offline browser QA with HTTP blocked passes all eleven carriers and each physical region, add/remove/undo/redo, static preview removal, fullscreen, save/resume/reload and 320/390/430px bounds. Actual pocket pointer dragging passed after rotating to the back. Screenshots inspected at 390px and 320px. A density-control variable-shadowing error caught in the initial browser run was corrected before release.
- Local position/coverage QA also passed across all eleven carriers and every position, including custom range, undo/redo, mobile/fullscreen and save/reload.
- Published 27498fc / 2026-11-06-placement-v9. Live GitHub Pages passed real pocket dragging after orbit, explicit face adding/removal, no hidden-fill resurrection, all eleven carriers, static previews, mobile/fullscreen and saved-work reload. Live cleared-back screenshot inspected. No physical-device test claimed.

## Print position / coverage v8

- Dropdown now contains physical areas only: front/back, main panel/pocket/back, cover/back cover, inside/outside/rim. Phone case shows its single exterior print face without a dropdown.
- Coverage label is scoped to the selected area. Filling bowl/basin interiors stays inside. Edge bands and the plate reverse do not silently switch surfaces when adjusted.
- Preserved cup front/back and whole-circumference access. Old renderer zone IDs and saved layouts remain readable; newly selected faces keep coverage and restore previously edited settings.
- 167 regression tests pass. Mobile browser QA covers all 11 carriers, every position, local/full, stable labels, face changes, undo/redo, 320/390/430 layouts, fullscreen and save/resume/reload. Visually reviewed cushion front/back and basin interior. Offline QA passed with HTTP blocked.
- Published 573ba28 / 2026-11-06-print-positions-v8. Live GitHub Pages passed all 11 carriers and positions, local/full scope, stable labels, face changes, undo/redo, mobile/fullscreen and saved-work resume/reload.

## Carrier v7 selector consistency

- All four categories use equal card widths and reserved caption heights in a single row; enamel no longer creates a tall two-row sheet.
- Clothing removed from category, object and fresh gallery filter choices. Legacy completed works retain their original model and preview; legacy editable drafts preserve the pattern and old placement in a notebook draft.
- 163 tests pass, including legacy clothing save/load/resume compatibility. Lint and whitespace checks pass.
- Local and offline mobile workflows pass at 320/375/390/430px: measured equal dialog/card bounds across categories, all 11 choices visible without horizontal overflow, print/recolour/save/resume/reload. Inspected enamel, textile and daily screenshots.
- Published b409cba / 2026-11-05-carriers-v7. Live mobile QA passed the same four-width measurements and save/resume workflow. GitHub Git pushes initially failed while updating refs; the commit was received, verified against the parent, and published through the official Git refs API with force disabled.

## Carrier v6 verification

- 162 regression tests pass; lint and diff whitespace checks pass.
- Visually inspected backpack front/quarter/both sides/back/top/pocket/full print and T-shirt front/side/back/full print.
- Static shapes now follow the new silhouette. Carrier thumbnail URLs carry the release version to avoid showing cached old models.
- Mobile browser and offline checks pass: all five families and 12 thumbnails at 320/390px, print positions, material colour, saved previews, resume and reload.
- Published c6fb0f1. GitHub Pages carriers-v6 passed the live mobile workflow: all 12 thumbnails, category selection, printing, recolouring, saved renders, resume and reload.

## Carrier v6 silhouette work

Rebuilt backpack as a straighter, broad-crown daily bag with a taller raised pocket and closer shoulder straps. Recut T-shirt to a regular torso/sleeve ratio, separate front/back U-necklines and much lower fold amplitude. Initial build caught unary-minus/exponent syntax; corrected to Math.pow before rendering. First visual comparison confirms the intended narrower sleeves and higher pocket. Regression caught Float32 sleeve-edge UV rounding below zero; UV coordinates now clamp at the physical boundary. Updated the pocket hit-test to use its actual local-box centre after the pocket redesign. Static fallback and release thumbnails aligned.

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
