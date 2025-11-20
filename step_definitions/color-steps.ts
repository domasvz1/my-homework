import colorPage = require('../pages/ColorPage');

When('I click on the color dropdown', async function() {
  await colorPage.clickColorDropdown();
});

Then('I see the color dropdown', async function() {
  await colorPage.verifyColorDropdownVisible();
});

When('I select first color', async function() {
  await colorPage.selectFirstColor();
});

When('I select color {string}', async function(colorName: string) {
  await colorPage.selectColor(colorName);
});

Then('I see the color chip', async function() {
  await colorPage.verifyColorChipVisible();
});

Then('I see the color chip {string}', async function(colorName: string) {
  await colorPage.verifyColorChip(colorName);
});
