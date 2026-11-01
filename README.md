# 物之再生 · 手机 H5

将器物上的图案、自己的图片、文字或手绘变成纹样，再试到搪瓷杯、盘、碗、盆上。当前版本为原生 HTML/CSS/JavaScript 应用，数据保存在当前浏览器。

## 打开项目

Windows 双击「启动预览.cmd」，后台服务启动后打开[我的作品](http://127.0.0.1:8879/index.html#mine)。已有草稿请继续使用原浏览器和 8879 端口。

首次安装或手动运行：

```powershell
npm ci
$env:PORT = '8879'
npm start
```

访问 [共创首页](http://127.0.0.1:8879/index.html#discover)。未指定端口时服务默认使用 8765；服务仅监听本机。更换浏览器或地址会使用另一份本地存储。

- `prototype/index.html`：开发入口。
- `index.html`：网页版本，图片从 `prototype/media/enamel/` 读取。
- `物之再生-H5-单文件.html`：图片及页面资源内嵌，可离线打开；浏览器对 file:// 存储的支持有差异，长期保存建议使用本机服务。

## 当前功能

- **共创**：浏览和搜索器物，直接多选取样、自行裁取、素材改色。可触摸摆放素材、双指缩放旋转，调整透明度、混合模式与边缘融合。
- **工作台**：调整纹样排布、整图颜色与局部双色/三色，撤销重做、保存版本、导出；四种搪瓷器型可实时预览。全屏有「返回工作台」入口。
- **作品广场**：独立底栏入口，提供 12 件初始作品及作者留言、喜欢和收藏的模拟数据；器物缩略图按器型统一尺寸。档案页可打开纹样、成品、设计说明与取样等细节。
- **积分**：本机创作足迹、事件账本及防重复计分。
- **我的**：作品、草稿、投稿和收藏；继续编辑、再生档案、复制版本及多选删除。删除前确认，写入失败保留原记录。

广场和投稿目前是本机演示，没有跨用户账号或云端共享。保存的原稿默认私有，确认展示后生成独立快照；页面会显示「私有原稿 · 已在本机广场展示」。

界面使用中性黑白灰。共创、广场、积分和我的共用字体与字号规则，见 [手机界面设计规范](docs/mobile-design-system.html) 和 `prototype/design-system.css`。搪瓷之外的类别仍待开放。

## 外部 AI

GitHub 页面接入方式见 [线上 AI 部署与连接](docs/online-ai-setup.md)。仓库提供 `render.yaml`，但需要在云平台账号内创建服务并填写环境变量后才能在线调用；默认未填写任何虚构的后端地址。

配置服务进程的 `DASHSCOPE_API_KEY`、`BAILIAN_WORKSPACE_ID` 后，百炼可处理找物、语音转写与纹样生成。密钥只在服务端使用，不写进前端或 Git。服务运行后可查看 `/api/pattern/status`。

已有 8879 静态预览时，可运行 `powershell -File scripts/start-pattern.ps1` 启动 8882 同机规则服务。首页选择图片、文字或手绘输入，确认生成说明后才提交。已提交的请求按提供方实际计费；取消会中止本地等待及尚未开始的后续步骤。

手绘保留原始笔迹，可生成纹样或继续调整已生成结果；保留造型换色使用已确认的主体。原始输入、AI 结果、编辑参数与来源随草稿保存。未配置服务时页面明确提示，并保留可用的本地创作入口。GitHub 静态网页不包含这个服务，也不包含本机凭据。

2026-11-01 已通过正常页面完成一次真实百炼请求：手绘「一条向右游的小鱼」生成 1024 × 1024 PNG，进入工作台后刷新可恢复。该实测与自动化中的回放/模拟请求分开记录。

## 构建与验证

```powershell
npm run lint
npm test
npm run build
```

`lint` 检查脚本语法、资源引用与 CSS 括号；单元测试目前 141 项。修改 `source/cup3d.js` 或器物几何后，先执行 `npm run build:cup`，再执行 `npm run build`。

浏览器回归需要外部安装的 Playwright 与对应浏览器。可用 `PLAYWRIGHT_MODULE` 指向其模块目录；Chromium 测试使用 Edge，跨引擎测试还需要 Playwright WebKit。以下脚本创建隔离浏览器数据，不删除日常浏览器里的作品：

```powershell
node scripts/qa-novice-fixes.cjs
node scripts/qa-home-motion.cjs
node scripts/qa-hosted-api.cjs
node scripts/qa-work-selection.cjs
node scripts/qa-gallery-editions.cjs
node scripts/qa-material-selection.cjs
node scripts/qa-touch-blend.cjs
```

2026-11-01 新手走查修复包括：

- 整图改色前确认是否替换已有局部配色，取消保留原稿，确认后可以撤销。
- 短屏调色时保留器物预览和底部主要操作。
- 手绘草稿显示实际线稿与题材标题。
- 私有原稿显示其本机广场展示状态，点击可打开对应快照。
- AI 生成确认窗支持浏览器返回关闭、前进恢复。
- 部分 WebKit 环境无法写入 Blob 时，改用二进制存储并保持图片与档案的原子事务。

**验证边界**：Chromium 触屏模拟与 WebKit 自动化不能代替真机 Safari。尚无 iPhone，原生边缘侧滑、实际 GPU 显示和系统键盘仍待真机验证。Windows WebKit 可读出模型像素，但自动截图未捕获三维器物；不能据此宣称 iPhone 显示已通过。

## 代码与数据

`prototype/model.js`、`community.js` 管理领域数据；`app.js` 协调路由和交互；`storage-driver.js`、`storage.js` 管理 IndexedDB 事务及图片。数据库仍为 `reborn-studio`，沿用 `state` / `images`，档案 schema 为 8，兼容旧记录。

照片与来源在 `photo-catalogue.js`，广场初始作品在 `gallery-editions.js`；三维源码在 `source/`，构建后写入 `prototype/cup3d.js`。程序化器型用于设计示意，不是馆藏测绘或生产模型。清除浏览器网站数据会删除本机记录，当前未接云备份。

第三方组件声明见 [Three.js MIT](licenses/three-MIT.txt)、[Perfect Freehand MIT](licenses/perfect-freehand-MIT.txt)、[Magenta 来源与许可](licenses/magenta-source.md)。取样照片的来源与许可随物件档案保存。

早期轮次的说明、测试数量与阶段限制保留在 [开发历史](docs/development-history.md) 和各轮 `docs/*report.html` 中，它们描述对应时间的实现。当前功能与验收边界以上文为准。
