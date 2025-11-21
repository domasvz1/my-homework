const { I } = inject();

class ClickHelper {
  /**
   * Click at specific coordinates on the page
   * @param x - X coordinate
   * @param y - Y coordinate
   */
  async clickAtCoordinates(x: number, y: number): Promise<void> {
    await I.usePlaywrightTo('click at coordinates', async ({ page }) => {
      await page.mouse.click(x, y);
    });
  }
}

export = new ClickHelper();
