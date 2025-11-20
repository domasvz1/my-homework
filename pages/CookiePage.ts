import { CookieLocators } from '../locators/CookieLocators';
const { I } = inject();

class CookiePage {
  async acceptCookiesIfPresent() {
    const isVisible = await tryTo(() => I.waitForElement(CookieLocators.acceptButton, 3));
    
    if (isVisible) {
      await I.click(CookieLocators.acceptButton);
      await I.waitForInvisible(CookieLocators.acceptButton, 3);
    }
  }
}

export = new CookiePage();
