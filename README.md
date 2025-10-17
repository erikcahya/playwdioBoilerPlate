# Create Playwright Boilerplate

CLI tool untuk generate Playwright test automation project dengan boilerplate siap pakai.

## Usage

### Menggunakan npm (Recommended)

```bash
# Jika sudah publish ke npm
npm create playwright-boilerplate my-project

# Atau dengan npx
npx create-playwright-boilerplate my-project
```

### Test Locally (Sebelum Publish)

```bash
# 1. Clone atau masuk ke repository ini
cd playwdioBoilerPlate

# 2. Link package secara global
npm link

# 3. Gunakan CLI untuk generate project baru
create-playwright-boilerplate my-new-project

# 4. Atau langsung dengan npx dari local
npx . my-new-project
```

## Interactive Setup

CLI akan menanyakan beberapa konfigurasi:

- **Project name**: Nama project Anda
- **Base URL**: URL default untuk testing (default: https://playwright.dev)
- **Headless mode**: Apakah ingin run test tanpa browser UI (y/N)
- **Save authentication**: Apakah ingin save auth storage state (y/N)
- **Slack Webhook**: URL webhook untuk notifikasi Slack (optional)

## Fitur Boilerplate

✅ **Custom Matchers** - Extended expect assertions
✅ **Page Object Model** - Base page setup
✅ **Authentication Setup** - Global auth dengan storage state
✅ **Slack Reporter** - Notifikasi test results ke Slack
✅ **Multiple Reporters** - HTML, JSON, dan List
✅ **Environment Config** - `.env` file support
✅ **Trace/Screenshot/Video** - Otomatis capture saat test gagal

## Project Structure (Generated)

```
my-project/
├── test/
│   ├── auth.setup.js      # Global setup untuk auth
│   ├── example.spec.js    # Contoh test spec
│   ├── expect.js          # Custom matchers
│   ├── page.js            # Base page object
│   ├── slack-reporter.js  # Slack reporter
│   └── utils/
│       └── matchers.js    # Additional matchers
├── playwright.config.js   # Playwright configuration
├── .env                   # Environment variables
├── .gitignore
└── package.json
```

## Publishing to npm

```bash
# 1. Login ke npm
npm login

# 2. Publish package (pastikan nama unique)
npm publish

# 3. Sekarang bisa digunakan dengan:
npm create playwright-boilerplate my-project
```

## Development

Untuk develop CLI tool ini:

```bash
# Install dependencies
npm install

# Test CLI locally
npm link
create-playwright-boilerplate test-project

# Unlink setelah selesai
npm unlink -g create-playwright-boilerplate
```

## Requirements

- Node.js >= 16.0.0
- npm atau yarn

## License

MIT