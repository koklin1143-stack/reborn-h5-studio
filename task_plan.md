# Carrier silhouette correction · 2026-11-05

- [x] Inspect real backpack and regular crew-neck T-shirt proportions.
- [x] Rebuild backpack silhouette/pocket and garment cut/neck/sleeves with restrained drape.
- [x] Inspect unprinted and printed front/side/back views; align static previews and thumbnails.
- [x] Validate placement, mobile/save/reopen and publish verified release (c6fb0f1, live carriers-v6).

---

# Soft backpack + notebook, phone case and T-shirt · 2026-11-05

- [x] Inspect geometry, ink routing, materials and persistence.
- [x] Refine backpack cloth and realistic zipper hardware.
- [x] Add three distinct objects, suitable print zones and materials.
- [x] Update selector, thumbnails, static fallback; verify mobile, saved/reopened and offline.
- [x] Run regression, publish and verify live (2907461; carriers-v5 checked on GitHub Pages).

---

# Self-built bags after side-view review · 2026-11-05

User rejected the imported tote handle connection and backpack print positions, and explicitly requested original modelling. This supersedes the imported-bag plan below.

- [x] Build continuous tote body/gussets/lining and solid handles with sewn attachment ends.
- [x] Build a rounded backpack with low front pocket, shoulder straps, carry loop and zippers.
- [x] Define a safe local print area above the backpack pocket; location changes move the print without duplicating it.
- [x] Verify front, left/right, back and top views, mobile UI, save/resume, static and offline output.
- [x] Publish and verify carriers-v4 (296ad55; live mobile preview verified).

---

# Authored bags and catalogue hierarchy · 2026-11-05

- [x] Review licensed external bag assets and confirm original authors / CC BY 4.0.
- [x] Adapt backpack/tote GLBs while retaining authored detail and adding independent print UVs.
- [x] Replace boxed object row with category + object heading and a quiet change action.
- [x] Replace sketch icons with rendered thumbnails and a category-based catalogue.
- [x] Verify all nine carriers, print faces, small screens, save/resume, pending loading and offline assets.
- [ ] Publish and verify GitHub Pages release 2026-11-05-carriers-v3.

---

# Carrier realism and mobile selector · 2026-11-05

- [x] Inspect initial five models and crowded two-row picker; review real product construction.
- [x] Replace shared panels with stuffed pillows, folded duvet, gusseted backpack and open tote.
- [x] Collapse picker to current object + grouped selection sheet.
- [x] Verify geometry, mobile UI, print faces, colour, export and saved-work round trip.
- [x] Publish verified build and inspect live release (0a0492c; GitHub Pages checked at 390px and 320px).

---

# Everyday application carriers · 2026-11-05

Approved: preserve four enamel forms; add cushion, pillow, duvet cover, backpack, tote. Group picker, per-carrier placement/material memory, front/back/pocket zones, local/full/coverage, save/export/gallery compatibility.

- [x] Inspect existing renderer and persistence contracts.
- [x] Extend descriptors and grouped controls without changing source category.
- [x] Model textile forms and apply texture directly to fabric surfaces, including static fallback.
- [x] Verify nine forms, placement/undo/persistence, export and responsive layout.
- [x] Build, publish and verify live when network permissions permit.

Private browser records and secrets stay outside published assets.


---

# 第 01 轮：检查项目与搭建底座
范围：复用现有 prototype；不执行第 02 轮，不新增复杂 3D、AI 或公网发布。
- [x] 读取用户第 01 轮与素材规范，检查根目录/父目录 AGENTS（不存在）及现有实现。
- [x] 统一七类数据与旧版迁移，保留作品/图片/计分身份。
- [x] 三底栏及二级广场、来源返回规则；共享 tokens 与基础状态组件。
- [x] 复用 IndexedDB，补齐 Blob/元数据原子保存与服务适配边界。
- [x] 模型/存储/路由/模板测试 59 项、语法资源检查和构建；HTTP 200。
- [ ] 375/390px（兼顾320/430）真实浏览器验收与新截图：阻塞，CUA 运行目录缺失，重置仍失败。
- [x] 输出检查报告、文件清单、运行方式和未接入项，明确手机实测缺口。
第 01 轮代码已交付，验收不标记全部完成；停止，不进入下一轮或公开部署。

# 第02轮（2026-10-30）
- [x] 读取素材规范、复核根目录/父目录无AGENTS，复用现有代码。
- [x] 四器物目录、明确示意来源、无黑框首页与轻空间滑动。
- [x] 固定工具、更多、本地搜索、详情、返回、选择持久化。
- [x] 61项测试、lint、构建、Edge触摸与320/375/390/430视口验收。
- [x] 实际截图与docs/round02-report.html，待补摄影清单。
停止第02轮。授权摄影仍待提供，不伪装完成真实馆藏摄影接入。

# 第03轮
- [x] 复核规范、根目录及父目录无AGENTS，读取现有数据/存储/视图/协调器。
- [x] 灵感输入路由、来源带入与恢复；纹样/上传/文字/手绘；方向与原纹样直通。
- [x] AI未配置及真实适配状态，独立测试适配器验失败/成功/重试/取消。
- [x] 65项测试、lint、构建；375/390及320/430浏览器触摸与返回实测，截图。
- [x] docs/round03-report.html，外部服务与真机验收边界说明。
停止第03轮，不自行发布或继续第04轮。

# 第04轮
- [x] 读取现有代码、素材规范，复核项目/父目录无AGENTS。
- [x] 复用模型/历史/存储，新增二维纹样共享渲染，单幅/重复/平面环绕、裁切/配色。
- [x] 命名关键版本保存/切换/确认删除、重置、图片引用恢复。
- [x] 保存状态、故障重试、普通返回与显式结束/删除路径验收。
- [x] PatternTexture.export接口，未接入3D。
- [x] 69项测试、lint、构建、四宽度真实Edge与触摸测试，375px截图与报告。
停止第04轮；无外部AI/馆藏/云同步/馆方权益/工厂授权接入，无公共部署。

# 第05轮
- [x] 复核现有代码/规范与模型目录；无可用授权杯子GLB，采用程序化几何。
- [x] 真实内腔/杯底/卷口/杯柄，正面UV区域接第四轮PNG。
- [x] 手势/控件/相机限制、参数实时更新、材质重置、静态降级与重试。
- [x] 草稿/纹样Blob/相机刷新与返回恢复；73项测试、lint、构建及四视口浏览器验收。
- [x] 报告与截图，明确非馆藏测绘、无工厂授权、未做实体手机验收。
停止第05轮，无公共部署。

# 第05轮反馈迭代：直接器物编辑
- [x] 复用三维引擎与草稿；默认器物、平面切换；正面UV拖动、旋转/缩放及历史。
- [x] 杯柄/底部/釉面/内腔/阴影细化。
- [x] 73项测试与构建；器物、二维、三维浏览器实测；四视口。
- [x] 本地更新与说明，无部署。

# 第07轮
- [x] 复核AGENTS（根及父目录无）、现有代码与素材规范。
- [x] 我的分类、独立版本、再生档案、确认删除。
- [x] 文件缺失/数据库失败/模型降级/草稿修复副本。
- [x] 79项测试，构建与四视口、多作品关闭恢复、故障注入、投稿收藏实测。
停止第07轮，不部署。
