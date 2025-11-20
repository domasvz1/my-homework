const { adPage } = inject();

When('I close any ad if present', async () => {
  await adPage.closeAdIfPresent();
});
