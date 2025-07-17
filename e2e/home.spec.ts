import { test, expect } from '@playwright/test';

test('home page loads and shows main heading and profile image', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /hello! i'm/i })).toBeVisible();
    await expect(page.locator('img[alt="avom brice"]')).toBeVisible();
}); 