import pricePage = require('../pages/PricePage');

When('I click on the price dropdown', async function() {
  await pricePage.clickPriceDropdown();
});

Then('I see the price dropdown', async function() {
  await pricePage.verifyPriceDropdownVisible();
});

When('I select free only', async function() {
  await pricePage.selectFree();
});

When('I select paid only', async function() {
  await pricePage.selectPaid();
});

Then('I see the price chip {string}', async function(priceType: string) {
  await pricePage.verifyPriceChipVisible(priceType);
});

Then('I verify all wallpapers are paid', async function() {
  await pricePage.verifyAllWallpapersArePaid();
});

Then('I verify all wallpapers are free', async function() {
  await pricePage.verifyAllWallpapersAreFree();
});
