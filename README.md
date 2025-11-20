# Wallpaper Portal - Automated Test Suite

End-to-end test automation for wallpaper search and download functionality using **CodeceptJS + Playwright** with **BDD/Gherkin**.

## 🎯 What's Tested

- **Free Wallpaper Downloads** - Search, select, and verify downloaded images
- **Premium Wallpaper Flow** - Login, unlock modal, and download (⚠️ WIP - see [WIP.md](./WIP.md))
- **Image Validation** - Format, size, dimensions, and integrity checks
- **User Authentication** - Email/password login flow

## 📋 Prerequisites

- **Node.js v20+** (for Sharp image processing)
- **VS Code** (recommended - auto-suggests installing Cucumber extension)

## 🚀 Setup

```bash
npm install
npm run setup  # Generates types and creates output folder
```

## 🧪 Running Tests

```bash
npm test              # Run all tests (headless)
npm run debug         # Run @debug tagged tests (headed)
npm run test:headed   # Run all with browser visible
npm run typecheck     # TypeScript validation
```

## ⚙️ Configuration

Create `.env` file in project root:

```env
BASE_URL=url-for-website
SECRET_EMAIL=your-email@example.com
SECRET_PASSWORD=your-password
```

## ✍️ Writing Tests

All steps use **first-person active voice** (`I [verb]`):
- ✅ `I click the download button`
- ✅ `I verify the file is downloaded`
- ❌ ~~`the file should be downloaded`~~

See [STEP_GUIDELINES.md](./STEP_GUIDELINES.md) for details.

## � Project Structure

```
features/                # Gherkin scenarios
step_definitions/       # Step implementations
pages/                  # Page Object Model
locators/              # UI selectors (externalized from pages)
tests/helpers/         # Shared utilities
output/                # Downloads & screenshots
codecept.conf.ts       # Test configuration
```

## 📝 Test Scenarios

### ✅ Free Wallpaper Download (`@search-and-download`)
1. Search for wallpapers by keyword
2. Find and click a free wallpaper
3. Download and verify file (format, size, dimensions)

### ⚠️ Premium Wallpaper Login (`@premium-wallpaper-login-flow`) 
1. Find and click premium wallpaper
2. See "Unlock and Support the Artist" modal
3. Click "Login & Watch Ad" button
4. Login with credentials from `.env`
5. Download premium content
**Status:** Working but downloads file twice due to `handleDownloads()` behavior - see [WIP.md](./WIP.md)

### ❌ Premium with Ad Watch (`@premium-wallpaper-logged-in`)
**Status:** Not implemented - needs login in Before() hook

## 🔍 Verification Features

- **File existence & size** - Non-empty file check
- **Image format** - Validates jpg/png/webp using Sharp
- **Dimensions** - Min 100x100, max 10000x10000
- **Integrity** - Ensures image is decodable (not corrupted)

## 🐛 Debugging

- Screenshots on failure: `output/*.png`
- Downloaded files: `output/*.jpg`
- View browser: `npm run test:headed`
