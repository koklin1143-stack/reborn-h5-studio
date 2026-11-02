# 百炼 + 阿里云函数计算：部署现有 AI 后端

网页继续放在 GitHub Pages，出图仍由已有百炼业务空间完成。函数计算（FC）只运行中间的 Node.js 后端。

2026-11-02：已部署到 `https://reborn-h-api-tvgcnmrfdl.cn-beijing.fcapp.run`。健康检查、访问码校验、GitHub 来源的跨域预检均已通过；真实出图请求在约 8 秒返回有效的 PNG。网页已预设服务地址，测试者可通过私发邀请链接自动连接，也可手动输入独立访问码。手机上的完整创作流程需另行验收。

## 开通前

使用已有阿里云账号登录 [函数计算控制台](https://fcnext.console.aliyun.com/)。如尚未开通，先核对开通协议、试用额度和计费后自己确认。函数计算的资源使用/公网流量与百炼模型调用分开计费，试用额度和有效期以账号显示为准；不承诺免认证或永久免费。先不要购买资源包或配置常驻实例。

## 创建与上传

1. 地域选择北京（现有百炼适配器使用北京业务空间接口），创建 Web 函数，使用自定义运行时 `custom.debian12`。不是内置 Node.js 事件函数。
2. 添加官方公共层 `acs:fc:cn-beijing:official:layers/Nodejs22/versions/4` 或更新的修复版本。
3. 上传 `reborn-fc-api.zip`。ZIP 顶层应直接包含 `scripts/`、`DEPLOY.md` 和 `manifest.json`，不要再套一层文件夹。
4. 启动命令填 `/opt/nodejs22/bin/node`，参数填 `/code/scripts/server.cjs`，监听端口填 `9000`。
5. 超时时间设为 `300` 秒（出图请求内部上限 270 秒），初始建议 CPU 1 核、内存 1024 MB、单实例并发 1；预留/常驻实例 0。设置最大实例数 1，以受邀测试为范围，之后按监测结果调整。开公网出站访问，使后端能请求百炼；无需接入 VPC 或数据库。
6. 创建 HTTP 触发器，GET、POST、OPTIONS；仅使用 HTTPS 地址。当前前端采用应用自己的访问码鉴权，HTTP 触发器需让请求到达代码（选择“无需认证”）。这会开放网络入口，但所有生成/搜索/语音 POST 仍由代码验证访问码。首次发布该入口前由账号所有者确认；不要把百炼密钥作为访问码。
7. 复制触发器提供的 HTTPS 根地址，在下面配置 `PUBLIC_ORIGIN`，再部署代码。不要用猜测地址调用。首次触发器创建到完成环境配置之间，服务会因配置缺失拒绝启动，不会退回无鉴权的本地模式。

## 环境变量

| 名称 | 值 |
| --- | --- |
| `PUBLIC_ORIGIN` | 触发器 HTTPS 根地址，无路径、查询参数，例如 `https://实际名称.cn-beijing.fcapp.run` |
| `ALLOWED_ORIGINS` | `https://koklin1143-stack.github.io` |
| `AI_ACCESS_CODE` | 独立随机访问码，至少 32 位字母数字；仅给受邀测试者 |
| `DASHSCOPE_API_KEY` | 已有百炼密钥，仅填云端环境变量 |
| `BAILIAN_WORKSPACE_ID` | 已有北京百炼业务空间 ID，`llm-…` |
| `PORT` | `9000` |

不上传 `.env`、本地作品或账号密钥。部署包已包含所需 JS 依赖和出图参考素材，无需在云端执行 npm install。当前长期记住的访问码只适合受邀测试，不能作为正式公开服务的用户级配额系统。

## 验收与连接

- `/healthz` 返回 `{"ok":true}`；`/api/pattern/status` 的 `available` 为 true、`accessRequired` 为 true。
- 未带访问码请求 `/api/access` 必须返回 401。若请求返回 403，核对真实 Host 和 `PUBLIC_ORIGIN`，不要移除域名检查。
- 原 GitHub 网页内选择“连接生成服务”，填写 HTTPS 根地址和独立访问码。继续在原 GitHub 地址使用，草稿不迁移。
- HTTP 预检 OPTIONS 必须允许原 GitHub origin、Content-Type 和 Authorization；先沿用服务端 CORS，不额外叠加网关 CORS。
- 最后在手机上完成一次实际出图、使用生成纹样和刷新恢复。该步骤会消耗百炼用量；未完成前不能声称线上 AI 已开通。

默认 FC 域名可能给浏览器直接打开的响应添加附件下载头，网页的 fetch API 调用不依赖直接展示 HTML。长期生产域名与限额另行配置。

## 重建部署包

本地 `npm ci` 后执行 `node scripts/build-fc.cjs`，会输出一个独立临时目录；只压缩该目录的内容到 ZIP。不会读取运行时密钥。项目根目录包含大量前端资源和本机文件，不能直接整包上传。

参考：[自定义运行时](https://www.alibabacloud.com/help/en/functioncompute/custom-runtime/)、[官方 Nodejs22 公共层](https://github.com/awesome-fc/awesome-layers/blob/main/docs/Nodejs22/README.md)、[HTTP 触发器](https://help.aliyun.com/zh/functioncompute/configure-an-http-trigger-for-a-function-and-invoke-the-function-by-using-http-requests)、[计费说明](https://www.alibabacloud.com/help/zh/functioncompute/faq-about-billing)。核对日期：2026-11-02。
