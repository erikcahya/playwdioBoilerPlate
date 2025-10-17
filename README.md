# Create PW (Playwright Boilerplate)

CLI tool untuk generate Playwright test automation project dengan boilerplate siap pakai.

## Usage

### Menggunakan npm (Recommended) - SIMPLE!

```bash
# Seperti npm init wdio!
npm init pw .

# Atau untuk project baru:
npm init pw my-project

# Atau dengan npx:
npx create-pw my-project
npx create-pw .
```

### Test Locally (Sebelum Publish)

```bash
# 1. Clone atau masuk ke repository ini
cd playwdioBoilerPlate

# 2. Link package secara global
npm link

# 3. Gunakan seperti npm init wdio!
cd ~/Desktop/my-project
npm init pw .

# Atau create project baru:
npm init pw my-new-project
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

## Sharing dengan Team (Tanpa npm Publish)

### 🚀 Quick Start - Install dari GitHub:

```bash
# 1. Push ke GitHub
git push origin main

# 2. Di PC lain, install langsung:
npm install -g git+https://github.com/yourusername/create-pw.git

# 3. Sekarang bisa pakai:
npm init pw .
```

### 📦 Alternatif Lain:

**Via Tarball (Offline):**
```bash
# Di PC ini:
npm pack  # Output: create-pw-1.0.0.tgz

# Di PC lain:
npm install -g /path/to/create-pw-1.0.0.tgz
npm init pw .
```

**Via npx (Tanpa Install):**
```bash
npx github:yourusername/create-pw my-project
```

📖 **Lihat [INSTALLATION.md](INSTALLATION.md) untuk cara lengkap!**

---

## Publishing to npm (Optional)

Jika ingin publish ke npm public:

```bash
# 1. Login ke npm
npm login

# 2. Publish package
npm publish

# 3. Sekarang siapa saja bisa pakai:
npm init pw .
npm init pw my-project
```

## Development

Untuk develop CLI tool ini:

```bash
# Install dependencies
npm install

# Test CLI locally
npm link
npm init pw test-project

# Unlink setelah selesai
npm unlink -g create-pw
```

## Requirements

- Node.js >= 16.0.0
- npm atau yarn

## License

MIT