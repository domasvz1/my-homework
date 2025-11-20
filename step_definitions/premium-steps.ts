const { premiumPage } = inject();

Then('I see the unlock modal', async () => {
  await premiumPage.verifyUnlockModalVisible();
});

Then('I see the login is required to watch ad', async () => {
  await premiumPage.verifyLoginRequired();
});

When('I click on login and watch ad button', async () => {
  await premiumPage.clickLoginAndWatchAd();
});

Then('I see the watch ad button', async () => {
  await premiumPage.verifyWatchAdButtonVisible();
});

When('I watch the ad to unlock premium content', async () => {
  await premiumPage.clickWatchAd();
});
