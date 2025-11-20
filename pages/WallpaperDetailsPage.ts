import { WallpaperDetailsLocators } from '../locators/WallpaperDetailsLocators';
const { I } = inject();

class WallpaperDetailsPage {
  async  verifyTagsAreVisible() {
    await I.wait(2); // Wait for page to load
    await I.waitForElement(WallpaperDetailsLocators.tagChips, 10);
    const tagCount = await I.grabNumberOfVisibleElements(WallpaperDetailsLocators.tagChips);
    
    if (tagCount === 0) {
      throw new Error('Expected wallpaper to have tags, but found none');
    }
    
    console.log(`Verified: Wallpaper has ${tagCount} tags`);
  }

  async verifySpecificTagIsVisible(tagName: string) {
    const tagLocator = WallpaperDetailsLocators.getTagChip(tagName);
    await I.waitForElement(tagLocator, 10);
    console.log(`Verified: Tag "${tagName}" is visible on wallpaper details`);
  }

  async clickFirstWallpaper() {
    const wallpaperCards = 'a[href^="/wallpapers/"]';
    await I.waitForElement(wallpaperCards, 10);
    await I.click(`${wallpaperCards}:first-child`);
  }

  async getFirstSelectedTag() {
    // Get the text of the first tag chip (not category, not reset all)
    // Tag chips appear after category chips and before reset all
    const tagChips = 'button[data-size="medium"][data-appearance="primary"]';
    await I.waitForElement(tagChips, 5);
    const chipTexts = await I.grabTextFromAll(tagChips);
    
    // Find the first chip that's not a known category or "Reset All"
    const knownCategories = ['nature', 'animals', 'technology', 'space', 'free', 'paid'];
    for (const text of chipTexts) {
      const lowerText = text.toLowerCase().trim();
      if (lowerText !== 'reset all' && !knownCategories.includes(lowerText)) {
        return lowerText;
      }
    }
    
    return chipTexts[0].toLowerCase().trim();
  }

  async getFirstSelectedColor() {
    // Get color chip text by waiting for it to appear and reading the text content
    // Color chips have class Chip_chip and are inside the filter bar
    const colorChipLocator = '.Chip_chip__4E4jb[data-size="medium"][data-appearance="primary"]';
    await I.waitForElement(colorChipLocator, 5);
    const chipTexts = await I.grabTextFromAll(colorChipLocator);
    
    // Filter out known non-color chips
    const knownNonColors = ['nature', 'animals', 'technology', 'space', 'free', 'paid', 'reset all'];
    for (const text of chipTexts) {
      const lowerText = text.toLowerCase().trim();
      if (!knownNonColors.includes(lowerText)) {
        return lowerText;
      }
    }
    
    return chipTexts[0].toLowerCase().trim();
  }
}

export = new WallpaperDetailsPage();
