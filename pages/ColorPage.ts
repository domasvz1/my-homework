import { ColorLocators } from '../locators/ColorLocators';
const { I } = inject();

class ColorPage {
  async clickColorDropdown() {
    await I.waitForElement(ColorLocators.colorDropdownChip, 10);
    await I.click(ColorLocators.colorDropdownChip);
  }

  async verifyColorDropdownVisible() {
    await I.waitForElement(ColorLocators.colorDropdown, 10);
  }

  async selectFirstColor() {
    await I.waitForElement(ColorLocators.firstColorOption, 10);
    await I.click(ColorLocators.firstColorOption);
  }

  async selectColor(colorName: string) {
    const colorOption = ColorLocators.getColorOption(colorName);
    await I.waitForElement(colorOption, 10);
    await I.click(colorOption);
  }

  async verifyColorChip(colorName: string) {
    const chipLocator = ColorLocators.getColorChip(colorName);
    await I.waitForElement(chipLocator, 10);
  }

  async verifyColorChipVisible() {
    await I.waitForElement(ColorLocators.anyColorChip, 10);
  }
}

export = new ColorPage();
