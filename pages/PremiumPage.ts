import { PremiumLocators } from '../locators/PremiumLocators';

const { I } = inject();

class PremiumPage {
  async verifyUnlockModalVisible() {
    await I.waitForElement(PremiumLocators.unlockModalHeading, 10);
  }
  
  async verifyLoginRequired() {
    await I.seeElement(PremiumLocators.loginAndWatchAdButton);
  }
  
  async clickLoginAndWatchAd() {
    await I.waitForElement(PremiumLocators.loginAndWatchAdButton, 10);
    await I.click(PremiumLocators.loginAndWatchAdButton);
  }
  
  async verifyWatchAdButtonVisible() {
    await I.waitForElement(PremiumLocators.watchAdButton, 10);
    await I.seeElement(PremiumLocators.watchAdButton);
  }
  
  async clickWatchAd() {
    await I.waitForElement(PremiumLocators.watchAdButton, 10);
    await I.click(PremiumLocators.watchAdButton);
  }

  async verifyUnlockModalWithAdsLeft() {
    await I.waitForElement(PremiumLocators.watchAdButton, 10);
    await I.seeElement(PremiumLocators.watchAdButton);
    await I.waitForElement(PremiumLocators.adsLeftText, 10);
    await I.seeElement(PremiumLocators.adsLeftText);
  }
}

export = new PremiumPage();
