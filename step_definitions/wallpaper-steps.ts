// @ts-expect-error - I is both global and in inject() for Gherkin steps
const { I, searchPage } = inject();

Given('I am on the homepage', async () => {
  await I.amOnPage('/')
});

When('I search for wallpapers with keyword {string}', async (keyword: string) => {
  await searchPage.searchForWallpapers(keyword);
});
