## Carrier v5 completed geometry

Notebook has separate printed covers, bound spine and untinted page block. Phone case is an open tray with a real camera aperture and separate raised lip; artwork uses exterior shell geometry so it cannot fill the camera hole. T-shirt has a neck aperture, rib collar, draped front/back cloth, joined shoulder/side seams and open hem/sleeves. Paper/plastic share surface-ink placement while fabric-only weave is disabled for them. Static fallback and standalone thumbnails cover all 12 carriers.

## Carrier v5 diagnosis

Backpack front and gussets are nearly flat; torus zipper pulls read as a key ring. Add controlled cloth curvature and flat slotted hardware. All non-enamel types previously counted as textile, so separate surface-ink routing from actual woven material before adding notebook and phone case. T-shirt is the first clothing form with front/back printing.

## Self-built bags · 2026-11-05, superseding imported models

The user's side-view screenshots exposed the rotated imported tote handles' attachment problem. The imported backpack's restricted upper print UVs also looked unnatural, and merely switching positions produced duplicated artwork on the main panel and pocket. User explicitly requested self-built models.

source/bag-geometry.mjs now builds both models directly. Tote front/back, folded mouth, gussets, bottom and lining share their boundary functions. Continuous solid handles include their sewn ends; endpoints are checked against the cloth. Backpack has a low front pocket and a larger continuous main panel, with a local print box safely above the pocket zipper. Full print follows the entire main panel. Front/pocket location selection is exclusive while retaining previous parameters and the independent back print.

Imported GLBs, downloader/adaptation code and associated thumbnails/credits were removed or replaced. Source bytes no longer require a separate model request; standalone output reduced from ~13.5 MB to ~7.85 MB. Static fallback remains a labelled simplified illustration, updated with the lower pocket and main print placement.

---

## Authored bag models and hierarchy · 2026-11-05

The second feedback rejected both crude bag geometry and icon-heavy selection cards. Two candidate CC0 models were visually insufficient; chosen originals are Backpack by typhomnt and Batik Beach Tote Bag by eeelabvisual. Both original Sketchfab API records confirm CC BY 4.0 and download availability. Source URLs, changes and credits are in prototype/media/models/ATTRIBUTION.md and the in-app model-source dialog.

The two models load on demand from local GLBs. They retain original normal/detail UVs; artwork uses a separate planar UV attribute so front, back and pocket can be printed without displacing cloth details. Every viewer owns its GPU resources. Delayed model responses cannot replace a newer viewer, and edits during loading are applied after loading completes. The offline HTML embeds model bytes and all nine thumbnails.

The object name is now a serif preview heading, with small category text above and a quiet change action at right. Selection uses category tabs and large actual-model thumbnails (2×2 enamel, three textiles, two bags). No orphan card row or outlined current-item box. Existing low-memory/static mode remains a clearly labelled simplified SVG preview.

---

## Carrier review · 2026-11-05

The initial five objects reused a puffed rectangle. The revised models use distinct sewn construction: inflated cushion/pillow with tucked perimeter, folded/draped duvet UV sheet, arched backpack body with gussets/zip/padded straps, and an open tote with lining/boxed bottom/solid handles. Primary product references inspected: IKEA FJÄDRAR cushion, MUJI canvas 2-way tote. These remain procedural design previews, not measured product scans.

The two permanent category/shape rows competed with the preview. Replaced with a 58px current-object row and a grouped nine-item modal catalogue; return focus is restored after selection or dismissal.

White fabric was overexposed under enamel lighting. Separate textile exposure/environment and softer floor shadow reveal volume. Thin cloth self-shadowing caused visible diagonal acne; printable cloth surfaces now use their geometric normal shading, while the model still casts a floor shadow. Static fallback silhouettes also follow the new categories.

---

# Carrier extension findings

- source/cup3d.js is source; prototype/cup3d.js is bundled. Rebuild via build:cup.
- Vessels descriptors and Foundation normalize drive persistence. category describes source; application family must be separate.
- Enamel ink assumes lathe geometry, so textile meshes need their own UV ink binding.
- All viewport and capture code shares createVessel. Provide textile branches there and static fallback in CupView.
- Fabric front/back/pocket need simultaneous retained layouts; the active editing face must not erase other faces.
- Short screens required collapsing the style rail during object editing; portrait saved images required explicit zero-minimum grid tracks to avoid overflow.
- Browser QA uses a fresh isolated Edge context and local :8881. No real-device Safari was available.

---

# 工程检查
- 工程根目录 outputs/物之再生-H5，Git main；保留前几轮未提交改动，不回滚。
- 原生 IIFE 脚本；无框架、无运行时 CDN。esbuild/three 为已有开发依赖；本轮不升级。
- prototype/model.js：领域；community.js：本地广场/奖励；storage.js：IDB state/images；app.js：协调器；views/film/archive：页面；scripts/build.cjs：双单文件输出。
- 保留：首页胶片、二维画布、撤销/重做、本地搜索、上传/存储、草稿/作品/发布快照、积分幂等。
- 调整：v14 四导航收回三项；目前 itemId/pattern/canvas 混合来源和应用，需要 canonical 引用加旧字段兼容桥。storage 图片与草稿当前分开写入，应提供跨 store 原子接口。
- 规范中的实拍主舞台、GLB、AI、画板等属于后续轮次；本轮只定义接口与诚实未接入状态。
- 项目和父目录无 AGENTS.md；work/handoff 中的 AGENTS 不向当前目录生效。

## 最终落地与验证边界
- 模型采用兼容桥，不引入新框架；schema 8 与原物理 IDB 版本分离。
- 仅新增 fake-indexeddb 开发依赖，真实浏览器仍用原生 IndexedDB。
- 59项测试/基础检查/构建通过。手动HTTP请求确认本地服务器响应。
- CUA环境目录缺失导致375/390px实测与截图未完成；Node/VM结构测试不能代替实际手机浏览器验收。
- 本轮报告 docs/round01-report.html；上一版报告与截图仅保留为历史。

第05轮：复用Three.js 0.186.1，项目未发现合法杯子GLB；程序化空心旋转体+独立管柄，贴图仅在前侧曲面。Lathe/UV检查与实际UP/L→R/DOWN测试图方向正确。图形上下文丢失时需递增异步令牌以阻止旧贴图回调覆盖静态状态；已修复。刷新杯子页时需同时恢复editorParent，已修复。

器物编辑：用Raycaster命中前侧贴图曲面的UV，u/v变化换算成平面纹样x/y；拖动结束一次性进入撤销历史，期间实时更新纹理。编辑页面重绘保留原host及模型，避免工具切换闪烁/丢相机。保留实物来源与目标杯器型分离。

第07轮：资源缺失与数据库主记录不可读分开处理。单个Blob读取失败不阻止整个档案加载；主记录读取失败继续暂停写入并重试。修复为独立副本，不覆盖损坏源记录；AI档案只描述已存候选和当前使用关联，不推断历史步骤。
