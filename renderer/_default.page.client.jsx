import '/src/styles/globals.css';
export { render };

import React from 'react';
import { hydrateRoot } from 'react-dom/client';

async function render(pageContext) {
  const { Page } = pageContext;
  
  const root = document.getElementById('react-root');
  if (!root) throw new Error('React root not found');

  hydrateRoot(root, <Page {...pageContext.pageProps} />);
}
