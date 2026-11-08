import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { Play, Info, Sparkles, Layers, ArrowLeft, ArrowRight, RotateCcw, Grid, Sliders, Film } from 'lucide-react';
import { getApiUrl } from '../utils/api';
import { performanceManager, QUALITY_LEVELS } from './PerformanceManager';

export default function CinemaLobby3D({ movies = [], onSelectMovie, onPlayMovie, onSwitchTo2D }) {
  const mountRef = useRef(null);
  const [qualityLevel, setQualityLevel] = useState(performanceManager.currentLevel);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  // Subscribe to performance quality changes
  useEffect(() => {
    return performanceManager.subscribe(level => setQualityLevel(level));
  }, []);

  // Filter movies with valid ID
  const validMovies = useMemo(() => {
    return (movies || []).filter(m => m && m.id);
  }, [movies]);

  const activeMovie = validMovies[activeIndex] || validMovies[0] || null;

  // Rotation target and current angle
  const angleRef = useRef(0);
  const targetAngleRef = useRef(0);
  const velocityRef = useRef(0);
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowLeft', 'KeyA'].includes(e.code)) {
        e.preventDefault();
        rotateByIndex(-1);
      } else if (['ArrowRight', 'KeyD'].includes(e.code)) {
        e.preventDefault();
        rotateByIndex(1);
      } else if (e.code === 'Enter' && activeMovie) {
        onSelectMovie(activeMovie);
      } else if (e.code === 'Space' && activeMovie) {
        e.preventDefault();
        onPlayMovie(activeMovie);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMovie, validMovies.length]);

  const rotateByIndex = (delta) => {
    if (!validMovies.length) return;
    const count = validMovies.length;
    const step = (Math.PI * 2) / count;
    targetAngleRef.current += delta * step;
  };

  // Three.js Scene Setup
  useEffect(() => {
    if (qualityLevel === QUALITY_LEVELS.LOW || qualityLevel === QUALITY_LEVELS.REDUCED_MOTION) {
      return; // Will use CSS 3D fallback in JSX
    }

    const container = mountRef.current;
    if (!container || validMovies.length === 0) return;

    let animId;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08080C, 0.028);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0.5, 14);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: qualityLevel === QUALITY_LEVELS.HIGH, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, qualityLevel === QUALITY_LEVELS.HIGH ? 2 : 1));
    renderer.setClearColor(0x08080C, 1);
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const spotlight = new THREE.SpotLight(0x8B5CF6, 2.5);
    spotlight.position.set(0, 8, 12);
    spotlight.angle = Math.PI / 4;
    spotlight.penumbra = 0.8;
    scene.add(spotlight);

    const cyanLight = new THREE.PointLight(0x38BDF8, 1.8, 30);
    cyanLight.position.set(-6, -2, 6);
    scene.add(cyanLight);

    // 4. Ground Mirror / Grid
    const gridHelper = new THREE.GridHelper(36, 36, 0x8B5CF6, 0x1E2238);
    gridHelper.position.y = -3.2;
    scene.add(gridHelper);

    // 5. Build Cylinder/Arc of Movie Cards
    const cardsGroup = new THREE.Group();
    scene.add(cardsGroup);

    const count = validMovies.length;
    const radius = Math.max(7.5, count * 0.95);
    const cardWidth = 3.0;
    const cardHeight = 4.5;
    const cardGeometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
    const textureLoader = new THREE.TextureLoader();

    const meshes = [];
    const materials = [];
    const textures = [];

    // Helper: default fallback canvas texture
    const createFallbackCanvasTexture = (title) => {
      const cvs = document.createElement('canvas');
      cvs.width = 300;
      cvs.height = 450;
      const ctx = cvs.getContext('2d');
      ctx.fillStyle = '#101626';
      ctx.fillRect(0, 0, 300, 450);
      ctx.fillStyle = '#8B5CF6';
      ctx.fillRect(0, 440, 300, 10);
      ctx.fillStyle = '#F8FAFC';
      ctx.font = 'bold 20px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText((title || 'Movie').substring(0, 22), 150, 225);
      return new THREE.CanvasTexture(cvs);
    };

    validMovies.forEach((movie, i) => {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      let texture;
      try {
        const posterUrl = getApiUrl(`/api/movies/${movie.id}/poster`);
        texture = textureLoader.load(
          posterUrl,
          undefined,
          undefined,
          () => {
            // Error loading poster, use fallback canvas
            const fb = createFallbackCanvasTexture(movie.clean_title);
            mat.map = fb;
            mat.needsUpdate = true;
          }
        );
      } catch (e) {
        texture = createFallbackCanvasTexture(movie.clean_title);
      }

      textures.push(texture);

      const mat = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.35,
        metalness: 0.15,
        side: THREE.DoubleSide
      });
      materials.push(mat);

      const mesh = new THREE.Mesh(cardGeometry, mat);
      mesh.position.set(x, 0, z);
      // Face inward toward the center (0, 0, 0)
      mesh.lookAt(0, 0, 0);
      // Flip 180 degrees so poster faces outward toward the camera
      mesh.rotation.y += Math.PI;

      mesh.userData = { movie, index: i };
      cardsGroup.add(mesh);
      meshes.push(mesh);
    });

    // 6. Raycasting for Mouse Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isPointerDownRef.current) {
        const deltaX = e.clientX - lastXRef.current;
        lastXRef.current = e.clientX;
        targetAngleRef.current += deltaX * 0.005;
        velocityRef.current = deltaX * 0.005;
      }
    };

    const onPointerDown = (e) => {
      isPointerDownRef.current = true;
      startXRef.current = e.clientX;
      lastXRef.current = e.clientX;
      velocityRef.current = 0;
      setIsDragging(true);
    };

    const onPointerUp = (e) => {
      const dragDist = Math.abs(e.clientX - startXRef.current);
      isPointerDownRef.current = false;
      setIsDragging(false);

      // If clicked without dragging, check for card click
      if (dragDist < 6) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(meshes);
        if (intersects.length > 0) {
          const clickedMesh = intersects[0].object;
          const { movie, index } = clickedMesh.userData;
          if (index === activeIndex) {
            onSelectMovie(movie);
          } else {
            // Rotate to clicked card
            const step = (Math.PI * 2) / count;
            const diff = (index - activeIndex);
            targetAngleRef.current -= diff * step;
          }
        }
      }
    };

    const onWheel = (e) => {
      e.preventDefault();
      targetAngleRef.current += Math.sign(e.deltaY) * 0.15;
    };

    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    // 7. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 8. Animation Loop
    const animate = () => {
      animId = requestAnimationFrame(animate);
      performanceManager.onFrame();

      // Inertial smoothing
      if (!isPointerDownRef.current) {
        targetAngleRef.current += velocityRef.current;
        velocityRef.current *= 0.92;
      }

      angleRef.current += (targetAngleRef.current - angleRef.current) * 0.08;
      cardsGroup.rotation.y = angleRef.current;

      // Calculate which card is closest to camera front (z = radius)
      // Card angle relative to camera: (angle + cardsGroup.rotation.y) mod 2PI
      const normalizedGroupAngle = (-cardsGroup.rotation.y % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      const step = (Math.PI * 2) / count;
      let closestIdx = Math.round(normalizedGroupAngle / step) % count;
      if (closestIdx < 0) closestIdx += count;

      if (closestIdx !== activeIndex) {
        setActiveIndex(closestIdx);
      }

      // Elevate active card and smooth hover
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(meshes);
      const hoveredMesh = intersects.length > 0 ? intersects[0].object : null;

      meshes.forEach((mesh, idx) => {
        const isActive = idx === closestIdx;
        const isHovered = hoveredMesh === mesh;

        // Target scale & elevation
        const targetScale = isActive ? 1.25 : (isHovered ? 1.08 : 0.95);
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        // Highlight material
        if (mesh.material) {
          mesh.material.emissive = new THREE.Color(
            isActive ? 0x221340 : (isHovered ? 0x0f1e33 : 0x000000)
          );
        }
      });

      if (hoveredMesh?.userData?.movie) {
        setHoveredMovie(hoveredMesh.userData.movie);
      } else {
        setHoveredMovie(null);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      cardGeometry.dispose();
      gridHelper.dispose();
      materials.forEach(m => m.dispose());
      textures.forEach(t => t.dispose());
      renderer.dispose();
    };
  }, [validMovies, qualityLevel]);

  // CSS 3D Fallback Mode for Low Quality / Mobile / Reduced Motion
  if (qualityLevel === QUALITY_LEVELS.LOW || qualityLevel === QUALITY_LEVELS.REDUCED_MOTION) {
    return (
      <div className="cinema-lobby-css3d-fallback">
        <div className="lobby-header-bar">
          <div className="lobby-badge">
            <Layers size={14} className="text-cyan" />
            <span>2D ADAPTIVE CINEMA LOBBY</span>
          </div>
          <button className="btn-secondary btn-sm" onClick={onSwitchTo2D}>
            <Grid size={14} />
            <span>Switch to Traditional Grid</span>
          </button>
        </div>

        <div className="css3d-carousel-container">
          <button className="css3d-nav-arrow left" onClick={() => rotateByIndex(-1)}>
            <ArrowLeft size={22} />
          </button>

          <div className="css3d-active-card-portal">
            {activeMovie && (
              <div className="css3d-featured-card" onClick={() => onSelectMovie(activeMovie)}>
                <img
                  src={getApiUrl(`/api/movies/${activeMovie.id}/poster`)}
                  alt={activeMovie.clean_title}
                  className="css3d-card-img"
                />
                <div className="css3d-card-overlay">
                  <span className="card-pill-res">{activeMovie.resolution || '1080P'}</span>
                  <h4>{activeMovie.clean_title}</h4>
                  <div className="card-actions-quick">
                    <button
                      className="btn-primary btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onPlayMovie(activeMovie);
                      }}
                    >
                      <Play size={14} fill="currentColor" /> Play Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="css3d-nav-arrow right" onClick={() => rotateByIndex(1)}>
            <ArrowRight size={22} />
          </button>
        </div>

        {/* Horizontal Reel */}
        <div className="css3d-reel-row">
          {validMovies.map((m, idx) => (
            <div
              key={m.id}
              className={`css3d-thumb-pill ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <img src={getApiUrl(`/api/movies/${m.id}/poster`)} alt={m.clean_title} />
              <span>{m.clean_title}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="cinema-lobby-3d-root">
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="lobby-canvas-viewport" />

      {/* Top Header Overlay */}
      <div className="lobby-top-bar">
        <div className="lobby-badge">
          <Sparkles size={14} className="text-cyan pulse-icon" />
          <span>CINE-3D SPATIAL CAROUSEL</span>
          <span className="badge-movie-count">{validMovies.length} TITLES</span>
        </div>

        <div className="lobby-top-controls">
          <button
            className="btn-secondary btn-sm"
            onClick={onSwitchTo2D}
            title="Switch to conventional 2D Library grid"
          >
            <Grid size={14} />
            <span>2D Library Grid</span>
          </button>
        </div>
      </div>

      {/* Bottom Floating Active Movie Hub */}
      {activeMovie && (
        <div className="lobby-floating-hud">
          <div className="hud-content-panel">
            <div className="hud-metadata-tags">
              <span className="hud-badge-res">{activeMovie.resolution || '1080P'}</span>
              {activeMovie.year && <span className="hud-badge-year">{activeMovie.year}</span>}
              <span className="hud-badge-genre">{activeMovie.genre || 'Cinema'}</span>
              {activeMovie.codec && <span className="hud-badge-codec">{activeMovie.codec}</span>}
            </div>

            <h2 className="hud-movie-title">{activeMovie.clean_title}</h2>

            <p className="hud-instructions">
              Drag horizontally or use <strong>← / → Arrow Keys</strong> to rotate • <strong>Enter</strong> for details • <strong>Space</strong> to stream
            </p>

            <div className="hud-actions-row">
              <button
                className="btn-primary"
                onClick={() => onPlayMovie(activeMovie)}
              >
                <Play size={16} fill="currentColor" />
                <span>Play Stream</span>
              </button>

              <button
                className="btn-secondary"
                onClick={() => onSelectMovie(activeMovie)}
              >
                <Info size={16} />
                <span>Movie Details</span>
              </button>

              <div className="hud-nav-buttons">
                <button
                  className="hud-arrow-btn"
                  onClick={() => rotateByIndex(-1)}
                  title="Previous Film (Left Arrow)"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  className="hud-arrow-btn"
                  onClick={() => rotateByIndex(1)}
                  title="Next Film (Right Arrow)"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

