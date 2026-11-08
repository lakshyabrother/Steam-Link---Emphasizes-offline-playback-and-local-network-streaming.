# 🎬 StreamLink 2.0 — OBSIDIAN CINEMA
### Beyond the Screen. Self-Hosted Personal 3D Movie Streaming Platform with Cloudflare Tunnel

Turn your Windows PC into a private, high-performance digital cinema. Select any local movie folder on your computer, automatically scan all movies and subtitles, match official TMDB posters and backdrops, step into an immersive Three.js WebGL 3D curved cinema lobby, and generate one secure internet access link powered by Cloudflare Tunnel so anyone you authorize can stream movies directly from your PC onto their phones, tablets, or laptops anywhere in the world.

> **Privacy & Storage Guarantee**: Movie files remain 100% on your local computer. No movie files are ever uploaded to cloud storage or duplicated on external servers.

---

## 🚀 Key Features

### 1. 🌌 CINE-3D Spatial Cinema Lobby
- **Three.js WebGL 3D Environment**: Interactive curved movie carousel floating above an ambient cybernetic ground grid.
- **Card Size Switcher**: One-click toggling between **Small** (panoramic depth), **Medium** (balanced default), and **Large** (cinematic showcase).
- **Cursor-Responsive Ambient Lighting**: Soft pointer-following spotlight with smooth inertia and ambient backdrops.
- **Hardware Adaptive Modes**: High (Full WebGL 3D), Medium (Optimized particles), and Low (CSS 2D carousel fallback).

### 2. 🎨 Obsidian Cinema Design System
- **Cinematic Palette**: Pure Obsidian background (`#090B10`), elevated panels (`#171D29`), and Soft Lavender interactive accents (`#B69AFF`).
- **Dynamic Artwork Color Extraction**: HTML5 Canvas samples vivid dominant hues from movie posters to dynamically tint detail modals and ambient backdrops.
- **Microinteractions**: Restrained glassmorphism, 3D card tilt, smooth page transitions, and custom `ObsidianLoader`.

### 3. 🖼️ Automatic TMDB Artwork & Metadata Engine
- **Automated Title & Year Parsing**: Strips complex scene tags (`1080p`, `x264`, `BluRay`, `YIFY`, groups) to isolate exact movie titles and release years.
- **Official TMDB Integration**: Automatically retrieves vertical posters (`w780`), widescreen cinematic backdrops (`original`), runtime, synopsis, and genres.
- **Local Disk Cache**: Artwork is downloaded and cached in `data/posters/` and `data/backdrops/` to avoid redundant network requests.
- **Interactive Manual Match Popover**: Review candidate match scores and re-assign metadata with 1 click.
- **Offline Studio SVGs**: Instant dynamic fallback posters if offline or uncataloged.

### 4. 📂 Automatic Movie Folder Scanner
- **Native Windows Folder Selection**: Launch the native Windows folder picker directly on your PC, or use the interactive web drive and directory browser.
- **Recursive Scanning**: Automatically discovers movies across all subdirectories with safety filters.
- **Subtitle Auto-Pairing**: Automatically detects subtitle files (`.srt`, `.vtt`) in English, Hindi, and other languages, and pairs them for instant browser playback.
- **Library Synchronization**: Rescan Library button detects newly added movies and safely cleans up moved or deleted files without touching files on disk.

### 5. ⚡ Advanced Video Player
- Custom cinematic player built specifically for web streaming.
- **HTTP Range Requests**: Supports `HTTP 206 Partial Content`, `Content-Range`, and `Accept-Ranges: bytes` for instantaneous seeking without loading entire movies into RAM.
- **Resume Playback**: Remembers playback progress per user profile and prompts to resume from the exact previous timestamp.
- **Timeline Scrubber**: Real-time buffer indicator and timestamp preview.
- **Keyboard Shortcuts**: Space (Play/Pause), Left/Right Arrows (±10s seek), Up/Down Arrows (Volume), `M` (Mute), `F` (Fullscreen), `Esc` (Exit).
- **Playback Speed**: Adjust speed between 0.5x, 0.75x, 1x, 1.25x, 1.5x, and 2x.
- **Subtitle & Audio Diagnostics**: Switch subtitle tracks on the fly and view container audio codec details.

### 6. 🌐 Cloudflare Tunnel — Remote Access System
- **Official cloudflared Executable**: Built-in process management directly from Node.js.
- **Quick Tunnel Support**: Generates a free, secure `https://*.trycloudflare.com` link out of the box with zero router port forwarding or public IP exposure.
- **Custom Domain / Token Support**: Optional Cloudflare account tunnel tokens for permanent custom hostnames.
- **One-Click Start / Stop**: Remote access is strictly manual and only runs when you click **START SERVER**.
- **One-Link Sharing**: One-click **Copy Public Link** and high-contrast **QR Code** for instant mobile scanning.

### 7. 📱 Progressive Web App (PWA) & Offline Mode
- **Installable PWA**: Standalone web app manifest (`manifest.json`) and service worker (`sw.js`).
- **App Shell Caching**: Interface and cached metadata remain available even when the host PC is offline.
- **Live Reconnection Banner**: Real-time network detection alerts viewers when host connectivity drops and recovers.

### 8. 📊 Server Dashboard
- **Live Server & Tunnel Status**: Real-time status indicators (Online, Starting, Stopped, Error).
- **Bandwidth Monitor**: Real-time upload speed and cumulative data streamed.
- **Active Viewer Sessions**: Live table showing viewer usernames, movie currently playing, client IP address, and connection duration.
- **Library Statistics**: Total movies count, artwork cache status, and disk storage consumed.
- **Viewer Accounts Management**: Create and revoke password-protected viewer accounts.

---

## 🛠️ Quick Start Guide

### 1. Start StreamLink
Double-click:
```bat
start-streamlink.bat
```
*(A launcher shortcut is also created directly on your **Desktop**)*

StreamLink will start on port `5050` and automatically open your default browser to `http://localhost:5050`.

### 2. Default Administrator Credentials
- **Username**: `admin`
- **Password**: `admin123`

### 3. Select Movie Folder
1. Go to the **Dashboard** or click **Movie Folder** in the top navigation.
2. Click **Browse on Host PC** to open the native Windows folder selector, or browse drives (`C:\`, `D:\`, `E:\`) interactively.
3. Click **Select & Scan Folder**. Your library will populate and auto-match artwork in seconds!

### 4. Start Remote Access & Share
1. In the **Dashboard**, click **START SERVER**.
2. StreamLink starts the Cloudflare Tunnel and displays your secure public HTTPS URL.
3. Click **Copy** or scan the **QR Code** on your phone.
4. Add viewer accounts under **Viewer Accounts** in the Dashboard and share the link with them!

---

## 🏗️ Technology Architecture

- **Backend**: Node.js (ES Modules) + Express.js
- **Database**: SQLite via `better-sqlite3` with WAL journal mode
- **Frontend**: React 19 + Three.js (WebGL) + Vite + Lucide Icons
- **Tunneling**: Cloudflare official `cloudflared.exe`
- **Metadata**: TMDB v3 API + HTML5 Canvas Dominant Color Extractor
- **PWA**: Service Worker Cache-First App Shell + Standalone Web App Manifest

---

## 📄 License
MIT License. Created for private personal movie streaming.
