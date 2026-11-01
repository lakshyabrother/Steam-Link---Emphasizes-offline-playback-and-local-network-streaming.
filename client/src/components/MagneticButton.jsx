import React from 'react';

/**
 * Simplified MagneticButton — behaves as a standard button.
 * The 3D physics effect has been removed for a clean, premium look.
 */
export default function MagneticButton({ children, className = '', onClick, style = {}, disabled = false, type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
