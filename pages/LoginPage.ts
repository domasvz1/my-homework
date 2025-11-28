import { LoginLocators } from '../locators/LoginLocators';
import clickHelper = require('../tests/helpers/ClickHelper');

const { I } = inject();

class LoginPage {
  async loginWithCredentials(email: string, password: string) {
    await I.waitForElement(LoginLocators.continueWithFacebookButton, 10);
    await I.waitForElement(LoginLocators.continueWithGoogleButton, 10);
    await I.waitForElement(LoginLocators.continueWithAppleButton, 10);
    await I.waitForElement(LoginLocators.continueWithEmailButton, 10);

    // WIP: Using clickUntilInvisible helper to handle navigation issues
    // Sometimes the first click doesn't trigger navigation, so we retry until button disappears
    // TODO: Replace with proper page load detection
    await clickHelper.clickUntilInvisible(LoginLocators.continueWithEmailButton, 5, 1000);
    
    // Fill email and continue
    await I.waitForElement(LoginLocators.emailInput, 15);
    await I.fillField(LoginLocators.emailInput, email);
    await I.click(LoginLocators.continueWithPasswordButton);
    
    // Fill password and continue
    await I.waitForElement(LoginLocators.passwordInput, 10);
    await I.fillField(LoginLocators.passwordInput, password);
    await I.click(LoginLocators.continueButton);
  }
}

export = new LoginPage();
