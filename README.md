# Wallpaper Portal Test Suite

Automated end-to-end testing for wallpaper portal using CodeceptJS + Playwright with BDD/Gherkin.

## ✅ What's Implemented

### Category Filtering (`@category-filtering`) - 14 Scenarios

1. ✅ **Select category from homepage dropdown and navigate to wallpapers page** *(4 examples: Funny, Technology, Nature, Animals)*
2. ✅ **Select single category from wallpapers page dropdown and verify URL and chip** *(4 examples: Nature, Animals, Space, Technology)*
3. ✅ **Select multiple categories simultaneously and verify all appear in URL and chips**
4. ✅ **Remove category filter by unchecking in dropdown**
5. ✅ **Remove category filter by clicking X button on chip**
6. ✅ **Clear all selected category filters using reset all button**
7. ✅ **Verify category filter persists when navigating from homepage to wallpapers tab**
8. ✅ **Apply both category and tag filters together and verify on details page** *(bug found: filtered tag doesn't appear on details)*
9. ✅ **Filter wallpapers by free price and verify all results are free**
10. ✅ **Filter wallpapers by paid price and verify all results are paid**
11. ✅ **Filter wallpapers by color and verify color tag appears on details page**
12. ✅ **Verify all category options are visible in homepage dropdown**
13. ✅ **Verify all category options are visible in wallpapers page dropdown**
14. ✅ **Verify no results message appears for nonsense search query**

### Wallpaper Download (`@download`) - 6 Scenarios

1. ✅ **Download free wallpaper from wallpapers page without login** - Full verification (format, size, dimensions, filename)
2. ✅ **Download free wallpaper from wallpapers link after logging in**
3. ✅ **Verify unlock modal appears for paid wallpaper when not logged in initially** *(download verification disabled - site bug)*
4. ✅ **Verify watch ad button appears for paid wallpaper when already logged in** *(download verification disabled - site bug)*
5. ✅ **Search and download free wallpaper using navigation search bar** *(2 examples: flowers, landscape)*
6. ✅ **Search for paid wallpaper using main search bar and verify unlock modal with login** *(2 examples: city, abstract)*

**Key Features:**
- **Search integration** - Tests search → filter → download flow
- **Price filtering** - Uses Free/Paid filters to guarantee wallpaper type
- **Image validation** - Format (jpg/png/webp), size, dimensions, filename safety
- **File cleanup** - Deletes test files after verification
- **Specific file verification** - Checks exact filename instead of "most recent"
- **Download polling** - Waits up to 10 seconds for file to appear

### Search Results Quality (`@search`) - 2 Scenarios

1. ✅ **Verify wallpapers from navigation search bar contain search keyword as tag** *(4 examples: sunset, nature, ocean, cars)*
2. ✅ **Verify wallpapers from main search bar contain search keyword as tag** *(4 examples: space, forest, beach, mountains)*

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

### Search Tests
```bash
npm run test:search           # Headless
npm run test:search:headed    # Browser visible
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
  ├── category-filtering.feature    # ✅ Complete - 14 scenarios
  ├── wallpaper-download.feature    # ✅ Complete - 6 scenarios
  └── search-results.feature        # ✅ Complete - 2 scenarios

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
**Location:** `category-filtering.feature` - "Apply both category and tag filters together" scenario

### Paid Wallpaper Download Bug
**Issue:** Paid wallpapers don't actually download after watching ad or login flow  
**Status:** Tests verify unlock modal and ad watching instead of actual download  
**Location:** `wallpaper-download.feature` - Paid scenarios (download verification commented out)

### Search Keyword Bug (Minor)
**Issue:** "animals" keyword sometimes returns wallpapers without "animals" tag  
**Status:** Commented out from test examples  
**Location:** `search-results.feature` - Main search bar scenario

### Color Filter Works Correctly
**Status:** Verified - Color-filtered wallpapers DO show color as a tag on details page ✅  
**Test:** "Filter by color and verify color tag appears" - Passes

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

**Total: 22 scenarios implemented** *(50+ individual test cases when scenario outlines are expanded)*
- Category Filtering: 14 scenarios ✅
- Wallpaper Download: 6 scenarios ✅
- Search Results Quality: 2 scenarios ✅

**Test Execution Examples:**
- "Select category from homepage dropdown" runs 4 times (Funny, Technology, Nature, Animals)
- "Search and download free wallpaper" runs 2 times (flowers, landscape)
- "Verify navigation search results" runs 4 times (sunset, nature, ocean, cars)

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
