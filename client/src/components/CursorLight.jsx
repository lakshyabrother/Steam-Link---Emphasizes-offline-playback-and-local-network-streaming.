import React, { useEffect, useRef } from 'react';

/**
 * Ambient spotlight & cursor parallax system.
 * Uses requestAnimationFrame for 60fps performance without re-rendering React components.
 */
export default function CursorLight() {
  const lightRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId = null;

    const handlePointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Calculate normalized coordinates (-1 to 1) for parallax
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;

      document.documentElement.style.setProperty('--mouse-norm-x', normX.toFixed(3));
      document.documentElement.style.setProperty('--mouse-norm-y', normY.toFixed(3));
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    const updatePosition = () => {
      // Smooth lerp (linear interpolation) for buttery trailing spotlight
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (lightRef.current) {
        lightRef.current.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
      }

      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={lightRef}
      className="ambient-cursor-light"
      aria-hidden="true"
    />
  );
}

