import tagPage = require('../pages/TagPage');

When('I click on the tag dropdown', async function() {
  await tagPage.clickTagDropdown();
});

Then('I see the tag dropdown', async function() {
  await tagPage.verifyTagDropdownVisible();
});

When('I check first tag option', async function() {
  await tagPage.checkFirstTagOption();
});

Then('I see the tag chip', async function() {
  await tagPage.verifyTagChipVisible();
});
