import { test, expect } from '@playwright/test';

// Perform checks on all components
test.describe('components', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('./all-components');
  });

  test('area chart', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Unemployment over time by industry' })
    ).toBeVisible();
  });

  test('bar chart', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Population age for 6 US states' })
    ).toBeVisible();
  });

  test('box plot', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Speed of Light - Morley Experiment' })
    ).toBeVisible();
  });

  test('histogram', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Olympic athletes by weight' })
    ).toBeVisible();
  });

  test('line chart', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Unemployment by industry over time' })
    ).toBeVisible();
  });

  test('scatter plot', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Penguin culmen sizes by species' })
    ).toBeVisible();
  });

  test('header', async ({ page }) => {
    await expect(
      page.getByRole('img', { name: 'Logo' })
    ).toBeVisible();
  });

  test('footer', async ({ page }) => {
    await expect(
      page.getByRole('img', { name: 'ECCI' })
    ).toBeVisible();
  });

  test('widget', async ({ page }) => {
    await expect(
       page.getByRole('img', { name: 'badge' })
    ).toBeVisible();
  });

  test('cell', async ({ page }) => {
    await expect(
      page.getByText('Something else')
    ).toBeVisible();
  });

  test('maths', async ({ page }) => {
    await expect(
      page.getByRole('math').first()
    ).toContainText('E = mc^2');
  });

  test('footnote', async ({ page }) => {
    await expect(
      page.getByRole('listitem').last()
    ).toContainText('tiny footnote');
  });

  test('dropdown', async ({ page }) => {
    await expect(
      page.getByRole('group').first()
    ).toContainText('Reveal');
  });
});
