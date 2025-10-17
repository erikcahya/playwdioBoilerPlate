import { test, expect } from '@playwright/test';
import './expect.js';
import { BasePage } from './page.js';
import './utils/matchers.js';

test.describe('Example spec', () => {
  test('should open home and have correct title', async ({ page }) => {
    const home = new BasePage(page);
    await home.goto('/');
    await expect(page).toHaveTitle(/Example|Playwright/i);
    await expect(page).toHaveURL(/\//);
    await expect(page).toHaveTitleAndURL({ title: 'Fast and reliable end-to-end testing for modern web apps | Playwright', urlPart: '/'  });
  });
});