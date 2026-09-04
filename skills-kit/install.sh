#!/usr/bin/env bash
# Instala as skills vendorizadas neste kit em ~/.claude/skills/
#
# Uso:
#   ./install.sh            instala as skills que ainda nao existem
#   ./install.sh --force    sobrescreve skills ja instaladas
#   ./install.sh --list     so lista o que seria instalado, sem copiar
#
# Cada subpasta de ./skills/ que contiver um SKILL.md e tratada como uma skill.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC_DIR="$SCRIPT_DIR/skills"
DEST_DIR="${CLAUDE_CONFIG_DIR:-$HOME/.claude}/skills"

FORCE=0
LIST_ONLY=0
for arg in "$@"; do
  case "$arg" in
    --force) FORCE=1 ;;
    --list)  LIST_ONLY=1 ;;
    -h|--help) sed -n '2,11p' "$0"; exit 0 ;;
    *) echo "argumento desconhecido: $arg" >&2; exit 2 ;;
  esac
done

if [ ! -d "$SRC_DIR" ]; then
  echo "erro: pasta de skills nao encontrada em $SRC_DIR" >&2
  exit 1
fi

shopt -s nullglob
found=0
installed=0
skipped=0

for skill_md in "$SRC_DIR"/*/SKILL.md; do
  found=1
  skill_path="$(dirname "$skill_md")"
  skill_name="$(basename "$skill_path")"
  target="$DEST_DIR/$skill_name"

  if [ "$LIST_ONLY" -eq 1 ]; then
    echo "$skill_name"
    continue
  fi

  if [ -d "$target" ] && [ "$FORCE" -eq 0 ]; then
    echo "= $skill_name (ja existe, use --force para sobrescrever)"
    skipped=$((skipped + 1))
    continue
  fi

  mkdir -p "$DEST_DIR"
  rm -rf "$target"
  cp -R "$skill_path" "$target"
  echo "+ $skill_name"
  installed=$((installed + 1))
done

if [ "$found" -eq 0 ]; then
  echo "nenhuma skill encontrada em $SRC_DIR (subpasta precisa conter SKILL.md)" >&2
  exit 1
fi

if [ "$LIST_ONLY" -eq 0 ]; then
  echo
  echo "destino: $DEST_DIR"
  echo "instaladas: $installed  |  puladas: $skipped"
  echo "abra uma sessao nova do Claude Code para as skills aparecerem."
fi
