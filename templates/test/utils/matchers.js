// test/utils/matchers.js
import { expect } from '@playwright/test';

expect.extend({
  async toHaveTitleAndURL(page, { title, urlPart }) {
    const actualTitle = await page.title();
    const actualURL = page.url();

    const passTitle = title ? actualTitle.includes(title) : true;
    const passURL   = urlPart ? actualURL.includes(urlPart) : true;
    const pass = passTitle && passURL;

    return {
      pass,
      message: () => {
        let msg = `❌ Custom matcher failed:\n`;
        if (!passTitle) {
          msg += `- Expected title to include: "${title}"\n  Received: "${actualTitle}"\n`;
        } else {
          msg += `✅ Title includes "${title}"\n`;
        }
        if (!passURL) {
          msg += `- Expected URL to include: "${urlPart}"\n  Received: "${actualURL}"\n`;
        } else {
          msg += `✅ URL includes "${urlPart}"\n`;
        }
        return msg;
      }
    };
  },

  async toHaveTextTrimmed(locator, expected) {
    const value = (await locator.textContent() ?? '').trim().replace(/\s+/g,' ');
    const pass = value === expected;
    return {
      pass,
      message: () => pass
        ? `expected text not to be "${expected}"`
        : `expected text "${expected}" but received "${value}"`
    };
  },

  async toBeVisibleInViewport(locator) {
    const box = await locator.boundingBox();
    const page = locator.page();
    const vp = page.viewportSize();
    const pass = !!box && box.x >= 0 && box.y >= 0 &&
                 box.x + box.width <= vp.width &&
                 box.y + box.height <= vp.height;
    return {
      pass,
      message: () => pass
        ? `element unexpectedly fully visible in viewport`
        : `element is not fully visible in viewport`
    };
  },

  async toHaveNoConsoleErrors(page) {
    const errors = [];
    const listener = (msg) => { if (msg.type() === 'error') errors.push(msg.text()); };
    page.on('console', listener);
    // caller bertanggung jawab menjalankan aksi yang memicu log sebelum assertion
    await page.waitForTimeout(0);
    page.off('console', listener);

    const pass = errors.length === 0;
    return {
      pass,
      message: () => pass
        ? `expected console to have errors, but none found`
        : `console errors found:\\n- ${errors.join('\\n- ')}`
    };
  },
});

export {};
