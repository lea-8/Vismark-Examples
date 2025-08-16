import { test, expect } from '@playwright/test';

test.describe('local', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('./all-components');
  });

  test('image', async ({ page }) => {
    await expect(
      page.getByRole('img', { name: 'images/derry_main_graph.png' })
    ).toHaveScreenshot('derry_main_graph.png');
  });
});
