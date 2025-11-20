const { navigationPage } = inject();

When('I click on Browse Now button', async function () {
  await navigationPage.clickBrowseNow();
});

When('I click on {string} button on navigation bar', async function (buttonText: string) {
  await navigationPage.clickNavigationButton(buttonText);
});

When('I click on Wallpapers tab', async function() {
  await navigationPage.clickWallpapersTab();
});

When('I click on Sign in button', async function() {
  await navigationPage.clickSignInButton();
});

When('I click on Wallpapers link', async function() {
  await navigationPage.clickWallpapersLink();
});

When('I click on Ringtones tab', async function () {
  await navigationPage.clickRingtonesTab();
});

Then('I am on {string} page', async function (expectedPath: string) {
  const { I } = inject();
  const currentUrl = await I.grabCurrentUrl();
  if (!currentUrl.includes(expectedPath)) {
    throw new Error(`Expected to be on "${expectedPath}" but current URL is: ${currentUrl}`);
  }
});
