const { waitHelper } = inject();

When('I wait for {int} seconds', async (seconds: number) => {
  await waitHelper.waitForSeconds(seconds);
});
