#!/usr/bin/env bash
set -e

# Change to the directory of this script
cd "$(dirname "$0")"

REPO_URL="https://github.com/lakshyabrother/Steam-Link---Emphasizes-offline-playback-and-local-network-streaming..git"
BRANCH="main"

echo "================================================================"
echo "       🎬 STREAMLINK - PUSH COMMITS TO GITHUB (macOS)"
echo "================================================================"
echo "Repository: $REPO_URL"
echo "Branch:     $BRANCH"
echo ""

# 1. Initialize Git repository if not present (e.g. downloaded from GitHub ZIP)
if [ ! -d ".git" ]; then
    echo "[*] No Git repository found in this folder. Initializing..."
    git init -b "$BRANCH"
    git remote add origin "$REPO_URL"
    echo "[✓] Git repository initialized."
else
    if ! git remote | grep -q "^origin$"; then
        git remote add origin "$REPO_URL"
    else
        git remote set-url origin "$REPO_URL"
    fi
fi

# 2. Stage all files
echo "[*] Staging all changes..."
git add .

# 3. Check for changes to commit
if git diff-index --quiet HEAD -- 2>/dev/null; then
    echo "[i] No new changes to commit."
else
    echo ""
    read -p "Enter commit message (or press [Enter] for default): " MSG
    if [ -z "$MSG" ]; then
        MSG="Update StreamLink with Vercel and macOS fixes"
    fi
    git commit -m "$MSG"
    echo "[✓] Changes committed successfully."
fi

# 4. Choose Authentication Method
echo ""
echo "Choose authentication method:"
echo "  [1] Browser / Git Credential Manager (Recommended)"
echo "  [2] Paste GitHub Personal Access Token (PAT)"
echo ""
read -p "Select option (1 or 2): " CHOICE

if [ "$CHOICE" = "2" ]; then
    echo ""
    read -p "Paste your GitHub Personal Access Token: " TOKEN
    echo ""
    if [ -z "$TOKEN" ]; then
        echo "Error: Token cannot be empty."
        exit 1
    fi

    AUTH_URL="https://lakshyabrother:${TOKEN}@github.com/lakshyabrother/Steam-Link---Emphasizes-offline-playback-and-local-network-streaming..git"
    echo "[*] Pushing to GitHub using Personal Access Token..."
    
    if ! git push "$AUTH_URL" "$BRANCH"; then
        echo ""
        echo "[!] Standard push was rejected (likely because this folder was downloaded as a ZIP and lacks remote history)."
        read -p "Force push your current local code to GitHub? (y/N): " FORCE_CHOICE
        if [ "$FORCE_CHOICE" = "y" ] || [ "$FORCE_CHOICE" = "Y" ]; then
            git push "$AUTH_URL" "$BRANCH" --force
        else
            echo "Push cancelled."
            exit 1
        fi
    fi
else
    echo ""
    echo "[*] Pushing to GitHub via default credentials..."
    if ! git push -u origin "$BRANCH"; then
        echo ""
        echo "[!] Standard push was rejected (likely because this folder was downloaded as a ZIP and lacks remote history)."
        read -p "Force push your current local code to GitHub? (y/N): " FORCE_CHOICE
        if [ "$FORCE_CHOICE" = "y" ] || [ "$FORCE_CHOICE" = "Y" ]; then
            git push -u origin "$BRANCH" --force
        else
            echo "Push cancelled."
            exit 1
        fi
    fi
fi

echo ""
echo "================================================================"
echo "🎉 Done! Your code has been pushed to GitHub."
echo "Vercel will automatically redeploy your latest changes."
echo "================================================================"
