import { TagLocators } from '../locators/TagLocators';
const { I } = inject();

class TagPage {
  async clickTagDropdown() {
    await I.waitForElement(TagLocators.tagDropdownChip, 10);
    await I.click(TagLocators.tagDropdownChip);
  }

  async verifyTagDropdownVisible() {
    await I.waitForElement(TagLocators.tagDropdown, 10);
  }

  async checkFirstTagOption() {
    // Skip the first option (likely search input), click the second actual tag
    await I.waitForElement(TagLocators.tagOption, 10);
    await I.waitForElement(TagLocators.secondTagOption, 10);
    await I.click(TagLocators.secondTagOption);
  }

  async verifyTagChipVisible() {
    await I.waitForElement(TagLocators.anyTagChip, 10);
  }
}

export = new TagPage();
