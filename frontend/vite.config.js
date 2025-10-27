import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Convierte import.meta.url a __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,                  
    environment: 'jsdom',           
    setupFiles: path.resolve(__dirname, 'setupTests.js'),
    exclude: [
      'node_modules/**',
      '**/tests/e2e/**',
    ],
    coverage: {
      provider: 'v8',               
      reporter: ['text', 'html'],   
      all: true,                     
      include: ['src/**/*.{js,jsx,ts,tsx}'], 
      exclude: ['**/tests/**'],     
    },
    watch: false,                   
  },
});
