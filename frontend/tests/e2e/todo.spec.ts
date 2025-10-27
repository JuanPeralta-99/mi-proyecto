import { test, expect } from '@playwright/test';

test('usuario crea tarea', async ({ page }) => {
  // URL de tu frontend
  await page.goto('http://localhost:3000');

  // Rellena el input de la nueva tarea
  await page.fill('input[name="title"]', 'Tarea E2E');

  // Haz click en el botón para agregar
  await page.click('button#add');

  // Verifica que la tarea aparezca en la lista
  const tarea = page.locator('text=Tarea E2E');
  await expect(tarea).toBeVisible();
});
