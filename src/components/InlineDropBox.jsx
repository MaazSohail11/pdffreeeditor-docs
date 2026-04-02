import React, { useCallback, useState } from 'react';
import { Upload, FileText } from 'lucide-react';

export default function InlineDropBox({
  label = 'Choose PDF to Start',
  className = '',
  minHeight = 300,
  maxWidth = 720,
}) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Stub: no file handling
  }, []);

  return (
    <div
      className={`dropzone ${dragActive ? 'active' : ''} ${className}`}
      style={{ minHeight, maxWidth }}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className={`p-4 rounded-full mb-4 transition-all ${dragActive ? 'bg-primary-200 scale-110' : 'bg-primary-100'}`}>
        <Upload className={`h-8 w-8 ${dragActive ? 'text-primary-700' : 'text-primary-500'} transition-colors`} />
      </div>
      <p className="text-lg font-semibold text-gray-800 mb-1">{label}</p>
      <p className="text-sm text-gray-500">
        Drag & drop your PDF here, or <span className="text-primary-600 font-medium cursor-pointer hover:underline">browse files</span>
      </p>
      <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
        <span className="flex items-center gap-1"><FileText className="h-3.5 w-3.5" /> PDF, DOCX, Images</span>
        <span>•</span>
        <span>100% private</span>
      </div>
    </div>
  );
}
