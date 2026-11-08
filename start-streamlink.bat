@echo off
title StreamLink - Personal Movie Streaming Platform
color 0A
cd /d "%~dp0"

echo ================================================================
echo        [StreamLink] Self-Hosted Personal Streaming
echo ================================================================
echo.

where node >nul 2>&1
if errorlevel 1 goto NO_NODE

if not exist "node_modules\express\" goto INSTALL_BACKEND
goto CHECK_FRONTEND

:INSTALL_BACKEND
echo [INFO] Backend dependencies not found. Installing packages...
call npm.cmd install
if errorlevel 1 goto INSTALL_ERROR
echo [OK] Backend dependencies installed successfully.
echo.

:CHECK_FRONTEND
if not exist "client\dist\index.html" goto BUILD_FRONTEND
goto START_SERVER

:BUILD_FRONTEND
echo [INFO] Web client build not found. Preparing client...
if not exist "client\node_modules\" (
    echo [INFO] Installing frontend dependencies...
    cd client
    call npm.cmd install
    cd ..
)
echo [INFO] Building modern web client...
cd client
call npm.cmd run build
cd ..
if errorlevel 1 goto BUILD_ERROR
echo [OK] Web client built successfully.
echo.

:START_SERVER
echo Starting StreamLink Backend on port 5050...
echo.

:: Launch default browser to StreamLink in 2 seconds
start "" powershell -NoProfile -Command "Start-Sleep -Seconds 2; Start-Process 'http://localhost:5050'"

:: Run Node server
node server/index.js
goto END

:NO_NODE
echo.
echo [ERROR] Node.js is not installed or not in your system PATH.
echo Please install Node.js from https://nodejs.org and restart this script.
echo.
pause
exit /b 1

:INSTALL_ERROR
echo.
echo [ERROR] npm install failed. Please check your internet connection or Node installation.
echo.
pause
exit /b 1

:BUILD_ERROR
echo.
echo [ERROR] Web client build failed.
echo.
pause
exit /b 1

:END
pause