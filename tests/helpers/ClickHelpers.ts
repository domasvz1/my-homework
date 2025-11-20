const { I } = inject();

class ClickHelpers {
  /**
   * Click a button repeatedly until it becomes invisible
   * @param locator - The button locator to click
   * @param maxAttempts - Maximum number of attempts (default 5)
   * @param intervalMs - Interval between clicks in milliseconds (default 1000)
   */
  async clickUntilInvisible(locator: string, maxAttempts: number = 5, intervalMs: number = 1000) {
    for (let i = 0; i < maxAttempts; i++) {
      // Check if element is visible
      const isVisible = await tryTo(() => I.seeElement(locator));
      
      if (!isVisible) {
        // Element is invisible, we're done
        return;
      }
      
      // Click the element
      await I.click(locator);
      
      // Wait for the interval
      await I.wait(intervalMs / 1000);
    }
  }
}

export = new ClickHelpers();
