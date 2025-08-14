// @ts-check

// ----- ----- ----- ----- ----- ----- //
// First E2E tests from Iteration 1    //
// ----- ----- ----- ----- ----- ----- //

// test('Render page: data story Derry', async ({page}) => {
//   await page.goto('./data-story');

//   await expect(page.getByRole('heading', {name: 'The Impact of Co-Benefits'})).toBeVisible();
// });

// test('Render page: LAD Edinburgh', async ({page}) => {
//   await page.goto('./lad');

//   await expect(page.getByText('City of Edinburgh', {exact: true})).toBeVisible();
// });

// test('Render page: Co-benefit air quality', async ({page}) => {
//   await page.goto('./cobenefit');

//   await expect(page.getByText('Air quality improvements', {exact: true})).toBeVisible();
// });

// ----- ----- ----- ----- //
// Example tests below     //
// ----- ----- ----- ----- //

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
