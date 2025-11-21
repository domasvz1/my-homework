import { CategoryLocators } from '../locators/CategoryLocators';
import { WallpaperLocators } from '../locators/WallpaperLocators';
import clickHelper = require('../tests/helpers/ClickHelper');
const { I } = inject();

class CategoryPage {
  async clickCategoryButton() {
    await I.waitForElement(CategoryLocators.categoriesButton, 10);
    await I.click(CategoryLocators.categoriesButton);
  }

  async clickCategoryDropdown() {
    await I.waitForElement(CategoryLocators.categoryDropdownChip, 10);
    await I.click(CategoryLocators.categoryDropdownChip);
  }

  async verifyCategoryDropdownVisible() {
    await I.waitForElement(CategoryLocators.categoryDropdown, 10);
  }

  async clickAwayFromDropdown() {
    await clickHelper.clickAtCoordinates(100, 100);
  }

  async selectCategory(categoryName: string) {
    const categoryOption = CategoryLocators.getCategoryOption(categoryName);
    await I.waitForElement(categoryOption, 10);
    await I.click(categoryOption);
  }

  async selectCategoryCheckbox(categoryName: string) {
    const categoryOption = CategoryLocators.getCategoryOption(categoryName);
    await I.waitForElement(categoryOption, 10);
    await I.click(categoryOption);
  }

  async uncheckCategory(categoryName: string) {
    const categoryOption = CategoryLocators.getCategoryOption(categoryName);
    await I.waitForElement(categoryOption, 10);
    await I.click(categoryOption);
  }

  async verifyCategoryChipVisible(categoryName: string) {
    const chipLocator = CategoryLocators.getCategoryChip(categoryName);
    await I.waitForElement(chipLocator, 10);
  }

  async verifyCategoryChipNotVisible(categoryName: string) {
    const chipLocator = CategoryLocators.getCategoryChip(categoryName);
    await I.waitForInvisible(chipLocator, 10);
  }

  async clickChipRemoveButton(categoryName: string) {
    const chipSpanXPath = CategoryLocators.getChipRemoveButton(categoryName);
    await I.waitForElement(chipSpanXPath, 10);
    
    try {
      await I.click(chipSpanXPath);
    } catch (error) {
      await I.say(`Failed to click chip. Locator used: ${chipSpanXPath}`);
      throw error;
    }
  }

  async clickResetAllButton() {
    await I.waitForElement(CategoryLocators.resetAllButton, 10);
    await I.click(CategoryLocators.resetAllButton);
  }

  async verifyCategoryButtonText(expectedText: string) {
    await I.waitForElement(CategoryLocators.categoriesButton, 5);
    const buttonText = await I.grabTextFrom(CategoryLocators.categoriesButton);
    if (!buttonText.includes(expectedText)) {
      throw new Error(`Expected category button to show "${expectedText}" but got "${buttonText}"`);
    }
  }

  async verifyOnlyCategoryWallpapers(categoryName: string) {
    await I.waitForElement(WallpaperLocators.wallpaperCards, 10);
    const count = await I.grabNumberOfVisibleElements(WallpaperLocators.wallpaperCards);
    
    if (count === 0) {
      throw new Error(`No wallpapers found for category "${categoryName}"`);
    }
    
    console.log(`Found ${count} wallpapers for category: ${categoryName}`);
  }

  async verifyAllCategoriesVisible() {
    const allCategories = Object.values(CategoryLocators.categories);
    
    for (const category of allCategories) {
      const categoryOption = CategoryLocators.getCategoryOption(category);
      await I.waitForElement(categoryOption, 5);
    }
    
    console.log(`Verified all ${allCategories.length} categories are visible`);
  }
}

export = new CategoryPage();
