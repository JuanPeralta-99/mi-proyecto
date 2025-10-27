import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Convierte import.meta.url a __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración unificada de Vite + Vitest
export default defineConfig({
  plugins: [react()],

  // ⚙️ Configuración del servidor (Vite)
  server: {
    port: 3000, // Fuerza a Vite a usar el puerto 3000 (ideal para GitHub Actions y wait-on)
    host: true, // Permite exponer en red (necesario para CI/CD o acceso externo)
  },

  // 🧩 Alias para imports más limpios
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // 🧪 Configuración de Vitest
  test: {
    globals: true, // Permite usar describe, it, expect sin importar Vitest explícitamente
    environment: 'jsdom', // Simula el DOM para pruebas de React
    setupFiles: path.resolve(__dirname, 'setupTests.js'), // Archivo de configuración inicial para tests
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
