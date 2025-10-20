import { test, expect } from '@playwright/test';
import './expect.js';
import { BasePage } from './page.js';
import './utils/matchers.js';

test.describe('Example spec', () => {
  test('should open home and have correct title', async ({ page }) => {
    const home = new BasePage(page);
    await expect(page).toHaveTitle("BR Form");
    await home.login(process.env.USERNAME, process.env.PASSWORD)
    await expect(SecurePageInstance.brHome).toBeVisible()
    await expect(SecurePageInstance.brHome).toContainText('IT BR Request System')
  });
});