import '/src/styles/globals.css';
export { render };

import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';

async function render(pageContext) {
  const { Page } = pageContext;
  
  const pageHtml = ReactDOMServer.renderToString(
    <Page {...pageContext.pageProps} />
  );

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PDF Free Editor (Local Dev)</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
