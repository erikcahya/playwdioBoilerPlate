# Playwright Boilerplate (JavaScript)

Struktur ini mengikuti layout yang kamu kirim, dengan tambahan utilitas dan konfigurasi siap jalan.

## Setup
```bash
npm i
npx playwright install
```

## Run
```bash
npm test
npm run test:ui
```

## Env
Buat file `.env` (opsional):
```
BASE_URL=https://example.com
SAVE_STORAGE=true
SLACK_WEBHOOK_URL=...
```

## Catatan
- `globalSetup` di `test/auth.setup.js` hanya aktif jika `SAVE_STORAGE=true`.
- Custom matcher ada di `test/expect.js` (diimport oleh spec).
- Reporter Slack akan kirim ringkasan kalau `SLACK_WEBHOOK_URL` ada.