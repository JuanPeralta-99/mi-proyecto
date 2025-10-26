import { test, expect } from '@playwright/test';

test('usuario crea tarea', async ({ page }) => {
  await page.goto('http://localhost:5173'); // puerto Vite
  await page.fill('input[name=title]', 'Tarea E2E');
  await page.click('button#add');
  await expect(page.locator('text=Tarea E2E')).toBeVisible();
});
