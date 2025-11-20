# BDD Step Definition Guidelines

This document defines the rules and patterns for writing Gherkin steps in this project.

## Core Principle: First-Person Active Voice

All steps MUST be written from the user's perspective using **"I [verb]"** format.

## Step Patterns

### ✅ CORRECT Patterns

**Navigation Steps (Given/When):**
- `I am on the wallpapers page for "category"`
- `I navigate to the search page`
- `I visit the homepage`

**Action Steps (When):**
- `I click the download button`
- `I find and click a free wallpaper`
- `I accept cookie consent if present`
- `I enter "text" in the search field`

**Observation Steps (Then):**
- `I see the download button`
- `I see "text" on the page`

**Verification Steps (Then):**
- `I verify the file is downloaded`
- `I verify the file has valid size`
- `I verify the image has valid dimensions`
- `I verify the filename is safe`

### ❌ INCORRECT Patterns (Do NOT use)

- ~~`the file should be downloaded`~~ → Use: `I verify the file is downloaded`
- ~~`I should see the button`~~ → Use: `I see the button`
- ~~`I should be on the page`~~ → Use: `I am on the page`
- ~~`the downloaded file should have`~~ → Use: `I verify the file has`
- ~~`user clicks the button`~~ → Use: `I click the button`
- ~~`download button is visible`~~ → Use: `I see the download button`

## Step Type Rules

### Given (Preconditions)
- Set up initial state
- Use **"I am on..."** or **"I have..."**
- Examples:
  - `Given I am on the wallpapers page for "nature"`
  - `Given I have accepted cookies`

### When (Actions)
- User actions and interactions
- Use **"I click..."**, **"I enter..."**, **"I select..."**
- Examples:
  - `When I click the download button`
  - `When I find and click a free wallpaper`

### Then (Assertions/Verifications)
- Verify outcomes
- Use **"I am on..."**, **"I see..."**, **"I verify..."**
- Examples:
  - `Then I see the download button`
  - `Then I verify the file is downloaded`

## Step Naming Conventions

### State Checks
Use **"I am"** for page/state verification:
- `I am on the [page name]`
- `I am logged in`

### Visual Checks
Use **"I see"** for element visibility:
- `I see the [element name]`
- `I see "[text content]"`

### Data/Logic Checks
Use **"I verify"** for backend/file/data verification:
- `I verify the file is downloaded`
- `I verify the file has valid size`
- `I verify the image has valid dimensions`

## Parameters

### String Parameters
Use `{string}` for text values:
```gherkin
Given I am on the wallpapers page for "nature"
When I enter "sunset" in the search field
```

### Integer Parameters
Use `{int}` for numbers:
```gherkin
Then I verify the image dimensions are at least {int}x{int}
```

## Best Practices

1. **Keep steps atomic** - One action or verification per step
2. **Make steps reusable** - Write generic steps that can be used in multiple scenarios
3. **Use clear, natural language** - Steps should read like plain English
4. **Be consistent** - Always follow the same pattern for similar actions
5. **Avoid technical jargon in feature files** - Keep it business-readable

## Examples

### Good Scenario
```gherkin
Scenario: Download a free wallpaper
  Given I am on the wallpapers page for "nature"
  And I accept cookie consent if present
  When I find and click a free wallpaper
  And I see the download button
  When I click the download button
  Then I verify the file is downloaded
  And I verify the file has valid size
```

### Bad Scenario (Don't do this)
```gherkin
Scenario: Download a free wallpaper
  Given the wallpapers page for "nature" is loaded
  And cookie consent should be accepted
  When first free wallpaper should be clicked
  Then user should be on the detail page
  And the download button should be visible
  When the download button is clicked
  Then the file should be downloaded successfully
```

## Enforcement

These guidelines are enforced through:
- Code reviews
- Cucumber autocomplete in VS Code
- Team consensus
- This living document

When in doubt, ask: **"Can I say this sentence naturally starting with 'I'?"**
If yes, it's probably a good step. If no, rephrase it.

## Troubleshooting

### "Was unable to find step" warnings in VS Code

If you see warnings that steps can't be found after renaming them:

**Option 1: Reload VS Code Window (Recommended)**
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Reload Window"
3. Press Enter

**Option 2: Run refresh command**
```bash
npm run refresh-steps
```
Then close and reopen your feature files.

**Option 3: Close and reopen the feature file**
Sometimes simply closing and reopening the `.feature` file is enough for the Cucumber extension to rescan.

### VS Code not detecting steps automatically

Make sure the Cucumber extension is installed:
- Extension: "Cucumber (Gherkin) Full Support" by Alexander Krechik
- The extension should be enabled in your workspace
- Check that `.vscode/settings.json` exists with the correct configuration
