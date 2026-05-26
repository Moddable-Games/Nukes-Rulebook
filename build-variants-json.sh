#!/bin/bash
# Generates dist/moddable-chess/variants.json from variant frontmatter.
# Run from repo root: ./build-variants-json.sh

set -euo pipefail

VARIANTS_DIR="games/moddable-chess/content/variants"
OUT="dist/moddable-chess/variants.json"

echo "[" > "$OUT"
first=true

for f in "$VARIANTS_DIR"/*.md; do
  title=$(sed -n 's/^title: *"\(.*\)"/\1/p' "$f")
  slug=$(sed -n 's/^slug: *"\(.*\)"/\1/p' "$f")
  key=$(sed -n 's/^key: *"\(.*\)"/\1/p' "$f")
  board=$(sed -n 's/^board: *"\(.*\)"/\1/p' "$f")
  players=$(sed -n 's/^players: *"\(.*\)"/\1/p' "$f")
  order=$(sed -n 's/^order: *\(.*\)/\1/p' "$f")
  win=$(sed -n 's/^win: *"\(.*\)"/\1/p' "$f")
  special=$(sed -n 's/^special: *"\(.*\)"/\1/p' "$f")
  playable=$(sed -n 's/^playable: *\(.*\)/\1/p' "$f")

  if [ "$first" = true ]; then
    first=false
  else
    echo "," >> "$OUT"
  fi

  key_field=""
  if [ -n "$key" ]; then
    key_field="\"key\":\"$key\","
  fi

  playable_field=""
  if [ "$playable" = "false" ]; then
    playable_field=",\"playable\":false"
  fi

  printf '  {%s"title":"%s","slug":"%s","board":"%s","players":"%s","order":%s,"win":"%s","special":"%s"%s}' \
    "$key_field" "$title" "$slug" "$board" "$players" "$order" "$win" "$special" "$playable_field" >> "$OUT"
done

echo "" >> "$OUT"
echo "]" >> "$OUT"

echo "Generated $OUT ($(grep -c '"slug"' "$OUT") variants)"
