#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"

echo "Iniciando NefroCare en puerto ${PORT}..."
echo "URL: http://localhost:${PORT}"
python3 -m http.server "${PORT}" --bind 0.0.0.0
