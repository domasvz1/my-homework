// @ts-expect-error - I is both global and in inject() for Gherkin steps
const { I, searchPage, wallpaperDetailsPage } = inject();

Given('I am on the homepage', async () => {
  await I.amOnPage('/')
});

When('I search for wallpapers with keyword {string}', async (keyword: string) => {
  await searchPage.searchForWallpapers(keyword);
});

When('I select Wallpapers from category dropdown in {string}', async (location: 'navigation search bar' | 'main search bar') => {
  await searchPage.selectWallpapersCategoryIn(location);
});

When('I search for keyword {string} in {string}', async (keyword: string, location: 'navigation search bar' | 'main search bar') => {
  await searchPage.searchForKeywordIn(keyword, location);
});

Then('I see no results message', async () => {
  await searchPage.verifyNoResultsMessage();
});

When('I click the first wallpaper', async () => {
  await wallpaperDetailsPage.clickFirstWallpaper();
});
