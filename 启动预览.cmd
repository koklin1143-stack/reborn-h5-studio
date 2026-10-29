@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo 请先安装 Node.js，再运行此文件。
  pause
  exit /b 1
)
echo 浏览器访问 http://127.0.0.1:8765/
echo 关闭此窗口将停止预览服务。
node scripts\serve.cjs
