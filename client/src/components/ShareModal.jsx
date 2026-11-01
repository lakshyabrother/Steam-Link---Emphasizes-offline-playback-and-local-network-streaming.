import React, { useState, useEffect } from 'react';
import { X, Copy, Check, QrCode, Globe, ShieldCheck } from 'lucide-react';

export default function ShareModal({ onClose, authFetch }) {
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [shareUrl, setShareUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authFetch) {
      authFetch('/api/admin/share-qr')
        .then(res => res.json())
        .then(data => {
          setQrDataUrl(data.qrDataUrl);
          setShareUrl(data.url);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, []);

  const handleCopy = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px', textAlign: 'center' }}>
        <div className="modal-header">
          <div className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={20} color="var(--primary)" />
            <span>Share StreamLink</span>
          </div>
          <button className="btn-secondary" style={{ padding: '6px' }} onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.5 }}>
          Share this one secure link with your viewers to stream movies directly from your PC anywhere in the world.
        </p>

        {loading ? (
          <div style={{ padding: '30px', color: 'var(--text-muted)' }}>Generating secure link and QR...</div>
        ) : (
          <>
            {qrDataUrl && (
              <div style={{ margin: '10px auto', background: '#fff', padding: '12px', borderRadius: '12px', display: 'inline-block' }}>
                <img src={qrDataUrl} alt="StreamLink QR Code" style={{ display: 'block', width: '200px', height: '200px' }} />
              </div>
            )}

            <div className="public-url-box">
              <span className="public-url-text">{shareUrl || 'No active public tunnel'}</span>
              <button className="btn-primary" style={{ padding: '8px 14px', fontSize: '13px', flexShrink: 0 }} onClick={handleCopy}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '14px', borderRadius: 'var(--radius-sm)', textAlign: 'left', fontSize: '13px', color: 'var(--text-muted)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--text-main)' }}>
                <ShieldCheck size={16} color="var(--success)" />
                <span>Quick Viewer Instructions:</span>
              </div>
              <p>1. Send this HTTPS link to viewers.</p>
              <p>2. Viewers log in with their assigned viewer credentials.</p>
              <p>3. They can browse and watch movies directly from your PC.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

