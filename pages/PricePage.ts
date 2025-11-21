import { PriceLocators } from '../locators/PriceLocators';
const { I } = inject();

class PricePage {
  async clickPriceDropdown() {
    await I.waitForElement(PriceLocators.priceDropdownChip, 10);
    await I.click(PriceLocators.priceDropdownChip);
  }

  async verifyPriceDropdownVisible() {
    await I.waitForElement(PriceLocators.priceDropdown, 10);
  }

  async selectFree() {
    await I.waitForElement(PriceLocators.freeOption, 10);
    await I.click(PriceLocators.freeOption);
  }

  async selectPaid() {
    await I.waitForElement(PriceLocators.paidOption, 10);
    await I.click(PriceLocators.paidOption);
  }

  async verifyPriceChipVisible(priceType: string) {
    const chipLocator = PriceLocators.getPriceChip(priceType);
    await I.waitForElement(chipLocator, 10);
  }

  async verifyAllWallpapersArePaid() {
    await I.waitForElement(PriceLocators.wallpaperCards, 10);
    const totalCards = await I.grabNumberOfVisibleElements(PriceLocators.wallpaperCards);
    
    // Check each wallpaper for premium icon (paid wallpapers have premium icon)
    const premiumCards = await I.grabNumberOfVisibleElements(PriceLocators.premiumIcon);
    
    if (premiumCards !== totalCards) {
      throw new Error(`Expected all ${totalCards} wallpapers to be paid, but only ${premiumCards} have premium icons`);
    }
  }

  async verifyAllWallpapersAreFree() {
    const totalCards = await I.grabNumberOfVisibleElements(PriceLocators.wallpaperCards);
    
    // Check that NO wallpapers have premium icon (free wallpapers don't have the icon)
    const premiumCards = await I.grabNumberOfVisibleElements(PriceLocators.premiumIcon);
    
    if (premiumCards > 0) {
      throw new Error(`Expected all ${totalCards} wallpapers to be free, but ${premiumCards} have premium icons`);
    }
  }
}

export = new PricePage();
