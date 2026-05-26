#!/bin/bash
# Bump version and propagate to all CSS/JS query strings
# Usage: ./bump.sh [major|minor|patch]

set -e

VERSION_FILE="version.txt"
CURRENT=$(cat "$VERSION_FILE" | tr -d '[:space:]')

IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT"

case "${1:-patch}" in
  major) MAJOR=$((MAJOR + 1)); MINOR=0; PATCH=0 ;;
  minor) MINOR=$((MINOR + 1)); PATCH=0 ;;
  patch) PATCH=$((PATCH + 1)) ;;
  *) echo "Usage: ./bump.sh [major|minor|patch]"; exit 1 ;;
esac

NEW="${MAJOR}.${MINOR}.${PATCH}"
echo "$NEW" > "$VERSION_FILE"

# Update query strings in index.html
sed -i '' "s/\?v=[0-9]*\.[0-9]*\.[0-9]*/\?v=${NEW}/g" index.html

# Update footer version display
sed -i '' "s/v[0-9]*\.[0-9]*\.[0-9]*<\/span>/v${NEW}<\/span>/g" index.html

# Update query strings in game shell templates
find games -name "shell.html" -exec sed -i '' "s/\?v=[0-9]*\.[0-9]*\.[0-9]*/\?v=${NEW}/g" {} +

echo "Bumped: ${CURRENT} → ${NEW}"
