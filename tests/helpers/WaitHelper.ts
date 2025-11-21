const { I } = inject();

class WaitHelper {
  async waitForSeconds(seconds: number) {
    console.log(`⏳ Waiting for ${seconds} seconds...`);
    await I.wait(seconds);
    console.log(`✓ Wait completed`);
  }
}

export = new WaitHelper();
