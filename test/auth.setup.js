/**
 * Optional: run once before the test suite to perform login
 * and save authenticated storage state for reuse.
 * Set SAVE_STORAGE=true to enable (or remove the early return).
 */
import { request } from '@playwright/test';
import fs from 'fs';

export default async function globalSetup(config) {
  if (!process.env.SAVE_STORAGE) return;

  const apiContext = await request.newContext({ baseURL: process.env.BASE_URL });
  // Example flow: hit login API to obtain a session cookie or token.
  // Replace with your app's real auth.
  // await apiContext.post('/api/login', { data: { user: 'admin', password: 'password' } });

  // Save storage state from a real browser login if needed:
  // const { chromium } = require('@playwright/test');
  // const browser = await chromium.launch();
  // const page = await browser.newPage();
  // await page.goto(process.env.BASE_URL + '/login');
  // ... do login steps ...
  // await page.context().storageState({ path: 'storageState.json' });
  // await browser.close();

  if (fs.existsSync('storageState.json')) {
    process.env.STORAGE_STATE = 'storageState.json';
  }
}