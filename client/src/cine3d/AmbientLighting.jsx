import React, { useState, useEffect } from 'react';

export default function AmbientLighting({ activeColor = '#8B5CF6', enabled = true }) {
  if (!enabled) return null;

  return (
    <div className="ambient-cinema-backdrop" aria-hidden="true">
      <div
        className="ambient-glow-orb orb-primary"
        style={{
          background: `radial-gradient(circle, ${activeColor}33 0%, rgba(8, 8, 12, 0) 70%)`
        }}
      />
      <div
        className="ambient-glow-orb orb-secondary"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(8, 8, 12, 0) 70%)'
        }}
      />
    </div>
  );
}

