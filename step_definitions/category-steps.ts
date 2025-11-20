const { categoryPage } = inject();

When('I click on the category filter button', async function() {
  await categoryPage.clickCategoryButton();
});

When('I click on the category dropdown', async function() {
  await categoryPage.clickCategoryDropdown();
});

Then('I see the category dropdown', async function() {
  await categoryPage.verifyCategoryDropdownVisible();
});

When('I select category {string}', async function(categoryName: string) {
  await categoryPage.selectCategory(categoryName);
});

When('I check category {string}', async function(categoryName: string) {
  await categoryPage.selectCategoryCheckbox(categoryName);
});

When('I click away from the dropdown', async function() {
  await categoryPage.clickAwayFromDropdown();
});

Then('I see only {string} wallpapers', async function(categoryName: string) {
  await categoryPage.verifyOnlyCategoryWallpapers(categoryName);
});

Then('I see only Nature wallpapers', async function() {
  await categoryPage.verifyOnlyCategoryWallpapers('Nature');
});

Then('the category button should show {string}', async function(expectedText: string) {
  await categoryPage.verifyCategoryButtonText(expectedText);
});

Then('I verify the URL contains {string}', async function(expectedUrlPart: string) {
  const { I } = inject();
  const currentUrl = await I.grabCurrentUrl();
  if (!currentUrl.includes(expectedUrlPart)) {
    throw new Error(`Expected URL to contain "${expectedUrlPart}" but got: ${currentUrl}`);
  }
});

Then('results should match the selected category', async function() {
  await categoryPage.verifyOnlyCategoryWallpapers('selected');
});

Then('I see the category chip {string}', async function(categoryName: string) {
  await categoryPage.verifyCategoryChipVisible(categoryName);
});

Then('I do not see the category chip {string}', async function(categoryName: string) {
  await categoryPage.verifyCategoryChipNotVisible(categoryName);
});

When('I uncheck category {string}', async function(categoryName: string) {
  await categoryPage.uncheckCategory(categoryName);
});

When('I click the X button on chip {string}', async function(categoryName: string) {
  await categoryPage.clickChipRemoveButton(categoryName);
});

When('I click the reset all button', async function() {
  await categoryPage.clickResetAllButton();
});

Then('I verify all categories are visible', async function() {
  await categoryPage.verifyAllCategoriesVisible();
});
