import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirect API requests to a backend server
      '/user': {
        // target: 'http://localhost:4000',
        target: 'https://fullstacktesting.vercel.app',
        changeOrigin: true, // Adjust the `Host` header to match the target
        // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove `/api` prefix
      },
    },
  },
});
