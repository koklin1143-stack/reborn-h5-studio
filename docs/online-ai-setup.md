# GitHub 页面连接 AI

GitHub Pages 只托管网页文件，不能运行本项目的 Node 生成服务。目前已使用阿里云函数计算托管后端，仍调用原有百炼 API。2026-11-02 已通过云端真实出图测试；网页预设服务地址，测试者可通过专用邀请链接自动连接，或手动填写独立访问码；不能填写百炼密钥。

当前部署与后续维护见 [FC 上传包与配置步骤](aliyun-fc-setup.md)。以下 Render 步骤作为备选方案保留，无需重复创建后端。

## 1. 创建后端

### 遇到要求银行卡的弹窗

如果一键部署的 Blueprint 页面显示 `Payment Information Required`，这是 Render 的托管账户/部署要求。仓库的 `render.yaml` 已明确设置 `plan: free`，没有数据库或磁盘等额外服务；仅凭弹窗无法判断是当前部署流程还是账号校验导致，也不能保证改用其他入口后必然免绑卡。

不准备绑卡时先点 `Cancel`，按以下步骤手动创建服务、明确选择 Free。若仍要求付款信息，先停止在该平台部署，不必为了连接 AI 切换到付费套餐。Render 的免费实例说明不等于对所有账号免绑卡的承诺。

### 手动创建 Web Service

