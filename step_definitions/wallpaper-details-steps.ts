import wallpaperDetailsPage = require('../pages/WallpaperDetailsPage');

When('I click on the first filtered wallpaper', async function() {
  await wallpaperDetailsPage.clickFirstWallpaper();
});

Then('I see tags on wallpaper details page', async function() {
  await wallpaperDetailsPage.verifyTagsAreVisible();
});

Then('I see tag {string} on wallpaper details page', async function(tagName: string) {
  await wallpaperDetailsPage.verifySpecificTagIsVisible(tagName);
});

Then('I see the selected tag on wallpaper details page', async function() {
  const selectedTag = await wallpaperDetailsPage.getFirstSelectedTag();
  await wallpaperDetailsPage.verifySpecificTagIsVisible(selectedTag);
});

Then('I see the selected color tag on wallpaper details page', async function() {
  const selectedColor = await wallpaperDetailsPage.getFirstSelectedColor();
  await wallpaperDetailsPage.verifySpecificTagIsVisible(selectedColor);
});
