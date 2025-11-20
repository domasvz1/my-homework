#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Homework Test Framework Setup Script\n');

// Color codes for terminal
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkCommand(command, name) {
  try {
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    return result.trim();
  } catch (error) {
    return null;
  }
}

// Step 1: Check Node.js version
log('\n📋 Step 1: Checking Node.js version...', 'blue');
const nodeVersion = checkCommand('node --version', 'Node.js');

if (!nodeVersion) {
  log('❌ Node.js is not installed!', 'red');
  log('   Please install Node.js from: https://nodejs.org/', 'yellow');
  process.exit(1);
}

log(`✅ Node.js version: ${nodeVersion}`, 'green');

// Check if Node.js version is >= 20 (required for Sharp)
const majorVersion = parseInt(nodeVersion.replace('v', '').split('.')[0]);
if (majorVersion < 20) {
  log(`⚠️  WARNING: Node.js ${nodeVersion} detected. Sharp requires Node.js >= 20.`, 'yellow');
  log('   Please upgrade to Node.js 20 or higher: https://nodejs.org/', 'yellow');
  log('   You can continue, but image verification may not work.', 'yellow');
}

// Step 2: Check npm
log('\n📋 Step 2: Checking npm...', 'blue');
const npmVersion = checkCommand('npm --version', 'npm');

if (!npmVersion) {
  log('❌ npm is not installed!', 'red');
  process.exit(1);
}

log(`✅ npm version: ${npmVersion}`, 'green');

// Step 3: Check if node_modules exists
log('\n📋 Step 3: Checking dependencies...', 'blue');
const nodeModulesPath = path.join(__dirname, 'node_modules');

if (fs.existsSync(nodeModulesPath)) {
  log('✅ node_modules already exists - skipping npm install', 'green');
  log('   (Run "npm install" manually if you want to reinstall)', 'yellow');
} else {
  log('📦 Installing dependencies (this may take a few minutes)...', 'yellow');
  try {
    execSync('npm install', { stdio: 'inherit' });
    log('✅ Dependencies installed successfully!', 'green');
  } catch (error) {
    log('❌ Failed to install dependencies', 'red');
    process.exit(1);
  }
}

// Step 4: Generate CodeceptJS type definitions
log('\n📋 Step 4: Generating CodeceptJS type definitions...', 'blue');
try {
  // Set environment variable to skip TypeScript type checking during generation
  process.env.TS_NODE_TRANSPILE_ONLY = 'true';
  
  execSync('npx codeceptjs def', { stdio: 'pipe' });
  log('✅ Type definitions generated in steps.d.ts', 'green');
} catch (error) {
  log('⚠️  Warning: Could not generate type definitions', 'yellow');
  log('   This is not critical - you can run "npx codeceptjs def" manually later', 'yellow');
}

// Step 5: Create downloads directory
log('\n📋 Step 5: Creating downloads directory...', 'blue');
const downloadsPath = path.join(__dirname, 'downloads');

if (fs.existsSync(downloadsPath)) {
  log('✅ downloads/ directory already exists', 'green');
} else {
  try {
    fs.mkdirSync(downloadsPath, { recursive: true });
    log('✅ downloads/ directory created', 'green');
  } catch (error) {
    log('⚠️  Warning: Could not create downloads directory', 'yellow');
  }
}

// Step 6: Summary
log('\n✅ Setup Complete!', 'green');
log('\n📚 Available Commands:', 'blue');
log('  npm run codeceptjs           - Run all CodeceptJS BDD tests', 'reset');
log('  npm run codeceptjs:headed    - Run tests with browser visible (debug)', 'reset');
log('  npm run codeceptjs:download  - Run only download tests (@download tag)', 'reset');
log('  npm run test                 - Run all Playwright tests', 'reset');
log('  npm run test:download        - Run Playwright download tests', 'reset');
log('  npx codeceptjs def           - Regenerate type definitions', 'reset');

log('\n🎯 Quick Start:', 'blue');
log('  npm run codeceptjs:headed    - See tests running in browser!', 'green');

log('\n📖 Documentation:', 'blue');
log('  - CodeceptJS: https://codecept.io/', 'reset');
log('  - Playwright: https://playwright.dev/', 'reset');
log('  - README: Check CODECEPTJS_README.md for more info', 'reset');

log('\n💡 Tip: If you see TypeScript errors, run "npx codeceptjs def" to regenerate types\n', 'yellow');
