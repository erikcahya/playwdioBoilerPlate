#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function copyDirectory(src, dest, projectName, config) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath, projectName, config);
    } else {
      let content = fs.readFileSync(srcPath, 'utf8');

      // Replace placeholders in files (only for text files like README)
      if (entry.name.endsWith('.md')) {
        content = content.replace(/{{PROJECT_NAME}}/g, projectName);
        content = content.replace(/{{BASE_URL}}/g, config.baseUrl);
        content = content.replace(/{{SAVE_STORAGE}}/g, config.saveStorage);
      }

      fs.writeFileSync(destPath, content);
    }
  }
}

function createPackageJson(projectPath, projectName, config) {
  const packageJson = {
    name: projectName,
    version: '1.0.0',
    private: true,
    type: 'module',
    scripts: {
      test: 'playwright test',
      'test:ui': 'playwright test --ui',
      'test:headed': 'playwright test --headed',
      'test:debug': 'PWDEBUG=1 playwright test',
      report: 'playwright show-report',
      codegen: 'playwright codegen',
      trace: 'playwright show-trace test-results/*.zip'
    },
    devDependencies: {
      '@playwright/test': '^1.48.2',
      dotenv: '^16.4.5'
    }
  };

  fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
}

function createEnvFile(projectPath, config) {
  const envContent = `BASE_URL=${config.baseUrl}
SAVE_STORAGE=${config.saveStorage}
${config.slackWebhook ? `SLACK_WEBHOOK_URL=${config.slackWebhook}` : '# SLACK_WEBHOOK_URL=your_webhook_url'}
`;

  fs.writeFileSync(path.join(projectPath, '.env'), envContent);
}

function createGitignore(projectPath) {
  const gitignoreContent = `node_modules/
test-results/
playwright-report/
playwright/.cache/
.env
.auth/
*.zip
`;

  fs.writeFileSync(path.join(projectPath, '.gitignore'), gitignoreContent);
}

async function main() {
  log('\n╔═══════════════════════════════════════════════╗', 'cyan');
  log('║  Playwright Boilerplate Generator            ║', 'cyan');
  log('╚═══════════════════════════════════════════════╝\n', 'cyan');

  // Get project name from arguments or prompt
  let projectName = process.argv[2];

  if (!projectName) {
    projectName = await question(colors.blue + 'Project name: ' + colors.reset);
    if (!projectName) {
      log('Error: Project name is required!', 'red');
      process.exit(1);
    }
  }

  const projectPath = path.join(process.cwd(), projectName);

  // Check if directory already exists
  if (fs.existsSync(projectPath)) {
    log(`Error: Directory "${projectName}" already exists!`, 'red');
    process.exit(1);
  }

  log('\n📝 Project configuration:\n', 'bright');

  // Interactive prompts
  const baseUrl = await question(colors.blue + 'Base URL (default: https://playwright.dev): ' + colors.reset) || 'https://playwright.dev';

  const headlessInput = await question(colors.blue + 'Run tests in headless mode? (y/N): ' + colors.reset);
  const headless = headlessInput.toLowerCase() === 'y' ? 'true' : 'false';

  const saveStorageInput = await question(colors.blue + 'Save authentication storage? (y/N): ' + colors.reset);
  const saveStorage = saveStorageInput.toLowerCase() === 'y' ? 'true' : 'false';

  const slackWebhook = await question(colors.blue + 'Slack Webhook URL (optional, press Enter to skip): ' + colors.reset);

  const config = {
    baseUrl,
    headless,
    saveStorage,
    slackWebhook: slackWebhook || ''
  };

  rl.close();

  log('\n🚀 Creating your Playwright project...\n', 'green');

  // Create project directory
  fs.mkdirSync(projectPath, { recursive: true });

  // Copy template files
  const templateDir = path.join(__dirname, '..', 'templates');
  log('📁 Copying template files...', 'yellow');
  copyDirectory(templateDir, projectPath, projectName, config);

  // Create package.json
  log('📦 Creating package.json...', 'yellow');
  createPackageJson(projectPath, projectName, config);

  // Create .env file
  log('⚙️  Creating .env file...', 'yellow');
  createEnvFile(projectPath, config);

  // Create .gitignore
  log('🔒 Creating .gitignore...', 'yellow');
  createGitignore(projectPath);

  // Install dependencies
  log('\n📥 Installing dependencies (this may take a while)...\n', 'yellow');
  try {
    execSync('npm install', {
      cwd: projectPath,
      stdio: 'inherit',
      shell: true
    });
  } catch (error) {
    log('⚠️  Warning: Failed to install dependencies. Please run "npm install" manually.', 'yellow');
  }

  // Install Playwright browsers
  log('\n🌐 Installing Playwright browsers...\n', 'yellow');
  try {
    execSync('npx playwright install', {
      cwd: projectPath,
      stdio: 'inherit',
      shell: true
    });
  } catch (error) {
    log('⚠️  Warning: Failed to install Playwright browsers. Please run "npx playwright install" manually.', 'yellow');
  }

  // Success message
  log('\n╔═══════════════════════════════════════════════╗', 'green');
  log('║  ✅ Project created successfully!             ║', 'green');
  log('╚═══════════════════════════════════════════════╝\n', 'green');

  log('📂 Project location: ' + projectPath, 'cyan');
  log('\n🎯 Next steps:\n', 'bright');
  log(`  cd ${projectName}`, 'blue');
  log('  npm test              # Run tests', 'blue');
  log('  npm run test:ui       # Run tests with UI', 'blue');
  log('  npm run test:headed   # Run tests in headed mode', 'blue');
  log('  npm run codegen       # Generate test code\n', 'blue');

  log('📚 Happy testing! 🎭\n', 'green');
}

main().catch(error => {
  log(`\n❌ Error: ${error.message}`, 'red');
  process.exit(1);
});
