@echo off
chcp 65001 >nul
title StreamLink - Personal Movie Streaming Platform
color 0A
cd /d "%~dp0"

echo ================================================================
echo        🎬 StreamLink - Self-Hosted Personal Streaming
echo ================================================================
echo.

:: Check Node.js runtime
where node >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed or not in your system PATH.
    echo Please install Node.js (v18+) from https://nodejs.org
    echo.
    pause
    exit /b 1
)

:: Check if server dependencies (express, etc.) are installed
if not exist "node_modules\express\" (
    echo [INFO] Backend packages missing or incomplete. Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo [ERROR] npm install failed. Please check your internet connection or Node installation.
        pause
        exit /b 1
    )
    echo [✓] Backend dependencies installed successfully.
    echo.
)

:: Check if client production build exists
if not exist "client\dist\index.html" (
    echo [INFO] Web client production build missing. Preparing client...
    if not exist "client\node_modules\" (
        echo [INFO] Installing frontend dependencies...
        cd client && call npm install && cd ..
    )
    echo [INFO] Building modern web client...
    cd client && call npm run build && cd ..
    echo [✓] Web client built successfully.
    echo.
)

echo Starting StreamLink Backend on port 5050...
echo.

:: Launch default browser to StreamLink in 2 seconds
start "" powershell -NoProfile -Command "Start-Sleep -Seconds 2; Start-Process 'http://localhost:5050'"

:: Run Node server
node server/index.js

pause
