/**
 * PerformanceManager.js - Hardware-Adaptive Quality Controller for CINE-3D
 * Monitors frame rendering times, adapts quality levels (HIGH / MEDIUM / LOW / REDUCED_MOTION),
 * with hysteresis to prevent rapid quality switching.
 */

export const QUALITY_LEVELS = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
  REDUCED_MOTION: 'reduced_motion'
};

class PerformanceManager {
  constructor() {
    this.mode = 'auto'; // 'auto' | 'high' | 'medium' | 'low' | 'reduced_motion'
    this.currentLevel = QUALITY_LEVELS.HIGH;
    this.fps = 60;
    this.frameTimes = [];
    this.lastTime = performance.now();
    this.listeners = new Set();
    this.consecutiveLowFrames = 0;
    this.consecutiveHighFrames = 0;
    this.isWebGLAvailable = this.checkWebGLSupport();

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      this.reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (this.reducedMotionQuery.matches) {
        this.currentLevel = QUALITY_LEVELS.REDUCED_MOTION;
      }
      this.reducedMotionQuery.addEventListener('change', (e) => {
        if (e.matches && this.mode === 'auto') {
          this.setQualityLevel(QUALITY_LEVELS.REDUCED_MOTION);
        }
      });
    }

    // Load saved preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('streamlink_cine3d_quality');
      if (saved && ['auto', 'high', 'medium', 'low', 'reduced_motion'].includes(saved)) {
        this.mode = saved;
        if (saved !== 'auto') {
          this.currentLevel = saved;
        }
      }
    }

    if (!this.isWebGLAvailable && this.currentLevel !== QUALITY_LEVELS.REDUCED_MOTION) {
      this.currentLevel = QUALITY_LEVELS.LOW;
    }
  }

  checkWebGLSupport() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  setMode(mode) {
    this.mode = mode;
    if (typeof window !== 'undefined') {
      localStorage.setItem('streamlink_cine3d_quality', mode);
    }

    if (mode === 'auto') {
      this.currentLevel = this.reducedMotionQuery?.matches ? QUALITY_LEVELS.REDUCED_MOTION : QUALITY_LEVELS.HIGH;
    } else {
      this.currentLevel = mode;
    }
    this.notifyListeners();
  }

  setQualityLevel(level) {
    if (this.currentLevel !== level) {
      this.currentLevel = level;
      this.notifyListeners();
    }
  }

  onFrame() {
    if (this.mode !== 'auto' || !this.isWebGLAvailable) return;

    const now = performance.now();
    const delta = now - this.lastTime;
    this.lastTime = now;

    if (delta > 0) {
      const currentFps = 1000 / delta;
      this.frameTimes.push(currentFps);
      if (this.frameTimes.length > 45) this.frameTimes.shift();

      const avgFps = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
      this.fps = Math.round(avgFps);

      // Adaptive hysteresis: require sustained pressure before downgrading
      if (avgFps < 28) {
        this.consecutiveLowFrames++;
        this.consecutiveHighFrames = 0;
        if (this.consecutiveLowFrames > 90) { // ~3 seconds of low FPS
          if (this.currentLevel === QUALITY_LEVELS.HIGH) {
            this.setQualityLevel(QUALITY_LEVELS.MEDIUM);
          } else if (this.currentLevel === QUALITY_LEVELS.MEDIUM) {
            this.setQualityLevel(QUALITY_LEVELS.LOW);
          }
          this.consecutiveLowFrames = 0;
        }
      } else if (avgFps > 52) {
        this.consecutiveHighFrames++;
        this.consecutiveLowFrames = 0;
        if (this.consecutiveHighFrames > 180) { // ~6 seconds of sustained high FPS
          if (this.currentLevel === QUALITY_LEVELS.MEDIUM) {
            this.setQualityLevel(QUALITY_LEVELS.HIGH);
          }
          this.consecutiveHighFrames = 0;
        }
      }
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.currentLevel, this.mode, this.fps);
    return () => this.listeners.delete(listener);
  }

  notifyListeners() {
    this.listeners.forEach(cb => cb(this.currentLevel, this.mode, this.fps));
  }
}

export const performanceManager = new PerformanceManager();

