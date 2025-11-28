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

  /**
   * Click a button repeatedly until it becomes invisible
   * @param locator - The button locator to click
   * @param maxAttempts - Maximum number of attempts (default 5)
   * @param intervalMs - Interval between clicks in milliseconds (default 1000)
   */
  async clickUntilInvisible(locator: string, maxAttempts: number = 5, intervalMs: number = 1000) {
    for (let i = 0; i < maxAttempts; i++) {
      // Check if element exists without creating failed step
      const elementsCount = await I.grabNumberOfVisibleElements(locator);
      
      if (elementsCount === 0) {
        // Element is invisible, we're done
        console.log(`Element became invisible after ${i} attempt(s)`);
        return;
      }
      
      // Click the element
      await I.click(locator);
      
      // Wait for the interval
      await I.wait(intervalMs / 1000);
    }
    
    console.log(`Element still visible after ${maxAttempts} attempts`);
  }
}

export = new ClickHelper();
