import { test, expect } from '@playwright/test';

test('página principal carga correctamente', async ({ page }) => {
  // Asegúrate que Vite esté corriendo en localhost:5173
  await page.goto('http://localhost:3000');

  // Verifica que el h1 contenga el texto esperado
  const heading = page.locator('h1');
  await expect(heading).toHaveText(/vite \+ react/i);
});
