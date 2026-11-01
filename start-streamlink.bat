@echo off
title StreamLink - Personal Movie Streaming Platform
color 0A
cd /d "%~dp0"

echo ================================================================
echo        🎬 StreamLink - Self-Hosted Personal Streaming
echo ================================================================
echo.
echo Starting StreamLink Backend on port 5050...
echo.

:: Launch default browser to StreamLink in 2 seconds
start "" powershell -NoProfile -Command "Start-Sleep -Seconds 2; Start-Process 'http://localhost:5050'"

:: Run Node server
node server/index.js

pause

