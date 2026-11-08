#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

echo "================================================================"
echo "       🎬 StreamLink - Self-Hosted Personal Streaming"
echo "================================================================"
echo ""

if [ ! -d "node_modules/express" ]; then
    echo "[INFO] Backend dependencies missing. Installing..."
    npm install
fi

if [ ! -f "client/dist/index.html" ]; then
    echo "[INFO] Client production build missing. Building..."
    if [ ! -d "client/node_modules" ]; then
        cd client && npm install && cd ..
    fi
    cd client && npm run build && cd ..
fi

echo "Starting StreamLink Backend on port 5050..."
echo ""

(sleep 2 && open "http://localhost:5050") 2>/dev/null &

node server/index.js
