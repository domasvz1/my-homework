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
    await I.waitForElement('[role="option"]', 10);
    const secondOption = '[role="option"]:nth-child(2)';
    await I.waitForElement(secondOption, 10);
    await I.click(secondOption);
  }

  async verifyTagChipVisible() {
    await I.waitForElement(TagLocators.anyTagChip, 10);
  }
}

export = new TagPage();
