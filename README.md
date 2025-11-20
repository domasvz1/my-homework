# Wallpaper Portal Test Suite

Automated end-to-end testing for wallpaper portal using CodeceptJS + Playwright with BDD/Gherkin.

## ✅ What's Implemented

### Category Filtering (`@category-filtering`) - 15 Scenarios

**Category Tests:**
1. ✅ Select single category on ringtones and wallpapers page
2. ✅ Select single category on wallpapers page
3. ✅ Select multiple categories and verify URL
4. ✅ Verify selected category persists across page navigation
5. ✅ Category persists even after navigating to ringtones
6. ✅ Reset all filters clears selected category
7. ✅ Combine category with tag filter *(bug found: tags don't persist on details)*
8. ✅ Verify no results for rare category combination

**Price Filter Tests:**
9. ✅ Filter by free wallpapers only
10. ✅ Filter by paid wallpapers only

**Color Filter Tests:**
11. ✅ Filter by color and verify tag on details

**Category Visibility Tests:**
12. ✅ All categories visible on ringtones and wallpapers page
13. ✅ All categories visible on wallpapers page

**Search Tests:**
14. ✅ Minimal results for nonsense search

**Reset Tests:**
15. ✅ Reset all filters clears selected category

### Wallpaper Download (`@download`) - 4 Scenarios

**Free Wallpaper Tests:**
1. ✅ Download free wallpaper (not logged in) - Full verification (format, size, dimensions, filename)
2. ✅ Download free wallpaper when logged in - Sign in first, then download

**Paid Wallpaper Tests:**
3. ✅ Download premium wallpaper with login flow - Click download, login via modal, then download
4. ✅ Download premium wallpaper by watching ad - Sign in first, filter paid, watch ad, download

**Key Features:**
- **Price filtering** - Uses Free/Paid filters to guarantee wallpaper type
- **Image validation** - Format (jpg/png/webp), size, dimensions, filename safety
- **Download handler** - Separated preparation from click action (fixes double-download bug)
- **No for loops** - Filtering eliminates need for complex iteration logic

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Create .env file
cp .env.example .env
# Edit .env with your credentials

# 3. Run tests
npm run test:all:headed  # Run everything with browser visible
```

## 📋 Prerequisites

- **Node.js v20+** (required for Sharp image processing)
- **VS Code** with Cucumber extension (recommended)

## 🧪 Test Commands

### Category Filtering Tests
```bash
npm run test:category         # Headless
npm run test:category:headed  # Browser visible
```

### Download Tests
```bash
npm run test:download         # Headless
npm run test:download:headed  # Browser visible
```

### All Tests
```bash
npm run test:all              # Headless
npm run test:all:headed       # Browser visible
```

### Other Commands
```bash
npm test                      # All tests headless
npm run debug                 # Run @debug tagged tests (headed)
npm run typecheck             # TypeScript validation
npm run lint                  # ESLint check
npm run lint:fix              # ESLint auto-fix
```

## 📁 Project Structure

```
features/
  ├── category-filtering.feature    # ✅ Complete - 15 scenarios
  ├── wallpaper-download.feature    # ✅ Complete - 4 scenarios
  ├── search-results-quality.feature # ⏸️ Specs only
  ├── search-edge-cases.feature     # ⏸️ Specs only
  └── performance.feature           # ⏸️ Specs only

step_definitions/                  # Step implementations
pages/                            # Page Object Model
locators/                         # Externalized UI selectors
tests/helpers/                    # Shared utilities
output/                          # Downloads & screenshots
```

## 🐛 Known Bugs Discovered

### Tag Filter Bug
**Issue:** Wallpapers filtered by tag don't show the filtered tag on their details page  
**Status:** Documented in test, assertion disabled  
**Location:** `category-filtering.feature` - "Combine category with tag filter" scenario

### Color Filter Works Correctly
**Status:** Verified - Color-filtered wallpapers DO show color as a tag on details page  
**Test:** "Filter by color and verify tag on details" - Passes ✅

## 🔧 Environment Setup

Create `.env` file with your credentials:

```env
BASE_URL=https://www.wallpaper-site.net
SECRET_EMAIL=your-email@example.com
SECRET_PASSWORD=your-password
```

⚠️ **Never commit `.env` to Git!** (Already in `.gitignore`)

## 🐛 Debugging

- **Screenshots on failure:** `output/*.png`
- **Downloaded files:** `output/*.jpg`
- **View browser:** Add `--debug` flag or use `:headed` commands
- **VS Code Cucumber issues:** See [SETUP.md](./SETUP.md)

## 📝 BDD Style Guide

All steps use **first-person active voice** (`I [verb]`):

✅ **Good:**
- `I click the download button`
- `I verify the file is downloaded`
- `I see the category chip "nature"`

❌ **Avoid:**
- ~~`the file should be downloaded`~~
- ~~`category chip should be visible`~~

## 🎯 Test Coverage

**Total: 19 scenarios implemented**
- Category Filtering: 15 scenarios ✅
- Wallpaper Download: 4 scenarios ✅

**Not Implemented (specs exist):**
- Search Results Quality
- Search Edge Cases  
- Performance Testing

## 🔍 Verification Features

### Download Verification
- File existence and non-zero size
- Valid image format (jpg/png/webp) using Sharp
- Dimensions (min 100x100, max 10000x10000)
- Image decodability (corruption check)
- Filename safety (no path traversal)

### Filter Verification
- URL parameter checks (`categories=`, `tags=`, `free=true`, `paid=true`, `colors=`)
- Filter chip visibility
- Premium icon detection for paid wallpapers
- Tag presence on wallpaper details page
- All 24 categories dynamically verified

## 📚 Additional Documentation

- **[SETUP.md](./SETUP.md)** - Detailed setup and troubleshooting
- **[STEP_GUIDELINES.md](./STEP_GUIDELINES.md)** - Writing test steps
- **`.vscode/settings.json`** - Cucumber extension configuration
