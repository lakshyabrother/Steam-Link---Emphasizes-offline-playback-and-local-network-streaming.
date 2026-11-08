import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Film, Play, ChevronRight, Zap, EyeOff } from 'lucide-react';
import { performanceManager, QUALITY_LEVELS } from './PerformanceManager';

export default function SpatialLanding({ onEnter, onSkip }) {
  const mountRef = useRef(null);
  const [qualityLevel, setQualityLevel] = useState(performanceManager.currentLevel);
  const [isHoveringEnter, setIsHoveringEnter] = useState(false);

  useEffect(() => {
    const unsubscribe = performanceManager.subscribe((level) => {
      setQualityLevel(level);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    // If low quality or reduced motion, skip 3D canvas and use CSS perspective fallback
    if (qualityLevel === QUALITY_LEVELS.LOW || qualityLevel === QUALITY_LEVELS.REDUCED_MOTION) {
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08080C, 0.035);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: qualityLevel === QUALITY_LEVELS.HIGH });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, qualityLevel === QUALITY_LEVELS.HIGH ? 2 : 1));
    renderer.setClearColor(0x08080C, 1);
    container.appendChild(renderer.domElement);

    // 2. Particle Matrix (Cinema dust & nebula)
    const particleCount = qualityLevel === QUALITY_LEVELS.HIGH ? 1200 : 400;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x8B5CF6); // Violet
    const color2 = new THREE.Color(0x38BDF8); // Electric Cyan
    const color3 = new THREE.Color(0xA855F7); // Purple

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const mixed = Math.random() < 0.5 ? color1.clone().lerp(color2, Math.random()) : color2.clone().lerp(color3, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: qualityLevel === QUALITY_LEVELS.HIGH ? 0.18 : 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Central Cinematic Rings (Aperture)
    const ringGroup = new THREE.Group();
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });

    const torusGeo1 = new THREE.TorusGeometry(7.5, 0.08, 16, 64);
    const torusGeo2 = new THREE.TorusGeometry(9.2, 0.05, 16, 64);
    const ring1 = new THREE.Mesh(torusGeo1, ringMat1);
    const ring2 = new THREE.Mesh(torusGeo2, ringMat2);
    ringGroup.add(ring1);
    ringGroup.add(ring2);
    scene.add(ringGroup);

    // 4. Mouse Response
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 5. Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      performanceManager.onFrame();

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth camera interpolation
      targetX += (mouseX * 2.5 - targetX) * 0.05;
      targetY += (-mouseY * 1.8 - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(0, 0, 0);

      // Rotate particles and rings
      particles.rotation.y = time * 0.03;
      particles.rotation.x = Math.sin(time * 0.02) * 0.05;

      ring1.rotation.x = time * 0.15;
      ring1.rotation.y = time * 0.2;
      ring2.rotation.y = -time * 0.12;
      ring2.rotation.z = time * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particleGeo.dispose();
      particleMat.dispose();
      torusGeo1.dispose();
      torusGeo2.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, [qualityLevel]);

  return (
    <div className="spatial-landing-root">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="spatial-canvas-viewport" />

      {/* Atmospheric Vignette & Gradients */}
      <div className="spatial-vignette-overlay" />

      {/* Foreground Content */}
      <div className="spatial-content-wrap">
        <div className="spatial-badge-pill">
          <Zap size={13} className="pulse-icon text-cyan" />
          <span>PROJECT CINE-3D • SPATIAL CINEMA</span>
        </div>

        <h1 className="spatial-headline">
          Stream<span className="brand-accent">Link</span>
          <span className="spatial-version-tag">2.0</span>
        </h1>

        <p className="spatial-tagline">
          Beyond the Screen.
        </p>

        <p className="spatial-description">
          A high-performance personal streaming theater powered by your host workstation.
          Spatial library discovery, instant seeking, and zero cloud lock-in.
        </p>

        <div className="spatial-actions-row">
          <button
            className={`spatial-enter-btn ${isHoveringEnter ? 'hovered' : ''}`}
            onClick={onEnter}
            onMouseEnter={() => setIsHoveringEnter(true)}
            onMouseLeave={() => setIsHoveringEnter(false)}
          >
            <div className="btn-glow-ring" />
            <Play size={18} fill="currentColor" />
            <span>Enter CINE-3D Experience</span>
            <ChevronRight size={18} />
          </button>

          <button className="spatial-skip-btn" onClick={onSkip} title="Go directly to traditional media library">
            <EyeOff size={15} />
            <span>Skip to Library</span>
          </button>
        </div>

        <div className="spatial-footer-note">
          <span>Direct Host Stream • HTTP 206 Range Seeking • Cloudflare Tunnel Active</span>
        </div>
      </div>
    </div>
  );
}
