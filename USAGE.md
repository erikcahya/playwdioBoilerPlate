# Panduan Lengkap - Create Playwright Boilerplate CLI

## 🎯 Apa yang Sudah Dibuat?

Boilerplate Anda sekarang sudah menjadi **CLI tool** yang bisa dipanggil seperti `npm init wdio`. Struktur project sekarang:

```
playwdioBoilerPlate/
├── bin/
│   └── cli.js              # CLI entry point
├── templates/              # Template files yang akan di-copy
│   ├── test/
│   ├── playwright.config.js
│   └── README.md
├── package.json            # Konfigurasi CLI package
├── README.md               # Dokumentasi utama
└── USAGE.md               # File ini
```

---

## 🚀 Cara Menggunakan (3 Opsi)

### **Opsi 1: Test Lokal (Sudah Aktif!)**

CLI sudah ter-install di sistem Anda via `npm link`. Langsung bisa digunakan:

```bash
# Di folder mana saja, jalankan:
create-playwright-boilerplate my-awesome-project

# CLI akan meminta input:
# 1. Project name (otomatis terisi jika Anda sudah kasih di command)
# 2. Base URL (default: https://playwright.dev)
# 3. Headless mode (y/N)
# 4. Save authentication storage (y/N)
# 5. Slack Webhook URL (optional)
```

**Output:**
```
my-awesome-project/
├── test/
│   ├── auth.setup.js
│   ├── example.spec.js
│   ├── expect.js
│   ├── page.js
│   ├── slack-reporter.js
│   └── utils/
├── playwright.config.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

### **Opsi 2: Publish ke npm (Public/Private)**

Jika ingin share ke tim atau public:

```bash
# 1. Login ke npm
npm login

# 2. Edit package.json - ubah nama jika perlu (harus unique)
# "name": "create-playwright-boilerplate"  → "create-mycompany-pw"

# 3. Publish
npm publish

# Atau jika private:
npm publish --access restricted
```

**Setelah publish, team bisa gunakan:**
```bash
npm create playwright-boilerplate my-project
# atau
npx create-playwright-boilerplate my-project
```

---

### **Opsi 3: Private Registry (Untuk Internal Company)**

Jika company punya private npm registry:

```bash
# Set registry
npm config set registry https://your-registry.com

# Publish
npm publish

# Team gunakan dengan:
npx create-playwright-boilerplate my-project
```

---

## 🧪 Testing CLI Lokal

### Manual Test:

```bash
# Di folder berbeda (bukan di dalam playwdioBoilerPlate)
cd ~/Desktop
create-playwright-boilerplate test-project

# Ikuti prompt interaktif
# Setelah selesai, test project:
cd test-project
npm test
```

### Automated Test:

```bash
# Dari dalam folder playwdioBoilerPlate
node test-cli.js
```

---

## 🔧 Development Workflow

Saat develop/update CLI tool:

```bash
# 1. Edit file di bin/cli.js atau templates/

# 2. Tidak perlu npm link lagi, perubahan langsung aktif

# 3. Test:
create-playwright-boilerplate test-new-project

# 4. Jika puas, commit & push
git add .
git commit -m "Update CLI feature"
git push
```

---

## 📦 File Structure Explained

### **bin/cli.js**
Entry point CLI. Berisi:
- Interactive prompts (readline)
- File copying logic
- Template processing
- Automatic `npm install` & `npx playwright install`
- Colored output untuk user-friendly

### **templates/**
Folder ini berisi semua file yang akan di-copy ke project baru:
- `test/` - All test files dan utilities
- `playwright.config.js` - Playwright config
- `README.md` - Documentation untuk generated project

**Note:** File di `templates/` akan di-copy as-is, kecuali `.md` files yang akan di-replace placeholder `{{PROJECT_NAME}}`, etc.

### **package.json**
Konfigurasi penting:
```json
{
  "name": "create-playwright-boilerplate",  // Nama CLI
  "bin": {
    "create-playwright-boilerplate": "./bin/cli.js"  // Command name
  },
  "files": ["bin", "templates"]  // Yang akan di-publish ke npm
}
```

---

## 🎨 Customization

### Tambah Prompt Baru:

Edit [bin/cli.js](bin/cli.js):
```javascript
// Tambah prompt di function main()
const myNewOption = await question('New option: ');

// Tambah ke config object
const config = {
  baseUrl,
  headless,
  myNewOption  // add here
};

// Gunakan di createEnvFile() atau copyDirectory()
```

### Tambah Template File:

```bash
# Copy file baru ke templates/
cp my-new-file.js templates/

# File akan otomatis ter-copy saat generate project
```

### Custom Template Processing:

Edit function `copyDirectory` di [bin/cli.js](bin/cli.js):
```javascript
// Tambah logic untuk file type lain
if (entry.name.endsWith('.json')) {
  // Custom processing untuk JSON files
  const parsed = JSON.parse(content);
  parsed.customField = config.myOption;
  content = JSON.stringify(parsed, null, 2);
}
```

---

## 🐛 Troubleshooting

### CLI command tidak ditemukan:
```bash
# Re-link
npm unlink -g create-playwright-boilerplate
npm link
```

### Permission error di Linux/Mac:
```bash
chmod +x bin/cli.js
```

### Ingin uninstall/unlink:
```bash
npm unlink -g create-playwright-boilerplate
```

---

## 📝 Next Steps

1. **Test thoroughly**: Buat beberapa test projects dengan berbagai konfigurasi
2. **Update templates**: Tambah/edit files di `templates/` sesuai kebutuhan
3. **Version bump**: Update version di `package.json` saat ada perubahan
4. **Publish**: Publish ke npm jika ingin share dengan team
5. **CI/CD**: Setup automated testing untuk CLI di GitHub Actions

---

## 🎉 Selamat!

Boilerplate Anda sekarang sudah menjadi professional CLI tool seperti `npm init wdio`!

**Current capabilities:**
✅ Interactive prompts
✅ Automatic project generation
✅ Auto install dependencies
✅ Customizable configuration
✅ Colored terminal output
✅ Error handling

**Ready to use:**
```bash
create-playwright-boilerplate my-awesome-project
```
