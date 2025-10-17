#!/usr/bin/env node

// Simple test script to verify CLI functionality
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🧪 Testing CLI tool...\n');

const testProjectName = 'test-project-' + Date.now();
const testProjectPath = path.join(process.cwd(), '..', testProjectName);

console.log('📝 Test project will be created at:', testProjectPath);
console.log('\n⚠️  You will need to provide input for the CLI prompts.\n');

console.log('Suggested inputs:');
console.log('  Base URL: https://example.com');
console.log('  Headless: n');
console.log('  Save storage: y');
console.log('  Slack webhook: (just press Enter to skip)\n');

try {
  // Run the CLI
  execSync(`create-playwright-boilerplate ${testProjectName}`, {
    cwd: path.join(process.cwd(), '..'),
    stdio: 'inherit',
    shell: true
  });

  console.log('\n✅ CLI execution completed!');

  // Check if project was created
  if (fs.existsSync(testProjectPath)) {
    console.log('✅ Project directory created');

    // Check for essential files
    const essentialFiles = [
      'package.json',
      'playwright.config.js',
      '.env',
      '.gitignore',
      'README.md',
      'test/example.spec.js'
    ];

    console.log('\n📁 Checking essential files:');
    essentialFiles.forEach(file => {
      const exists = fs.existsSync(path.join(testProjectPath, file));
      console.log(`  ${exists ? '✅' : '❌'} ${file}`);
    });

    console.log('\n🎉 CLI tool is working correctly!');
    console.log(`\n📂 Test project created at: ${testProjectPath}`);
    console.log('\nTo clean up, run:');
    console.log(`  rm -rf ${testProjectPath}`);
  } else {
    console.log('❌ Project directory was not created');
  }
} catch (error) {
  console.error('❌ Error during CLI test:', error.message);
  process.exit(1);
}
