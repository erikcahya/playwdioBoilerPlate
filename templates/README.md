# {{PROJECT_NAME}}

Playwright test automation project generated from boilerplate.

## Setup

Dependencies are already installed during project creation. If you need to reinstall:

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests with UI mode
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Debug tests
npm run test:debug

# Generate test code
npm run codegen

# View HTML report
npm run report

# View trace
npm run trace
```

## Configuration

Edit `.env` file to configure:

```env
BASE_URL={{BASE_URL}}
SAVE_STORAGE={{SAVE_STORAGE}}
SLACK_WEBHOOK_URL=your_webhook_url
```

## Project Structure

```
{{PROJECT_NAME}}/
├── test/
│   ├── auth.setup.js      # Global setup for authentication
│   ├── example.spec.js    # Example test spec
│   ├── expect.js          # Custom expect matchers
│   ├── page.js            # Base page object
│   ├── slack-reporter.js  # Slack reporter
│   └── utils/
│       └── matchers.js    # Additional matchers
├── playwright.config.js   # Playwright configuration
├── .env                   # Environment variables
└── package.json
```

## Features

- ✅ Custom matchers for common assertions
- ✅ Page Object Model setup
- ✅ Authentication setup with storage state
- ✅ Slack notifications for test results
- ✅ Multiple reporters (HTML, JSON, List)
- ✅ Environment-based configuration
- ✅ Trace, screenshot, and video on failure

## Notes

- `globalSetup` in `test/auth.setup.js` is active only if `SAVE_STORAGE=true`
- Custom matchers are in `test/expect.js` (imported by specs)
- Slack reporter sends summary if `SLACK_WEBHOOK_URL` is configured

## Learn More

- [Playwright Documentation](https://playwright.dev)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Best Practices](https://playwright.dev/docs/best-practices)

Happy Testing! 🎭
