# GitHub 页面连接 AI

GitHub Pages 只托管网页文件，不能运行本项目的 Node 生成服务。当前仓库已准备 Render 部署配置；**提交配置不等于线上服务已部署**。

## 1. 创建后端

打开 [Render 部署入口](https://render.com/deploy?repo=https://github.com/koklin1143-stack/reborn-h5-studio)，用你的账号登录并连接此 GitHub 仓库。平台读取根目录的 `render.yaml`：

- Node 22，构建命令 `npm ci --omit=dev`，启动命令 `npm start`。
- 新加坡区域，免费测试实例，健康检查 `/healthz`。
- 平台分配 HTTPS 地址，项目从 `RENDER_EXTERNAL_URL` 读取自己的域名。

在 Render 的环境变量页面填写 `DASHSCOPE_API_KEY` 和 `BAILIAN_WORKSPACE_ID`。使用已有百炼业务空间的值，不能填入 GitHub 代码、网页或聊天。平台会生成独立的 `AI_ACCESS_CODE`；从环境变量页复制它提供给测试者。

免费实例适合试用，闲置 15 分钟后会休眠，重新访问可能等待约一分钟。百炼模型调用仍按实际用量计费。若要稳定公开运营，应选择持续运行的服务器和用户级限额；当前访问码适合受邀测试。

## 2. 连接原 GitHub 页面

服务部署成功后，继续打开原 GitHub 网页以保留该地址下的草稿：

1. 从共创进入图片、文字或手绘。
2. 点击「连接生成服务」。
3. 填写 Render 返回的 HTTPS 根地址，例如 `https://你的服务.onrender.com`，以及独立访问码。
4. 连接通过后再正常确认生成。

地址保存在当前浏览器，访问码只保存在当前标签页会话中。这里不填写百炼密钥。生成、找物与语音共用连接。服务睡眠时可等待唤醒后重试，不会因连接检查而生成图片或扣除模型调用费用。

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

目前已验证本地服务及 HTTPS/跨域浏览器模拟。尚需账号创建云服务、填写运行时密钥与真实云端生成验证。

参考：[GitHub Pages 定义](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)、[Render Blueprint](https://render.com/docs/blueprint-spec)、[免费实例限制](https://render.com/docs/free)。
