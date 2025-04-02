import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to all network interfaces (needed for Render)
    port: process.env.PORT || 10000,  // Use Render's assigned port or fallback
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 10000,
  },
});
