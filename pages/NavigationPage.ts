import { NavigationLocators } from '../locators/NavigationLocators';

const { I } = inject();

class NavigationPage {
  async clickBrowseNow() {
    await I.waitForElement(NavigationLocators.browseNowLink, 10);
    await I.click(NavigationLocators.browseNowLink);
    await I.waitForElement(NavigationLocators.searchInput, 10);
  }
}

export = new NavigationPage();
