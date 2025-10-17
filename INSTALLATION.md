# Cara Install di PC Lain (Tanpa npm Publish)

Ada beberapa cara untuk menggunakan CLI tool ini di PC lain tanpa harus publish ke npm registry.

---

## 🎯 **Opsi 1: Install dari GitHub (Recommended)**

Paling mudah dan otomatis update.

### Setup:

```bash
# Di PC lain, install langsung dari GitHub
npm install -g git+https://github.com/yourusername/create-pw.git

# Atau dengan npm init (jika sudah di GitHub)
npm init pw .
```

### Cara Setup GitHub:

```bash
# Di PC development (PC Anda sekarang)
cd playwdioBoilerPlate
git add .
git commit -m "Initial CLI setup"

# Buat repo di GitHub, lalu push
git remote add origin https://github.com/yourusername/create-pw.git
git push -u origin main
```

### Di PC Lain:

```bash
# Install global dari GitHub
npm install -g git+https://github.com/yourusername/create-pw.git

# Sekarang bisa pakai:
npm init pw .
npm init pw my-project
```

### Update CLI (di PC lain):

```bash
# Uninstall versi lama
npm uninstall -g create-pw

# Install versi terbaru dari GitHub
npm install -g git+https://github.com/yourusername/create-pw.git
```

---

## 🎯 **Opsi 2: Share via File/Network Drive**

Untuk team internal atau tanpa akses internet.

### Di PC Development (PC Anda):

```bash
# 1. Pack package menjadi tarball
cd playwdioBoilerPlate
npm pack

# Output: create-pw-1.0.0.tgz
```

### Di PC Lain:

```bash
# 2. Copy file create-pw-1.0.0.tgz ke PC lain

# 3. Install global dari tarball
npm install -g /path/to/create-pw-1.0.0.tgz

# Atau jika di Windows:
npm install -g C:\Users\username\Downloads\create-pw-1.0.0.tgz

# 4. Sekarang bisa pakai:
npm init pw .
```

### Update (di PC lain):

```bash
# Uninstall versi lama
npm uninstall -g create-pw

# Install versi baru
npm install -g /path/to/create-pw-1.0.1.tgz
```

---

## 🎯 **Opsi 3: Clone & Link (Untuk Development)**

Cocok untuk team yang mau ikut develop CLI.

### Di PC Lain:

```bash
# 1. Clone repository
git clone https://github.com/yourusername/create-pw.git
cd create-pw

# 2. Link global
npm link

# 3. Sekarang bisa pakai:
npm init pw .
```

### Update (di PC lain):

```bash
cd create-pw
git pull
# npm link sudah otomatis update
```

### Unlink:

```bash
npm unlink -g create-pw
```

---

## 🎯 **Opsi 4: Private npm Registry (Enterprise)**

Untuk company dengan private registry (Verdaccio, Artifactory, dll).

### Setup Private Registry:

```bash
# Set registry
npm config set registry https://npm.yourcompany.com

# Login
npm login --registry=https://npm.yourcompany.com

# Publish
npm publish
```

### Di PC Lain (Team):

```bash
# Set registry (sekali saja)
npm config set registry https://npm.yourcompany.com

# Install & gunakan
npm init pw .
```

---

## 🎯 **Opsi 5: npx Langsung dari GitHub**

Tanpa install global.

```bash
# Langsung pakai tanpa install
npx github:yourusername/create-pw my-project

# Atau dengan full URL
npx git+https://github.com/yourusername/create-pw.git my-project
```

**Kekurangan:** Tidak bisa pakai `npm init pw`, harus `npx`

---

## 📊 **Perbandingan Opsi:**

| Opsi | Mudah | Auto Update | Offline | npm init pw |
|------|-------|-------------|---------|-------------|
| **GitHub** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ❌ | ✅ |
| **Tarball** | ⭐⭐⭐ | ❌ | ✅ | ✅ |
| **Clone & Link** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| **Private npm** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❌ | ✅ |
| **npx GitHub** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ❌ | ❌ |

---

## 🎬 **Recommended Workflow untuk Team:**

### **Untuk Team Kecil (2-10 orang):**

**Gunakan Opsi 1 (GitHub)**

```bash
# Setup sekali (Developer):
git push ke GitHub

# Di PC team member:
npm install -g git+https://github.com/yourteam/create-pw.git

# Pakai:
npm init pw .
```

### **Untuk Team Besar atau Enterprise:**

**Gunakan Opsi 4 (Private npm Registry)**

```bash
# Setup private registry (sekali)
# Semua team gunakan:
npm init pw .
```

### **Untuk Offline/Internal Network:**

**Gunakan Opsi 2 (Tarball via Shared Drive)**

```bash
# Share file .tgz di network drive
# Team install dari shared drive
npm install -g \\shared\tools\create-pw-1.0.0.tgz
```

---

## ❓ **FAQ**

### Q: Apakah harus publish ke npm public?
**A:** Tidak! Gunakan salah satu opsi di atas.

### Q: Mana yang paling mudah?
**A:** Opsi 1 (GitHub) - install sekali, bisa update mudah.

### Q: Bagaimana kalau tidak punya GitHub?
**A:** Gunakan Opsi 2 (Tarball) atau Opsi 3 (Clone & Link dari folder network).

### Q: Apakah bisa pakai GitLab atau Bitbucket?
**A:** Ya! Sama saja:
```bash
npm install -g git+https://gitlab.com/yourname/create-pw.git
```

### Q: Bagaimana cara uninstall?
**A:**
```bash
npm uninstall -g create-pw
```

---

## 🚀 **Quick Start (Recommended)**

**Cara tercepat untuk share ke team:**

1. **Push ke GitHub:**
   ```bash
   git push origin main
   ```

2. **Kirim ke team instruksi ini:**
   ```bash
   npm install -g git+https://github.com/yourteam/create-pw.git
   npm init pw .
   ```

3. **Done!** ✅

---

## 📝 **Catatan Penting:**

- Semua opsi tidak butuh publish ke npm public
- Team tetap bisa pakai `npm init pw .` (kecuali opsi 5)
- Untuk private/internal use, **Opsi 1 (GitHub)** paling direkomendasikan
- Jika ada budget, setup **Private npm Registry** (Verdaccio gratis!)

---

## 🔗 **Resources:**

- [npm pack documentation](https://docs.npmjs.com/cli/v8/commands/npm-pack)
- [Install from Git](https://docs.npmjs.com/cli/v8/commands/npm-install#git-urls)
- [Verdaccio (Private npm)](https://verdaccio.org/)
