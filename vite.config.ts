import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { withZephyr } from 'vite-plugin-zephyr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills(), withZephyr()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
