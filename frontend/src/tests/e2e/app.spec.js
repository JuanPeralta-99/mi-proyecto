import { test, expect } from '@playwright/test';

test('página principal carga correctamente', async ({ page }) => {
  await page.goto('http://localhost:5173'); // URL de tu frontend corriendo
  await expect(page.locator('h1')).toHaveText('Vite + React');
});
