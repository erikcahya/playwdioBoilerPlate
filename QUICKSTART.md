# Quick Start Guide

Panduan singkat untuk mulai menggunakan CLI tool ini.

---

## 🎯 **Untuk Developer (PC Ini)**

CLI sudah aktif! Langsung pakai:

```bash
cd ~/Desktop/my-project
npm init pw .
```

---

## 🎯 **Untuk Team Member (PC Lain)**

### **Cara 1: Install dari GitHub (Recommended)**

```bash
# Install sekali
npm install -g git+https://github.com/yourteam/create-pw.git

# Sekarang bisa pakai di mana saja:
mkdir my-test
cd my-test
npm init pw .
```

**Update nanti:**
```bash
npm uninstall -g create-pw
npm install -g git+https://github.com/yourteam/create-pw.git
```

---

### **Cara 2: Install dari File (Offline)**

```bash
# Minta file create-pw-1.0.0.tgz dari developer
# Lalu install:
npm install -g C:\Downloads\create-pw-1.0.0.tgz

# Sekarang bisa pakai:
npm init pw .
```

---

### **Cara 3: Tanpa Install (npx)**

```bash
# Langsung pakai tanpa install:
npx github:yourteam/create-pw my-project
```

---

## 🎬 **Demo: Buat Project Baru**

```bash
# Step 1: Buat folder
mkdir my-awesome-tests
cd my-awesome-tests

# Step 2: Run CLI
npm init pw .

# Step 3: Jawab pertanyaan:
# - Base URL? (Enter untuk default)
# - Headless? n
# - Save auth? y
# - Slack webhook? (Enter untuk skip)

# Step 4: Tunggu install selesai...

# Step 5: Run test!
npm test
```

---

## 📋 **Command Reference**

```bash
# Di current directory
npm init pw .

# Buat project baru
npm init pw my-project

# Dengan npx
npx create-pw my-project
npx create-pw .
```

---

## ❓ **Troubleshooting**

### "command not found: npm init pw"

**Solusi:**
```bash
# Install dulu CLI-nya:
npm install -g git+https://github.com/yourteam/create-pw.git
```

### "Directory is not empty"

**Solusi:**
```bash
# Gunakan folder kosong atau buat folder baru:
mkdir new-project
cd new-project
npm init pw .
```

### "Permission denied"

**Solusi di Linux/Mac:**
```bash
sudo npm install -g git+https://github.com/yourteam/create-pw.git
```

**Solusi di Windows:**
- Run Command Prompt/PowerShell as Administrator

---

## 🎉 **That's It!**

Super simple seperti `npm init wdio`!

**Questions?** Lihat [README.md](README.md) atau [INSTALLATION.md](INSTALLATION.md)
