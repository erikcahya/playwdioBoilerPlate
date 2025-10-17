import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './test',
  /* Global timeout per test */
  timeout: 30 * 10000,
  expect: { timeout: 5000 },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter */
  reporter: [['list'], ['html'], ['json', { outputFile: 'playwright-report/report.json' }], ['./test/slack-reporter.js']],
  use: {
    baseURL: process.env.BASE_URL || 'https://playwright.dev',
    headless: false,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    storageState: process.env.STORAGE_STATE || undefined
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  /* If you use login in globalSetup to save storageState, point it here */
  globalSetup: './test/auth.setup.js',
});