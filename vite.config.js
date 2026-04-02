import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react(), vike()],
  resolve: {
    alias: {
      '/src': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
