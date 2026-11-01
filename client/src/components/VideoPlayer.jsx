import React, { useRef, useState, useEffect } from 'react';
import {
  Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX,
  Maximize, Minimize, ArrowLeft, Settings, Subtitles, Check,
  AlertTriangle, RefreshCw, X
} from 'lucide-react';

function formatPlayerTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const formattedMins = mins < 10 ? `0${mins}` : mins;
  const formattedSecs = secs < 10 ? `0${secs}` : secs;

  if (hrs > 0) {
    return `${hrs}:${formattedMins}:${formattedSecs}`;
  }
  return `${formattedMins}:${formattedSecs}`;
}

export default function VideoPlayer({ movie, onBack, token, authFetch }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(movie.duration || 0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [showSubtitleMenu, setShowSubtitleMenu] = useState(false);
  const [selectedSubtitle, setSelectedSubtitle] = useState(-1); // -1 = Off
  const [showResumePrompt, setShowResumePrompt] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [playbackError, setPlaybackError] = useState(null);

  // 3D Timeline hover preview state
  const [hoverInfo, setHoverInfo] = useState({ visible: false, xPercent: 0, time: 0 });

  // Center screen 3D flash action ('play' | 'pause' | 'fwd' | 'rwd')
  const [centerAction, setCenterAction] = useState(null);
  const actionTimer = useRef(null);

  const hideControlsTimer = useRef(null);

  const resetControlsTimer = () => {
    setShowControls(true);
    if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    hideControlsTimer.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        setShowControls(false);
        setShowSpeedMenu(false);
        setShowSubtitleMenu(false);
      }
    }, 3500);
  };

  const triggerCenterAction = (type) => {
    setCenterAction(type);
    if (actionTimer.current) clearTimeout(actionTimer.current);
    actionTimer.current = setTimeout(() => {
      setCenterAction(null);
    }, 650);
  };

  const handleVideoError = () => {
    setIsBuffering(false);
    const err = videoRef.current?.error;
    let message = 'An error occurred during video playback.';
    let code = err?.code || 0;

    if (code === 1) {
      message = 'Video playback was aborted.';
    } else if (code === 2) {
      message = 'A network error occurred while loading the video stream.';
    } else if (code === 3) {
      message = 'An error occurred while decoding the video stream.';
    } else if (code === 4) {
      message = 'This video format or codec is not supported by your browser.';
    }

    setPlaybackError({
      code,
      message,
      codec: movie.codec || 'Unknown',
      container: movie.container || 'Unknown',
      audioCodec: movie.audio_codec || 'Unknown'
    });
  };

  const handleRetryPlayback = () => {
    setPlaybackError(null);
    setIsBuffering(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setIsBuffering(false);
      }).catch(() => {
        handleVideoError();
      });
    }
  };

  // Resume playback prompt check & auto-dismiss after 7 seconds
  useEffect(() => {
    if (movie.progress_seconds && movie.progress_seconds > 15) {
      setShowResumePrompt(true);
      const timer = setTimeout(() => {
        setShowResumePrompt(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [movie]);

  // Video stream URL (handles authenticated users and public share links)
  const streamUrl = movie.streamUrlOverride || `/api/movies/${movie.id}/stream?token=${encodeURIComponent(token || '')}`;

  // Auto-hide controls after inactivity
  const handleMouseMove = () => {
    resetControlsTimer();
  };

  // Periodic watch progress saver (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current && isPlaying && authFetch) {
        const cur = videoRef.current.currentTime;
        const dur = videoRef.current.duration || duration;
        if (cur > 5) {
          authFetch('/api/user/progress', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              movieId: movie.id,
              progressSeconds: Math.floor(cur),
              durationSeconds: Math.floor(dur)
            })
          }).catch(() => {});
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, duration, movie.id]);

  // Play / Pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        triggerCenterAction('play');
        resetControlsTimer();
      }).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      triggerCenterAction('pause');
      setShowControls(true);
      if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    }
  };

  // Seek relative
  const seekDelta = (deltaSeconds) => {
    setShowResumePrompt(false);
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(0, Math.min(videoRef.current.duration || duration, videoRef.current.currentTime + deltaSeconds));
    triggerCenterAction(deltaSeconds > 0 ? 'fwd' : 'rwd');
    resetControlsTimer();
  };

  // Timeline click / scrub
  const handleTimelineClick = (e) => {
    setShowResumePrompt(false);
    if (!timelineRef.current || !videoRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = pos * (videoRef.current.duration || duration);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    resetControlsTimer();
  };

  // 3D Timeline hover tracking
  const handleTimelineMouseMove = (e) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clampX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const xPercent = (clampX / rect.width) * 100;
    const targetDuration = videoRef.current?.duration || duration || 0;
    const hoverTime = (clampX / rect.width) * targetDuration;
    setHoverInfo({ visible: true, xPercent, time: hoverTime });
  };

  const handleTimelineMouseLeave = () => {
    setHoverInfo(prev => ({ ...prev, visible: false }));
  };

  // Volume Change
  const handleVolumeChange = (newVol) => {
    if (!videoRef.current) return;
    const v = Math.max(0, Math.min(1, newVol));
    videoRef.current.volume = v;
    setVolume(v);
    setIsMuted(v === 0);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.volume = volume || 0.5;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  // Speed
  const handleSpeedChange = (speed) => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = speed;
    setPlaybackSpeed(speed);
    setShowSpeedMenu(false);
    resetControlsTimer();
  };

  // Fullscreen state listener (across Android, iOS Safari, and Desktop)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFull = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        videoRef.current?.webkitDisplayingFullscreen
      );
      setIsFullscreen(isCurrentlyFull);

      if (isCurrentlyFull) {
        document.body.classList.add('streamlink-fullscreen-active');
      } else {
        document.body.classList.remove('streamlink-fullscreen-active');
        // Restore portrait or auto orientation when exiting
        try {
          if (window.screen?.orientation?.unlock) {
            window.screen.orientation.unlock();
          } else if (window.screen?.unlockOrientation) {
            window.screen.unlockOrientation();
          }
        } catch (e) {}
      }
    };

    const handleWebkitBegin = () => {
      setIsFullscreen(true);
      document.body.classList.add('streamlink-fullscreen-active');
    };

    const handleWebkitEnd = () => {
      setIsFullscreen(false);
      document.body.classList.remove('streamlink-fullscreen-active');
      try {
        if (window.screen?.orientation?.unlock) {
          window.screen.orientation.unlock();
        }
      } catch (e) {}
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.addEventListener('webkitbeginfullscreen', handleWebkitBegin);
      videoEl.addEventListener('webkitendfullscreen', handleWebkitEnd);
    }

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      if (videoEl) {
        videoEl.removeEventListener('webkitbeginfullscreen', handleWebkitBegin);
        videoEl.removeEventListener('webkitendfullscreen', handleWebkitEnd);
      }
      document.body.classList.remove('streamlink-fullscreen-active');
      try {
        if (window.screen?.orientation?.unlock) {
          window.screen.orientation.unlock();
        }
      } catch (e) {}
    };
  }, []);

  // Multi-platform Fullscreen & Landscape Orientation Lock Toggle
  const toggleFullscreen = async () => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container) return;

    const currentlyFull = !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      video?.webkitDisplayingFullscreen
    );

    const savedPosition = video?.currentTime;

    if (!currentlyFull) {
      // 1. Enter Fullscreen (Cross-browser with iOS Safari fallback)
      try {
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          await container.webkitRequestFullscreen();
        } else if (container.mozRequestFullScreen) {
          await container.mozRequestFullScreen();
        } else if (container.msRequestFullscreen) {
          await container.msRequestFullscreen();
        } else if (video && video.webkitEnterFullscreen) {
          // iPhone Safari: use native webkitEnterFullscreen on video tag
          video.webkitEnterFullscreen();
        }
      } catch (err) {
        if (video && video.webkitEnterFullscreen) {
          try {
            video.webkitEnterFullscreen();
          } catch (e) {}
        }
      }

      // 2. Request Landscape Orientation Lock (Android Chrome / Chromium)
      try {
        if (window.screen?.orientation?.lock) {
          await window.screen.orientation.lock('landscape');
        } else if (window.screen?.lockOrientation) {
          window.screen.lockOrientation('landscape');
        } else if (window.screen?.mozLockOrientation) {
          window.screen.mozLockOrientation('landscape');
        } else if (window.screen?.msLockOrientation) {
          window.screen.msLockOrientation('landscape');
        }
      } catch (e) {
        // Orientation lock not supported or permission denied; fails silently
      }

      // Preserve playback position
      if (video && savedPosition && Math.abs(video.currentTime - savedPosition) > 2) {
        video.currentTime = savedPosition;
      }
      setIsFullscreen(true);
    } else {
      // Exit Fullscreen
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          await document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          await document.msExitFullscreen();
        } else if (video && video.webkitExitFullscreen) {
          video.webkitExitFullscreen();
        }
      } catch (err) {}

      // Unlock orientation
      try {
        if (window.screen?.orientation?.unlock) {
          window.screen.orientation.unlock();
        } else if (window.screen?.unlockOrientation) {
          window.screen.unlockOrientation();
        }
      } catch (e) {}

      // Preserve playback position
      if (video && savedPosition && Math.abs(video.currentTime - savedPosition) > 2) {
        video.currentTime = savedPosition;
      }
      setIsFullscreen(false);
    }
  };

  // Video wrapper click handler
  const handleVideoWrapperClick = () => {
    // On touch devices: tap toggles controls visibility
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isTouch) {
      setShowControls(prev => {
        const next = !prev;
        if (next) resetControlsTimer();
        return next;
      });
    } else {
      togglePlay();
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          seekDelta(-10);
          break;
        case 'ArrowRight':
          e.preventDefault();
          seekDelta(10);
          break;
        case 'ArrowUp':
          e.preventDefault();
          handleVolumeChange(volume + 0.1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          handleVolumeChange(volume - 0.1);
          break;
        case 'KeyM':
          toggleMute();
          break;
        case 'KeyF':
          toggleFullscreen();
          break;
        case 'Escape':
          if (!document.fullscreenElement) {
            onBack();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, volume, isMuted, duration]);

  // Subtitle selection
  const handleSubtitleChange = (index) => {
    setSelectedSubtitle(index);
    setShowSubtitleMenu(false);
    resetControlsTimer();
    if (!videoRef.current) return;

    const tracks = videoRef.current.textTracks;
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].mode = (i === index) ? 'showing' : 'disabled';
    }
  };

  // Resume prompt actions
  const resumePlayback = () => {
    if (videoRef.current && movie.progress_seconds) {
      videoRef.current.currentTime = movie.progress_seconds;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
    setShowResumePrompt(false);
    resetControlsTimer();
  };

  const startFromBeginning = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
    setShowResumePrompt(false);
    resetControlsTimer();
  };

  // Progress and Buffer tracking
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);

    // Update buffer progress
    if (videoRef.current.buffered.length > 0) {
      const buffEnd = videoRef.current.buffered.end(videoRef.current.buffered.length - 1);
      const total = videoRef.current.duration || duration;
      if (total > 0) {
        setBuffered(Math.min(100, (buffEnd / total) * 100));
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || movie.duration || 0);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const subtitlesList = movie.subtitles || [];

  return (
    <div
      ref={containerRef}
      className={`player-page ${isFullscreen ? 'player-page-fullscreen' : ''}`}
      onMouseMove={handleMouseMove}
      style={{ cursor: showControls ? 'default' : 'none' }}
    >
      <div className="player-video-wrapper" onClick={handleVideoWrapperClick}>
        <video
          ref={videoRef}
          src={streamUrl}
          className="player-video"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => {
            setIsPlaying(true);
            setIsBuffering(false);
          }}
          onPause={() => setIsPlaying(false)}
          onWaiting={() => setIsBuffering(true)}
          onCanPlay={() => setIsBuffering(false)}
          onPlaying={() => setIsBuffering(false)}
          onSeeking={() => setIsBuffering(true)}
          onSeeked={() => setIsBuffering(false)}
          onError={handleVideoError}
          playsInline
          webkit-playsinline="true"
          x5-video-player-type="h5"
        >
          {subtitlesList.map((sub, idx) => (
            <track
              key={idx}
              kind="subtitles"
              label={sub.language}
              src={`/api/movies/${movie.id}/subtitles/${idx}?token=${encodeURIComponent(token || '')}`}
              default={idx === selectedSubtitle}
            />
          ))}
        </video>

        {/* Buffering Indicator */}
        {isBuffering && !playbackError && (
          <div className="player-buffering-overlay">
            <div className="player-buffer-spinner" />
            <span className="player-buffer-text">Buffering Stream...</span>
          </div>
        )}

        {/* Playback Diagnostic Error Overlay */}
        {playbackError && (
          <div className="player-error-overlay" onClick={(e) => e.stopPropagation()}>
            <div className="player-error-card">
              <div className="player-error-icon">
                <AlertTriangle size={36} color="#EF4444" />
              </div>
              <h3 className="player-error-title">
                {playbackError.code === 4 ? 'Codec Not Supported in Browser' : 'Stream Playback Error'}
              </h3>
              <p className="player-error-desc">
                {playbackError.message}
              </p>

              <div className="player-error-diagnostics">
                <div className="diag-row">
                  <span className="diag-label">Container:</span>
                  <span className="diag-value">{movie.container ? movie.container.toUpperCase() : 'UNKNOWN'}</span>
                </div>
                <div className="diag-row">
                  <span className="diag-label">Video Codec:</span>
                  <span className="diag-value">{movie.codec || 'Unknown (e.g. HEVC/H.265)'}</span>
                </div>
                <div className="diag-row">
                  <span className="diag-label">Audio Codec:</span>
                  <span className="diag-value">{movie.audio_codec || 'Unknown (e.g. AC3/DTS)'}</span>
                </div>
                <div className="diag-row">
                  <span className="diag-label">Resolution:</span>
                  <span className="diag-value">{movie.resolution || 'Standard'}</span>
                </div>
              </div>

              {playbackError.code === 4 && (
                <div className="player-error-tip">
                  <strong>Why did this happen?</strong> Most web browsers (Chrome, Edge, Firefox) do not include proprietary licensing decoders for certain video containers (MKV with HEVC/H.265) or surround-sound audio (multichannel DTS/AC3). You can play this directly in VLC/MPV or re-encode using H.264/AAC.
                </div>
              )}

              <div className="player-error-actions">
                <button className="btn-primary" onClick={handleRetryPlayback}>
                  <RefreshCw size={15} />
                  <span>Retry Stream</span>
                </button>
                <button className="btn-secondary" onClick={onBack}>
                  <ArrowLeft size={15} />
                  <span>Return to Library</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Center Screen 3D Action Flash Animation (Desktop Click / Spacebar) */}
        {centerAction && (
          <div className="center-action-overlay">
            <div className="center-action-bubble">
              {centerAction === 'play' && <Play size={38} fill="#ffffff" />}
              {centerAction === 'pause' && <Pause size={38} fill="#ffffff" />}
              {centerAction === 'fwd' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <RotateCw size={32} />
                  <span style={{ fontSize: '11px', fontWeight: 800, marginTop: '2px' }}>+10s</span>
                </div>
              )}
              {centerAction === 'rwd' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <RotateCcw size={32} />
                  <span style={{ fontSize: '11px', fontWeight: 800, marginTop: '2px' }}>-10s</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Center Touch Controls (Play/Pause, -10s, +10s) */}
        <div
          className="player-mobile-center-controls"
          style={{
            opacity: showControls ? 1 : 0,
            pointerEvents: showControls ? 'auto' : 'none'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="player-mobile-skip-btn"
            onClick={() => seekDelta(-10)}
            title="Rewind 10s"
            aria-label="Rewind 10 seconds"
          >
            <RotateCcw size={24} />
            <span className="mobile-skip-num">10</span>
          </button>

          <button
            className="player-mobile-play-btn"
            onClick={togglePlay}
            title={isPlaying ? 'Pause' : 'Play'}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause size={36} fill="#ffffff" />
            ) : (
              <Play size={36} fill="#ffffff" style={{ marginLeft: '4px' }} />
            )}
          </button>

          <button
            className="player-mobile-skip-btn"
            onClick={() => seekDelta(10)}
            title="Forward 10s"
            aria-label="Forward 10 seconds"
          >
            <RotateCw size={24} />
            <span className="mobile-skip-num">10</span>
          </button>
        </div>

        {/* Top Navigation Bar with Back Button & Movie Title */}
        <div
          className="player-top-bar"
          style={{
            opacity: showControls ? 1 : 0,
            pointerEvents: showControls ? 'auto' : 'none'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="player-back-btn"
            onClick={onBack}
            title="Return to library"
          >
            <ArrowLeft size={18} />
            <span className="player-back-label">Back</span>
          </button>

          <div className="player-top-title" title={movie.clean_title || movie.title}>
            {movie.clean_title || movie.title}
          </div>

          <div className="player-top-actions">
            {/* Speed menu shortcut */}
            <div style={{ position: 'relative' }}>
              <button
                className="player-top-speed-btn"
                onClick={() => {
                  setShowSpeedMenu(!showSpeedMenu);
                  setShowSubtitleMenu(false);
                  resetControlsTimer();
                }}
                title="Playback Speed"
              >
                {playbackSpeed}x
              </button>

              {showSpeedMenu && (
                <div className="player-popup-menu player-popup-top" style={{ minWidth: '95px' }}>
                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
                    <button
                      key={s}
                      className={`player-popup-item ${playbackSpeed === s ? 'active' : ''}`}
                      onClick={() => handleSpeedChange(s)}
                    >
                      <span>{s}x</span>
                      {playbackSpeed === s && <Check size={13} color="var(--accent)" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3D Floating Resume Banner */}
        {showResumePrompt && (
          <div
            className="resume-prompt"
            style={{
              opacity: showControls ? 1 : 0,
              pointerEvents: showControls ? 'auto' : 'none'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span style={{ fontSize: '13.5px', fontWeight: 600 }}>
              Resume from {formatPlayerTime(movie.progress_seconds)}?
            </span>
            <button className="btn-primary" style={{ padding: '6px 14px', fontSize: '12.5px' }} onClick={resumePlayback}>
              Resume
            </button>
            <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '12.5px' }} onClick={startFromBeginning}>
              Start Over
            </button>
            <button
              className="resume-close-btn"
              onClick={() => setShowResumePrompt(false)}
              title="Dismiss"
              aria-label="Dismiss resume prompt"
            >
              <X size={15} />
            </button>
          </div>
        )}

        {/* Controls Overlay */}
        <div
          className="player-controls-overlay"
          style={{ opacity: showControls ? 1 : 0, pointerEvents: showControls ? 'auto' : 'none' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 3D Scrubber Timeline with Interactive Sheen & Depth */}
          <div
            ref={timelineRef}
            className="player-timeline-wrapper"
            onClick={handleTimelineClick}
            onMouseMove={handleTimelineMouseMove}
            onMouseLeave={handleTimelineMouseLeave}
          >
            <div className="player-timeline-track">
              {/* Buffer progress */}
              <div className="player-timeline-buffer" style={{ width: `${buffered}%` }} />

              {/* Hover preview marker bar */}
              {hoverInfo.visible && (
                <div
                  className="player-timeline-hover-bar"
                  style={{ width: `${hoverInfo.xPercent}%` }}
                />
              )}

              {/* Active progress with glowing edge and animated sheen */}
              <div className="player-timeline-progress" style={{ width: `${progressPercent}%` }}>
                <div className="timeline-progress-sheen" />
              </div>

              {/* Tactile Scrubbing Knob / Thumb */}
              <div
                className="player-timeline-thumb"
                style={{ left: `${progressPercent}%` }}
              >
                <div className="thumb-inner-core" />
                <div className="thumb-outer-halo" />
              </div>

              {/* Floating Time Preview Tooltip */}
              {hoverInfo.visible && (
                <div
                  className="player-timeline-tooltip"
                  style={{
                    left: `${hoverInfo.xPercent}%`,
                    transform: `translateX(-50%) perspective(400px) rotateX(${((hoverInfo.xPercent - 50) / 50) * -6}deg)`
                  }}
                >
                  <span className="tooltip-time">{formatPlayerTime(hoverInfo.time)}</span>
                  <div className="tooltip-arrow" />
                </div>
              )}
            </div>
          </div>

          {/* Bottom Bar Controls */}
          <div className="player-controls-bottom">
            <div className="player-controls-left">
              {/* Desktop play/pause button */}
              <button
                className="player-ctrl-btn player-desktop-btn"
                onClick={togglePlay}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={22} fill="#fff" /> : <Play size={22} fill="#fff" />}
              </button>

              <button
                className="player-ctrl-btn player-desktop-btn"
                onClick={() => seekDelta(-10)}
                title="Rewind 10s"
              >
                <RotateCcw size={18} />
              </button>

              <button
                className="player-ctrl-btn player-desktop-btn"
                onClick={() => seekDelta(10)}
                title="Forward 10s"
              >
                <RotateCw size={18} />
              </button>

              {/* Volume Group */}
              <div className="player-volume-group">
                <button
                  className="player-ctrl-btn"
                  onClick={toggleMute}
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? <VolumeX size={19} /> : <Volume2 size={19} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="player-volume-slider"
                  style={{
                    width: '74px',
                    background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.18) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.18) 100%)`
                  }}
                />
              </div>

              <div className="player-time-display">
                <span className="player-time-current">{formatPlayerTime(currentTime)}</span>
                <span className="player-time-sep">/</span>
                <span className="player-time-total">{formatPlayerTime(duration)}</span>
              </div>
            </div>

            <div className="player-controls-right">
              {/* Subtitles Button */}
              {subtitlesList.length > 0 && (
                <div style={{ position: 'relative' }}>
                  <button
                    className="player-ctrl-btn"
                    onClick={() => {
                      setShowSubtitleMenu(!showSubtitleMenu);
                      setShowSpeedMenu(false);
                      resetControlsTimer();
                    }}
                    title="Subtitles"
                    style={{ color: selectedSubtitle >= 0 ? 'var(--primary)' : '#fff' }}
                  >
                    <Subtitles size={19} />
                  </button>

                  {showSubtitleMenu && (
                    <div className="player-popup-menu" style={{ minWidth: '140px' }}>
                      <button
                        className={`player-popup-item ${selectedSubtitle === -1 ? 'active' : ''}`}
                        onClick={() => handleSubtitleChange(-1)}
                      >
                        <span>Off</span>
                        {selectedSubtitle === -1 && <Check size={13} color="var(--accent)" />}
                      </button>
                      {subtitlesList.map((sub, idx) => (
                        <button
                          key={idx}
                          className={`player-popup-item ${selectedSubtitle === idx ? 'active' : ''}`}
                          onClick={() => handleSubtitleChange(idx)}
                        >
                          <span>{sub.language}</span>
                          {selectedSubtitle === idx && <Check size={13} color="var(--accent)" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Desktop Speed Button */}
              <div className="player-desktop-btn" style={{ position: 'relative' }}>
                <button
                  className="player-ctrl-btn"
                  onClick={() => {
                    setShowSpeedMenu(!showSpeedMenu);
                    setShowSubtitleMenu(false);
                    resetControlsTimer();
                  }}
                  style={{ fontSize: '13px', fontWeight: 700, padding: '5px 9px' }}
                  title="Playback Speed"
                >
                  {playbackSpeed}x
                </button>

                {showSpeedMenu && (
                  <div className="player-popup-menu" style={{ minWidth: '95px' }}>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
                      <button
                        key={s}
                        className={`player-popup-item ${playbackSpeed === s ? 'active' : ''}`}
                        onClick={() => handleSpeedChange(s)}
                      >
                        <span>{s}x</span>
                        {playbackSpeed === s && <Check size={13} color="var(--accent)" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dedicated Prominent Fullscreen Button */}
              <button
                className="player-ctrl-btn player-fullscreen-btn"
                onClick={toggleFullscreen}
                title={isFullscreen ? 'Exit Fullscreen' : 'Landscape Fullscreen'}
                aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Landscape Fullscreen'}
              >
                {isFullscreen ? <Minimize size={21} /> : <Maximize size={21} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
