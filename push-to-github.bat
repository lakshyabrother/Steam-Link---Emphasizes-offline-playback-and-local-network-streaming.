@echo off
setlocal enabledelayedexpansion
title StreamLink GitHub Publisher
cd /d "%~dp0"

echo ================================================================
echo           STREAMLINK - PUSH COMMITS TO GITHUB
echo ================================================================
echo Repository: https://github.com/lakshyabrother/Steam-Link---Emphasizes-offline-playback-and-local-network-streaming..git
echo Branch:     main
echo.

if not exist ".git\" (
    echo [*] Initializing Git repository...
    git init -b main
    git remote add origin https://github.com/lakshyabrother/Steam-Link---Emphasizes-offline-playback-and-local-network-streaming..git
)

echo [*] Staging changes...
git add -A

git diff-index --quiet HEAD -- 2>nul
if errorlevel 1 (
    set /p MSG="Enter commit message (press Enter for default): "
    if "!MSG!"=="" set MSG="Auto-update StreamLink fixes and dependencies check"
    git commit -m "!MSG!"
    echo [OK] Committed changes.
) else (
    echo [i] Working tree clean, nothing new to commit.
)

echo.
echo Choose authentication method:
echo   [1] Browser Sign-In (Git Credential Manager - Recommended)
echo   [2] Paste GitHub Personal Access Token (PAT)
echo.
set /p CHOICE="Select option (1 or 2): "

if "%CHOICE%"=="2" (
    echo.
    set /p TOKEN="Paste your GitHub Personal Access Token: "
    echo Pushing with Token...
    git push "https://lakshyabrother:!TOKEN!@github.com/lakshyabrother/Steam-Link---Emphasizes-offline-playback-and-local-network-streaming..git" main
) else (
    echo.
    echo Pushing to GitHub...
    git push -u origin main
)

echo.
echo ================================================================
echo Done! Verify status above.
echo ================================================================
pause