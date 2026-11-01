$ErrorActionPreference = 'Stop'
$env:PORT = '8882'
foreach ($name in 'DASHSCOPE_API_KEY','BAILIAN_WORKSPACE_ID') {
    if (-not [Environment]::GetEnvironmentVariable($name, 'Process')) {
        [Environment]::SetEnvironmentVariable($name, [Environment]::GetEnvironmentVariable($name, 'User'), 'Process')
    }
    if (-not [Environment]::GetEnvironmentVariable($name, 'Process')) {
        throw "Missing server environment variable: $name"
    }
}
node --watch (Join-Path $PSScriptRoot 'serve.cjs')

