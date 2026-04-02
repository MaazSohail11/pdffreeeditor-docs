import React from 'react';

export default function DocumentUploadGateway({ title, subtitle, onPdfReady }) {
  return (
    <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>{title || 'Document Upload Gateway'}</h2>
      <p>{subtitle || '(Stub Content)'}</p>
      <button onClick={() => onPdfReady && onPdfReady(new Blob(['pdf placeholder'], { type: 'application/pdf'}))}>
        Simulate Upload
      </button>
    </div>
  );
}
