import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración completa de Vite + Vitest
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,               // ✅ Permite usar test(), expect(), describe() sin importar
    environment: 'jsdom',        // ✅ Simula el DOM para las pruebas de React
    setupFiles: './setupTests.js', // ✅ Configura jest-dom automáticamente
    exclude: [
      'node_modules/**',         // ❌ Ignora todas las dependencias externas
      'e2e/**'                   // ❌ Ignora tus pruebas E2E de Playwright
    ],
    coverage: {
      provider: 'v8',            // ✅ Genera reportes de cobertura usando V8
      reporter: ['text', 'html'] // ✅ Salida en consola y HTML
    }
  }
});
