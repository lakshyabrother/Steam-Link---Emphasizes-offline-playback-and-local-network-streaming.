#!/usr/bin/env bash
set -e

# Change to the directory of this script
cd "$(dirname "$0")"

echo "================================================================"
echo "        🎬 StreamLink - Personal Movie Streaming Platform"
echo "================================================================"
echo ""

# Check if node_modules exists, install if missing
if [ ! -d "node_modules" ]; then
    echo "[*] First-time setup: installing dependencies..."
    npm install
fi

echo "[*] Starting StreamLink Backend on port 5050..."
echo ""

# Launch default browser in 2 seconds
(sleep 2 && open "http://localhost:5050") 2>/dev/null &

# Run Node server
node server/index.js

