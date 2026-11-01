param([switch]$NoBrowser)

$ErrorActionPreference = 'Stop'
$project = Split-Path -Parent $PSScriptRoot
$origin = 'http://127.0.0.1:8879'
function Test-PreviewReady {
    try {
        $request = [Net.WebRequest]::Create("$origin/api/pattern/status")
        $request.Proxy = $null
        $request.Timeout = 1200
        $response = $request.GetResponse()
        try {
            $reader = New-Object IO.StreamReader($response.GetResponseStream())
            try { $status = $reader.ReadToEnd() | ConvertFrom-Json } finally { $reader.Dispose() }
            return ($status.ruleVersion -like 'enamel-ornament-*')
        } finally { $response.Dispose() }
    } catch { return $false }
}

if (-not (Test-PreviewReady)) {
    $node = (Get-Command node.exe -CommandType Application -ErrorAction SilentlyContinue | Select-Object -First 1).Source
    if (-not $node) { throw '请先安装 Node.js，再双击启动预览。' }
    foreach ($name in 'DASHSCOPE_API_KEY','BAILIAN_WORKSPACE_ID') {
        if (-not [Environment]::GetEnvironmentVariable($name, 'Process')) {
            [Environment]::SetEnvironmentVariable($name, [Environment]::GetEnvironmentVariable($name, 'User'), 'Process')
        }
    }
    $env:PORT = '8879'
    $server = Start-Process -FilePath $node -ArgumentList 'scripts/serve.cjs' -WorkingDirectory $project -WindowStyle Hidden -PassThru
    $ready = $false
    for ($attempt = 0; $attempt -lt 15; $attempt++) {
        Start-Sleep -Milliseconds 200
        $ready = Test-PreviewReady
        if ($ready -or $server.HasExited) { break }
    }
    if (-not $ready) { throw '预览启动失败。请检查 8879 端口是否被其他程序占用。' }
}
if (-not $NoBrowser) { Start-Process "$origin/index.html#mine" }
