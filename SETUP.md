# Setup Guide

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browsers
npx playwright install chromium

# 3. Create environment file
cp .env.example .env
# Edit .env with your credentials (no quotes)

# 4. Run tests
npm run test:category:headed
```

## System Requirements

**Required:**
- **Node.js v20+** - Required for Sharp image processing library
- **npm** - Comes with Node.js
- **Git** - To clone repository

**Automatic Installation:**
- `npm install` installs all dependencies from package.json
- Playwright browsers installed separately (see below)

## Environment Configuration

### 1. Create `.env` File

```bash
cp .env.example .env
```

### 2. Add Your Credentials

Edit `.env` (no quotes around values):

```env
BASE_URL=https://www.wallpaper-site.net
SECRET_EMAIL=your-email@example.com
SECRET_PASSWORD=your-password
```

⚠️ **Important:**
- No quotes around values
- Use real account credentials (required for login/premium tests)
- File is gitignored - safe from commits
- `dotenv` package loads these automatically

### 3. Install Playwright Browsers

```bash
npx playwright install chromium
```

This downloads the Chromium browser binary used by tests.

## IDE Setup (Optional)

Tests run from command line and work with **any IDE** (VS Code, IntelliJ IDEA, WebStorm, etc.).

### VS Code Users

Install **Cucumber (Gherkin)** extension by alexkrechik for:
- Syntax highlighting in `.feature` files  
- Step definition auto-complete
- Navigate to step definitions

Configuration is already in `.vscode/settings.json`. If steps show yellow underlines:
```bash
npm run refresh-steps
# Then reload VS Code window
```

### IntelliJ IDEA / WebStorm Users

Enable built-in Gherkin support:
1. Go to Settings → Plugins
2. Enable "Gherkin" plugin (built-in)
3. Enable "Cucumber.js" plugin
4. No additional configuration needed

## Running Tests

See [README.md](./README.md) for full command list. Quick reference:

```bash
npm run test:category         # Category filtering (headless)
npm run test:download         # Download tests (headless)
npm run test:search           # Search tests (headless)
npm run test:all              # All tests (headless)

# Add :headed to see browser
npm run test:category:headed  # Browser visible
npm run test:all:headed       # All tests with browser

# Debug specific scenarios
# Add @debug tag to scenario in .feature file, then:
npm run debug
```

## Common Issues

### `Cannot read properties of undefined`
**Problem:** Missing `.env` file  
**Solution:** Create `.env` from `.env.example` with all 3 variables (no quotes)

### `codeceptjs: command not found`
**Problem:** Dependencies not installed  
**Solution:** Run `npm install`

### Browser doesn't open
**Problem:** Playwright browsers not installed  
**Solution:** Run `npx playwright install chromium`

### Login tests fail
**Problem:** Invalid credentials in `.env`  
**Solution:** Verify credentials work on site, check for typos/spaces

### Tests timeout
**Problem:** Slow connection or site issues  
**Solution:** Run fewer tests at once, check internet connection

### Sharp module errors
**Problem:** Node.js version too old  
**Solution:** Upgrade to Node.js v20 or higher

## Project Structure

```
features/                      # Gherkin test scenarios
step_definitions/              # TypeScript step implementations  
pages/                         # Page Object Model
locators/                      # UI selectors (externalized)
tests/helpers/                 # Shared utilities (download verification, etc.)
output/                        # Downloaded files & failure screenshots
.env                          # Your credentials (gitignored)
codecept.conf.ts              # Test configuration
```

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `BASE_URL` | Yes | Target site URL |
| `SECRET_EMAIL` | Yes | Login email |
| `SECRET_PASSWORD` | Yes | Login password |

## Verification Checklist

Before reporting issues, verify:

- [ ] Node.js v20+ installed (`node -v`)
- [ ] Dependencies installed (`npm install` completed)
- [ ] Playwright browsers installed (`npx playwright install chromium`)
- [ ] `.env` file exists with all 3 variables
- [ ] No quotes in `.env` values
- [ ] Credentials work on the site
- [ ] Internet connection stable

## Next Steps

1. See [README.md](./README.md) for test coverage and commands
2. Browse `features/` folder to see test scenarios
3. Run `npm run test:all:headed` to watch tests execute
4. Check `output/` for screenshots and downloaded files
