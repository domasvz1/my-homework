import { NavigationLocators } from '../locators/NavigationLocators';

const { I } = inject();

class NavigationPage {
  async clickBrowseNow() {
    await I.waitForElement(NavigationLocators.browseNowLink, 10);
    await I.click(NavigationLocators.browseNowLink);
    await I.waitForElement(NavigationLocators.searchInput, 10);
  }

  async clickNavigationButton(buttonText: string) {
    const buttonLocator = NavigationLocators.getNavigationLink(buttonText);
    await I.waitForElement(buttonLocator, 10);
    await I.click(buttonLocator);
  }

  async clickWallpapersTab() {
    await I.waitForElement(NavigationLocators.wallpapersTab, 10);
    await I.click(NavigationLocators.wallpapersTab);
  }

  async clickSignInButton() {
    await I.waitForElement(NavigationLocators.signInButton, 10);
    await I.click(NavigationLocators.signInButton);
  }

  async clickWallpapersLink() {
    await I.waitForElement(NavigationLocators.wallpapersLink, 10);
    await I.click(NavigationLocators.wallpapersLink);
  }

  async clickRingtonesTab() {
    await I.waitForElement(NavigationLocators.ringtonesTab, 10);
    await I.click(NavigationLocators.ringtonesTab);
  }
}

export = new NavigationPage();
