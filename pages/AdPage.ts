const { I } = inject();

class AdPage {
  async closeAdIfPresent() {
    await I.usePlaywrightTo('click at coordinates', async ({ page }) => {
      await page.mouse.click(100, 100);
    });
  }
}

export = new AdPage();
