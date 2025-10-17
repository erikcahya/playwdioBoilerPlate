/**
 * Minimal base Page Object.
 * Extend this class for each page in /test/pages if you split them.
 */
export class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }
  async goto(path = '/') {
    await this.page.goto(path);
  }
}