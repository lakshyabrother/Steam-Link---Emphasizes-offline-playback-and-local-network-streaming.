#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

echo "================================================================"
echo "       🎬 StreamLink - Self-Hosted Personal Streaming"
echo "================================================================"
echo ""
echo "Starting StreamLink Backend on port 5050..."
echo ""

# Launch default browser to StreamLink in 2 seconds
(sleep 2 && open "http://localhost:5050") 2>/dev/null &

# Run Node server
node server/index.js