1. 打开 [Render 控制台](https://dashboard.render.com/)，点击 **New + → Web Service**。
2. 连接 GitHub 仓库 `koklin1143-stack/reborn-h5-studio`，选择 `main` 分支。
3. 按表填写。**Root Directory 留空**，当前 GitHub 仓库的根目录就是服务目录。

| 设置 | 填写内容 |
| --- | --- |
| Name | `reborn-h5-api`（重名时加自己的后缀） |
| Language / Runtime | `Node` |
| Region | `Singapore` |
| Branch | `main` |
| Root Directory | 留空 |
| Build Command | `npm ci --omit=dev` |
| Start Command | `npm start` |
| Instance Type / Compute Plan | **Free（$0）** |
| Health Check Path（Advanced） | `/healthz` |

4. 创建前在 **Environment Variables** 中添加以下变量。手动创建不会自动读取 `render.yaml` 的环境变量。

| 变量名 | 值 |
| --- | --- |
| `NODE_VERSION` | `22` |
| `HOST` | `0.0.0.0` |
| `ALLOWED_ORIGINS` | `https://koklin1143-stack.github.io` |
| `DASHSCOPE_API_KEY` | 现有百炼 API 密钥 |
| `BAILIAN_WORKSPACE_ID` | 与该密钥对应的百炼业务空间 ID |
| `AI_ACCESS_CODE` | 单独生成的随机访问码，16–256 位 ASCII 字符 |

百炼密钥和业务空间值只填在服务端环境变量中，不要发到聊天或提交到 GitHub。`AI_ACCESS_CODE` 是给测试者连接网页时用的独立口令，不能用百炼密钥代替。可在密码管理器中生成至少 32 位的随机字母数字口令并保存。

5. 确认实例显示 Free 后点击 **Deploy Web Service / Create Web Service**，等状态变为 **Live**。平台会分配 `https://…onrender.com` 地址，项目从 `RENDER_EXTERNAL_URL` 自动读取自己的域名，无需手填 `PUBLIC_ORIGIN` 或 `PORT`。

需要自动配置、且账户允许 Blueprint 部署时，也可以使用原 [一键部署入口](https://render.com/deploy?repo=https://github.com/koklin1143-stack/reborn-h5-studio)。它读取 `render.yaml` 并自动生成 `AI_ACCESS_CODE`，之后从服务端环境变量页复制该访问码供受邀测试者使用。

免费实例适合试用，闲置 15 分钟后会休眠，重新访问可能等待约一分钟。百炼模型调用仍按实际用量计费。若要稳定公开运营，应选择持续运行的服务器和用户级限额；当前访问码适合受邀测试。

## 2. 连接原 GitHub 页面

服务部署成功后，继续打开原 GitHub 网页以保留该地址下的草稿：

1. 从共创进入图片、文字或手绘。
2. 点击「连接生成服务」。
3. 填写 Render 返回的 HTTPS 根地址，例如 `https://你的服务.onrender.com`，以及独立访问码。
4. 连接通过后再正常确认生成。

地址保存在当前浏览器。勾选“在这台设备记住连接”会在本机长期保留测试访问凭证，不设自动过期；取消勾选则只保留当前会话。这里不填写百炼密钥。生成、找物与语音共用连接。服务睡眠时可等待唤醒后重试，不会因连接检查而生成图片或扣除模型调用费用。

确认长期地址后，可把 `prototype/api-config.js` 的 `apiBase` 改成这个公开 HTTPS 根地址，再构建并提交；这样新访问者不用填写地址，只需访问码。没有真实地址时保持空值。

后端只接受配置的前端来源，默认是 `https://koklin1143-stack.github.io`。更换前端域名时，将准确 origin 填入服务端 `ALLOWED_ORIGINS`，多个以逗号分隔。跨域策略不代替访问码；所有付费 POST 接口都验证访问码。

## 3. 其他 Node 平台

同一实现可部署到支持 Node 的服务器。设置：

| 环境变量 | 用途 |
| --- | --- |
| `HOST=0.0.0.0` | 接收平台代理流量 |
| `PORT` | 平台指定端口 |
| `PUBLIC_ORIGIN` | 后端公开 HTTPS 根地址 |
| `ALLOWED_ORIGINS` | 前端 origin 列表 |
| `AI_ACCESS_CODE` | 16–256 字符的随机访问码 |
| `DASHSCOPE_API_KEY` | 百炼密钥，仅服务端 |
| `BAILIAN_WORKSPACE_ID` | 百炼业务空间 |

没有公开域名配置时，服务保持本机模式。不要把本机模式直接暴露到公网。不要使用短期隧道作为长期页面的固定 API。

## 验证

- `GET /healthz` 应返回 `{"ok":true}`。
- `GET /api/pattern/status` 不需要访问码，返回服务是否配置、规则版本和访问状态，不返回密钥。
- 页面连接时验证 `GET /api/access`，错误访问码返回 401。
- 配置后在真实线上页面完成一次生成、工作台使用及刷新恢复，才算线上 AI 验收完成。

2026-11-02 已验证 FC 的真实出图、百炼目录匹配和合成测试录音识别。邀请、手动连接、跨会话恢复和三种创作入口已通过桌面浏览器手机尺寸模拟；这不等于真机 Safari 验收。

参考：[GitHub Pages 定义](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)、[Render 首次部署](https://render.com/docs/your-first-deploy)、[Web Service 配置](https://render.com/docs/web-services)、[Render Blueprint](https://render.com/docs/blueprint-spec)、[免费实例限制](https://render.com/docs/free)。部署入口说明于 2026-11-02 根据绑卡弹窗补充，Render 未部署，当前实际使用 FC。

## 测试邀请与长期记住

- 邀请格式为正式网页地址加 `#ai-invite=独立的48位十六进制测试访问码`。只把实际链接放在仓库外的私有文件中，不提交到 GitHub。
- 网页先从地址栏移除片段，再向内置的后端地址验证；验证通过才长期保存。链接不能指定任意后端。普通页面访问不会触发模型生成。
- 测试者首次打开邀请链接即可使用，之后同一浏览器无需重新输入。清除网站数据、无痕窗口或换浏览器需重新打开邀请。
- “我的 → AI 连接设置 → 清除此设备的连接”可在本机退出。云端更换 `AI_ACCESS_CODE` 并部署，会撤销全部旧邀请与设备凭证；当前不支持单独撤销某个测试者。
- 这是受邀测试方案：链接和本机凭证都授予共享调用权限，不能当作无害的公开链接。百炼密钥始终只在后端。当前没有用户级每日额度，正式公开测试应先加入账号/设备令牌、服务端额度与费用上限。
- 浏览器持久存储可被同源脚本访问，不声称它等同于 HttpOnly 会话保护；参见 [OWASP 本地存储说明](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage)。
