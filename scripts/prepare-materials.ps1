param(
    [string]$InputFolder,
    [string]$OutputFolder,
    [string]$Targets
)
$ErrorActionPreference = 'Stop'
if ([bool]$InputFolder -ne [bool]$OutputFolder -or ($Targets -and !$InputFolder)) {
    throw 'Use -InputFolder and -OutputFolder together. -Targets is optional for a batch.'
}
$env:PYTHONUTF8 = '1'
$cache = Join-Path $env:LOCALAPPDATA 'RebornH5/MaterialTools'
$envPath = Join-Path $cache 'venv'
$pythonPath = Join-Path $envPath 'Scripts/python.exe'
if (!(Test-Path -LiteralPath $pythonPath)) {
    python -m venv --system-site-packages $envPath
    if ($LASTEXITCODE -ne 0) { throw 'Python 3.11+ is required.' }
}
& $pythonPath -c "import sys; sys.exit(0 if sys.version_info >= (3,11) else 1)"
if ($LASTEXITCODE -ne 0) { throw 'Python 3.11+ is required.' }
& $pythonPath -c "import sys
try: import onnxruntime, cv2, numpy, PIL
except (ImportError, OSError): sys.exit(1)"
if ($LASTEXITCODE -ne 0) {
    & $pythonPath -m pip install 'onnxruntime>=1.18,<2' 'numpy>=1.26,<3' 'opencv-python>=4.8,<5' 'Pillow>=10,<14'
    if ($LASTEXITCODE -ne 0) { throw 'Could not install photo processing dependencies.' }
}
$jobArgs = @('--models', (Join-Path $cache 'models'), '--download-models')
if ($InputFolder) {
    $jobArgs += @('--batch', $InputFolder, '--output', $OutputFolder)
    if ($Targets) { $jobArgs += @('--targets', $Targets) }
} else {
    $jobArgs += '--display-only'
}
& $pythonPath (Join-Path $PSScriptRoot 'prepare-enamel.py') @jobArgs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
if (!$InputFolder) {
    node (Join-Path $PSScriptRoot 'build.cjs')
    exit $LASTEXITCODE
}

