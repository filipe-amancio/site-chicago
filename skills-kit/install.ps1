<#
Instala as skills vendorizadas neste kit em ~/.claude/skills/

Uso:
  .\install.ps1            instala as skills que ainda nao existem
  .\install.ps1 -Force     sobrescreve skills ja instaladas
  .\install.ps1 -List      so lista o que seria instalado, sem copiar

Cada subpasta de .\skills\ que contiver um SKILL.md e tratada como uma skill.
#>
[CmdletBinding()]
param(
    [switch]$Force,
    [switch]$List
)

$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$srcDir = Join-Path $scriptDir 'skills'
$configDir = if ($env:CLAUDE_CONFIG_DIR) { $env:CLAUDE_CONFIG_DIR } else { Join-Path $HOME '.claude' }
$destDir = Join-Path $configDir 'skills'

if (-not (Test-Path -LiteralPath $srcDir)) {
    Write-Error "pasta de skills nao encontrada em $srcDir"
}

$skillDirs = Get-ChildItem -LiteralPath $srcDir -Directory -ErrorAction SilentlyContinue |
    Where-Object { Test-Path -LiteralPath (Join-Path $_.FullName 'SKILL.md') }

if (-not $skillDirs) {
    Write-Error "nenhuma skill encontrada em $srcDir (subpasta precisa conter SKILL.md)"
}

if ($List) {
    $skillDirs | ForEach-Object { $_.Name }
    return
}

$installed = 0
$skipped = 0

foreach ($skill in $skillDirs) {
    $target = Join-Path $destDir $skill.Name

    if ((Test-Path -LiteralPath $target) -and -not $Force) {
        Write-Host "= $($skill.Name) (ja existe, use -Force para sobrescrever)"
        $skipped++
        continue
    }

    if (-not (Test-Path -LiteralPath $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    if (Test-Path -LiteralPath $target) {
        Remove-Item -LiteralPath $target -Recurse -Force
    }
    Copy-Item -LiteralPath $skill.FullName -Destination $target -Recurse
    Write-Host "+ $($skill.Name)"
    $installed++
}

Write-Host ""
Write-Host "destino: $destDir"
Write-Host "instaladas: $installed  |  puladas: $skipped"
Write-Host "abra uma sessao nova do Claude Code para as skills aparecerem."
