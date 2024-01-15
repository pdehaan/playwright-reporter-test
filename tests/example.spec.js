// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(() => {
  test.slow(true, 'very slow beforehook');
});

test('has title with failure', async ({ page }) => {
  test.slow(true, "very slow test")
  test.info().annotations.push({
    type: "issue",
    description: "Blocked on FXA-5555"
  })
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/expected failure/);
});

test('has title', async ({ page }) => {
  test.slow(true, "very slow test")
  test.info().annotations.push({
    type: "issue",
    description: "Blocked on FXA-5555"
  })
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('has title flaky', async ({ page }) => {
  test.slow(true, "very slow test")
  test.info().annotations.push({
    type: "issue",
    description: "Blocked on FXA-5555"
  })
  await page.goto('https://playwright.dev/');

  const randomNum = Math.round(Math.random() * 100);
  expect(randomNum).toBeLessThanOrEqual(25);
  // console.log(randomNum);

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
