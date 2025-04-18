import { test, expect } from '@playwright/test';

test.describe('Zakat Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.wahed.com/mme/introducing-waheds-revamped-zakat-calculator');
  });

  test('Verify Landing Page', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Introducing Wahed\'s Revamped' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Introducing Wahed\'s Revamped Zakat Calculator: Simplifying Your Obligatory Charity');
    await expect(page.getByText('Published on')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Investing' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Who are we?' })).toBeVisible();
  });
});
