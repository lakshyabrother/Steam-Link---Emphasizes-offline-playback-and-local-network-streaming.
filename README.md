# 🎬 StreamLink — Self-Hosted Personal Movie Streaming Platform with Cloudflare Tunnel

Turn your Windows PC into a private, high-performance movie streaming server. Select any local movie folder on your computer, automatically scan all movies and subtitles, and generate one secure internet access link powered by Cloudflare Tunnel so anyone you authorize can stream movies directly from your PC onto their phones, tablets, or laptops anywhere in the world.

> **Privacy & Storage Guarantee**: Movie files remain 100% on your local computer. No movie files are ever uploaded to cloud storage or duplicated on external servers.

---

## 🚀 Key Features

### 1. 📂 Automatic Movie Folder Scanner
- **Native Windows Folder Selection**: Launch the native Windows folder picker directly on your PC, or use the interactive web drive and directory browser.
- **Recursive Scanning**: Automatically discovers movies across all subdirectories with safety filters.
- **Clean Title Parsing**: Automatically removes release scene tags (`1080p`, `WEB-DL`, `BluRay`, `x264`, `x265`, `HDHub4u`, etc.) and extracts release years, resolutions (`4K`, `1080p`, `720p`), and codecs.
- **Subtitle Auto-Pairing**: Automatically detects subtitle files (`.srt`, `.vtt`) in English, Hindi, and other languages, and converts them on-the-fly to WebVTT for instant browser playback.
- **Library Synchronization**: Rescan Library button detects newly added movies and safely cleans up moved or deleted files.

### 2. ⚡ Advanced Video Player
- Custom cinematic player built specifically for web streaming.
- **HTTP Range Requests**: Supports `HTTP 206 Partial Content`, `Content-Range`, and `Accept-Ranges: bytes` for instantaneous seeking without loading entire movies into RAM.
- **Resume Playback**: Remembers playback progress per user profile and prompts to resume from the exact previous timestamp.
- **Timeline Scrubber**: Real-time buffer indicator and timestamp preview.
- **Keyboard Shortcuts**: Space (Play/Pause), Left/Right Arrows (±10s seek), Up/Down Arrows (Volume), `M` (Mute), `F` (Fullscreen), `Esc` (Exit).
- **Playback Speed**: Adjust speed between 0.5x, 0.75x, 1x, 1.25x, 1.5x, and 2x.
- **Subtitle Selector**: Switch between available subtitle tracks on the fly.

### 3. 🌐 Cloudflare Tunnel — Remote Access System
- **Official cloudflared Executable**: Built-in `bin/cloudflared.exe` process management directly from Node.js.
- **Quick Tunnel Support**: Generates a free, secure `https://*.trycloudflare.com` link out of the box with zero router port forwarding or public IP exposure.
- **Custom Domain / Token Support**: Optional Cloudflare account tunnel tokens for permanent custom hostnames.
- **One-Click Start / Stop**: Remote access is strictly manual and only runs when you click **START SERVER**.
- **One-Link Sharing**: One-click **Copy Public Link** and high-contrast **QR Code** for instant mobile scanning.

### 4. 📊 Server Dashboard
- **Live Server & Tunnel Status**: Real-time status indicators (Online, Starting, Stopped, Error).
- **Bandwidth Monitor**: Real-time upload speed (KB/s, MB/s) and cumulative data streamed.
- **Active Viewer Sessions**: Live table showing viewer usernames, movie currently playing, client IP address, and connection duration.
- **Library Statistics**: Total movies count, library folder path, and disk storage consumed.
- **Viewer Accounts Management**: Create and revoke password-protected viewer accounts.
- **Backup & Restore**: Export and restore database state (user profiles, watch history, favorites, settings) as JSON.

---

## 🛠️ Quick Start Guide

### 1. Start StreamLink
Double-click:
```bat
start-streamlink.bat
```
Or start manually via terminal:
```bash
npm start
```
StreamLink will open automatically in your browser at `http://localhost:5050`.

### 2. Default Administrator Credentials
- **Username**: `admin`
- **Password**: `admin123`

### 3. Select Movie Folder
1. Go to the **Dashboard** or click **Movie Folder** in the top navigation.
2. Click **Browse on Host PC** to open the native Windows folder selector, or browse drives (`C:\`, `D:\`, `E:\`) interactively.
3. Click **Select & Scan Folder**. Your library will populate in seconds!

### 4. Start Remote Access & Share
1. In the **Dashboard**, click **START SERVER**.
2. StreamLink starts the Cloudflare Tunnel and displays your secure public HTTPS URL.
3. Click **Copy** or scan the **QR Code** on your phone.
4. Add viewer accounts under **Viewer Accounts** in the Dashboard and share the link with them!

---

## 🏗️ Technology Architecture

- **Backend**: Node.js v24 + Express.js
- **Database**: SQLite (via Node.js built-in `node:sqlite` DatabaseSync with WAL journal mode)
- **Frontend**: React 18 + Vite + CSS3 (Cinematic dark theme, fully responsive)
- **Tunnel**: Cloudflare official `cloudflared.exe`
- **Metadata**: Pure-JS container tokenizer + Windows Shell integration

