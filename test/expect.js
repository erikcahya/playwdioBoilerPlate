/**
 * Example of custom matchers for Playwright expect.
 * Usage in spec: import { test, expect } from '@playwright/test'; import './expect.js';
 */
import { expect } from '@playwright/test';

expect.extend({
  async toHaveTitleAndURL(page, { title, urlPart }) {
    const actualTitle = await page.title();
    const actualURL = page.url();

    const passTitle = title ? actualTitle.includes(title) : true;
    const passURL = urlPart ? actualURL.includes(urlPart) : true;
    const pass = passTitle && passURL;

    return {
      pass,
      message: () => {
        let msg = `❌ Custom matcher failed:\n`;

        if (!passTitle) {
          msg += `- Expected title to include: "${title}"\n`;
          msg += `  Received title:        "${actualTitle}"\n`;
        } else {
          msg += `✅ Title check passed: "${actualTitle}" includes "${title}"\n`;
        }

        if (!passURL) {
          msg += `- Expected URL to include: "${urlPart}"\n`;
          msg += `  Received URL:           "${actualURL}"\n`;
        } else {
          msg += `✅ URL check passed: "${actualURL}" includes "${urlPart}"\n`;
        }

        return msg;
      }
    };
  }
});