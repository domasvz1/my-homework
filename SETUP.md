# Setup Guide

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

**Requirements:**
- Node.js v20+ (for Sharp image processing)
- Git (to clone repository)

### 2. Configure Environment

Create `.env` file from template:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
BASE_URL=https://www.wallpaper-site.net
SECRET_EMAIL=your-email@example.com
SECRET_PASSWORD=your-password
```

⚠️ **Important:**
- No quotes around values
- Use real account credentials (needed for premium tests)
- File is already in `.gitignore` - safe from accidental commits

### 3. Verify Setup

Run a quick test:

```bash
npm run test:category:headed
```

You should see:
- Browser opens
- Tests run
- Results in terminal

---

## VS Code Setup (Recommended)

### Install Cucumber Extension

1. Open VS Code Extensions (Ctrl+Shift+X)
2. Search for "Cucumber (Gherkin)"
3. Install by alexkrechik

### Configure Cucumber Extension

The `.vscode/settings.json` is already configured, but if you have issues:

```json
{
  "cucumberautocomplete.steps": [
    "step_definitions/**/*.ts",
    "step_definitions/category-steps.ts",
    "step_definitions/tag-steps.ts",
    "step_definitions/price-steps.ts",
    "step_definitions/color-steps.ts",
    "step_definitions/wallpaper-details-steps.ts"
  ],
  "cucumberautocomplete.syncfeatures": "features/**/*.feature",
  "cucumberautocomplete.strictGherkinCompletion": true
}
```

**If steps still show yellow underlines:**
1. Run: `npm run refresh-steps`
2. Reload VS Code: Ctrl+Shift+P → "Reload Window"
3. Reopen feature file

---

## Common Issues

### Error: `Cannot read properties of undefined (reading 'endsWith')`

**Cause:** Missing or incomplete `.env` file

**Fix:**
```bash
# 1. Create .env from template
cp .env.example .env

# 2. Edit .env and add all three variables:
BASE_URL=https://www.wallpaper-site.net
SECRET_EMAIL=your-email@example.com
SECRET_PASSWORD=your-password

# 3. Verify no quotes around values
# 4. Save and retry
```

### Error: `codeceptjs: command not found`

**Cause:** Dependencies not installed

**Fix:**
```bash
npm install
```

### Tests fail during login

**Cause:** Invalid credentials

**Fix:**
1. Verify credentials work on the target site
2. Update `.env` with correct email/password
3. Ensure no extra spaces or quotes

### Browser doesn't open in headed mode

**Cause:** Playwright browsers not installed

**Fix:**
```bash
npx playwright install chromium
```

### Steps show yellow underlines in VS Code

**Cause:** Cucumber extension can't find step definitions

**Fix:**
1. Install Cucumber (Gherkin) extension
2. Run: `npm run refresh-steps`
3. Reload VS Code window
4. Check `.vscode/settings.json` exists with correct paths

### Tests time out

**Possible causes:**
- Slow internet connection
- Site is down or slow
- Too many tests running simultaneously

**Fix:**
- Run fewer tests: `npm run test:category` instead of `npm run test:all`
- Check site accessibility in browser
- Increase timeout in `codecept.conf.ts` if needed

---

## Running Specific Tests

### By Feature
```bash
npm run test:category         # Category filtering only
npm run test:download         # Download tests only
npm run test:all              # Everything
```

### By Tag
```bash
npm test -- --grep @free                 # Free downloads only
npm test -- --grep @premium              # Premium downloads only
npm test -- --grep "@filter.*@price"     # Price filter tests
```

### Headed vs Headless
```bash
npm run test:category         # Headless (fast, CI-friendly)
npm run test:category:headed  # Headed (browser visible, debugging)
```

### Debug Mode
```bash
# Add @debug tag to scenario in feature file, then:
npm run debug
```

---

## Folder Structure

```
.
├── features/                   # Test scenarios (Gherkin)
│   ├── category-filtering.feature
│   └── wallpaper-download.feature
├── step_definitions/           # Step implementations
│   ├── category-steps.ts
│   ├── download-steps.ts
│   └── ...
├── pages/                      # Page Object Model
│   ├── CategoryPage.ts
│   ├── DownloadPage.ts
│   └── ...
├── locators/                   # UI selectors
│   ├── CategoryLocators.ts
│   └── ...
├── tests/helpers/              # Utilities
├── output/                     # Downloads & screenshots
├── .env                        # Your credentials (gitignored)
├── .env.example                # Template
└── codecept.conf.ts            # Test configuration
```

---

## Environment Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|----------|
| `BASE_URL` | Yes | Wallpaper site URL | `https://www.wallpaper-site.net` |
| `SECRET_EMAIL` | Yes | Your account email | `user@example.com` |
| `SECRET_PASSWORD` | Yes | Your account password | `YourPassword123` |

**Security:**
- `.env` is in `.gitignore` - won't be committed
- Never share your `.env` file
- Never commit credentials to Git

---

## Troubleshooting Checklist

- [ ] `.env` file exists with all 3 variables
- [ ] No quotes around values in `.env`
- [ ] Credentials work on the wallpaper site
- [ ] `npm install` completed successfully
- [ ] Node.js version 20 or higher
- [ ] Cucumber extension installed (VS Code)
- [ ] `.vscode/settings.json` exists
- [ ] Ran `npm run refresh-steps`
- [ ] Reloaded VS Code window

If all checked and still failing, check:
- Internet connection
- Wallpaper site accessibility
- Antivirus/firewall blocking browser automation

---

## Getting Help

1. Check error message in terminal
2. Look for screenshots in `output/` folder
3. Run with `--debug` flag to see browser
4. Check this SETUP.md for common issues
5. Verify `.env` configuration

## Next Steps

Once setup is complete:
1. Read [README.md](./README.md) for test commands
2. Explore `features/` folder for test scenarios
3. Run `npm run test:all:headed` to see everything work
4. Check `output/` for downloaded files and screenshots
