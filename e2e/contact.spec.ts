import { test, expect } from '@playwright/test';

test('contact page loads and shows the contact form', async ({ page }) => {
  await page.goto('/contact');
  await expect(
    page.getByRole('heading', { name: 'Get In Touch' })
  ).toBeVisible();
  await expect(page.getByLabel(/name/i)).toBeVisible();
  await expect(page.getByLabel(/email/i)).toBeVisible();
  await expect(page.getByLabel(/message/i)).toBeVisible();
});
