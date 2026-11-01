import React, { useState, useEffect } from 'react';
import { X, Folder, FolderOpen, HardDrive, Check, RefreshCw, Monitor } from 'lucide-react';

export default function FolderPickerModal({ onClose, onFolderSelected, currentFolder, authFetch }) {
  const [selectedPath, setSelectedPath] = useState(currentFolder || '');
  const [drives, setDrives] = useState([]);
  const [browserInfo, setBrowserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  // Load drives
  useEffect(() => {
    if (authFetch) {
      authFetch('/api/admin/drives')
        .then(res => res.json())
        .then(data => {
          if (data.drives) setDrives(data.drives);
        })
        .catch(() => {});
    }
  }, []);

  // Browse directory
  const loadDirectory = async (dirPath) => {
    setLoading(true);
    try {
      const res = await authFetch(`/api/admin/browse-directory?path=${encodeURIComponent(dirPath)}`);
      const data = await res.json();
      if (res.ok) {
        setBrowserInfo(data);
        setSelectedPath(data.currentPath);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentFolder) {
      loadDirectory(currentFolder);
    } else if (drives.length > 0) {
      loadDirectory(drives[0]);
    }
  }, [currentFolder, drives]);

  // Native Windows folder dialog trigger
  const handleOpenNativeDialog = async () => {
    setStatusMsg('Opening native Windows folder dialog on your PC...');
    try {
      const res = await authFetch('/api/admin/open-folder-dialog', { method: 'POST' });
      const data = await res.json();
      if (data.selectedPath) {
        setSelectedPath(data.selectedPath);
        loadDirectory(data.selectedPath);
        setStatusMsg(`Selected: ${data.selectedPath}`);
      } else {
        setStatusMsg('Selection cancelled');
      }
    } catch (err) {
      setStatusMsg('Failed to open native dialog. You can use the directory browser below.');
    }
  };

  // Submit & Save
  const handleSaveAndScan = async () => {
    if (!selectedPath) return;
    setScanning(true);
    setStatusMsg('Scanning movie folder for video files and metadata...');
    try {
      const res = await authFetch('/api/admin/library-folder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folder: selectedPath })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Scan failed');
      }
      onFolderSelected(selectedPath, data.scanResult);
      onClose();
    } catch (err) {
      setStatusMsg(`Error: ${err.message}`);
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
        <div className="modal-header">
          <div className="modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FolderOpen size={20} color="var(--primary)" />
            <span>Select Movie Library Folder</span>
          </div>
          <button className="btn-secondary" style={{ padding: '6px' }} onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Windows Native Picker Shortcut */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Windows Folder Dialog</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Launch Windows native folder selector on this PC</div>
          </div>
          <button className="btn-secondary" style={{ gap: '8px' }} onClick={handleOpenNativeDialog}>
            <Monitor size={16} color="#38bdf8" />
            <span>Browse on Host PC</span>
          </button>
        </div>

        {/* Drives Row */}
        <div>
          <label style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
            Select Drive:
          </label>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {drives.map(drive => (
              <button
                key={drive}
                className="btn-secondary"
                style={{ padding: '8px 16px', fontSize: '13px', background: selectedPath.startsWith(drive) ? 'var(--primary)' : 'var(--bg-secondary)', color: selectedPath.startsWith(drive) ? '#fff' : 'var(--text-main)', borderColor: selectedPath.startsWith(drive) ? 'var(--primary)' : 'var(--border-color)' }}
                onClick={() => loadDirectory(drive)}
              >
                <HardDrive size={15} />
                <span>{drive}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Path Input */}
        <div>
          <label style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
            Folder Path:
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              value={selectedPath}
              onChange={(e) => setSelectedPath(e.target.value)}
              style={{ flex: 1, fontFamily: 'monospace', fontSize: '13px' }}
              placeholder="e.g. D:\Movies or C:\Users\ASUS\Downloads"
            />
            <button className="btn-secondary" onClick={() => loadDirectory(selectedPath)} title="Go to folder">
              Go
            </button>
          </div>
        </div>

        {/* Directory Navigator */}
        <div style={{ background: 'var(--bg-input)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '12px', maxHeight: '220px', overflowY: 'auto' }}>
          {browserInfo?.parentPath && (
            <div
              style={{ padding: '8px 10px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94a3b8' }}
              onClick={() => loadDirectory(browserInfo.parentPath)}
            >
              <Folder size={16} />
              <span>.. (Parent Directory)</span>
            </div>
          )}

          {browserInfo?.folders?.map(folder => (
            <div
              key={folder.path}
              style={{ padding: '8px 10px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-main)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}
              onClick={() => loadDirectory(folder.path)}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Folder size={16} color="#fbbf24" />
              <span>{folder.name}</span>
            </div>
          ))}

          {browserInfo?.folders?.length === 0 && (
            <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text-dim)', fontSize: '13px' }}>
              No subdirectories found.
            </div>
          )}
        </div>

        {browserInfo && (
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between' }}>
            <span>Video files in this folder: <strong>{browserInfo.videoCount}</strong></span>
            {statusMsg && <span style={{ color: '#38bdf8' }}>{statusMsg}</span>}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
          <button className="btn-secondary" onClick={onClose} disabled={scanning}>
            Cancel
          </button>
          <button className="btn-primary" onClick={handleSaveAndScan} disabled={scanning || !selectedPath}>
            {scanning ? <RefreshCw size={16} className="spin" /> : <Check size={16} />}
            <span>{scanning ? 'Scanning...' : 'Select & Scan Folder'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

