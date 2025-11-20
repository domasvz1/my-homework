const { navigationPage } = inject();

When('I click on Browse Now button', async () => {
  await navigationPage.clickBrowseNow();
});
