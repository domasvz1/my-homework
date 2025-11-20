import clickHelper = require('../tests/helpers/ClickHelper');

class AdPage {
  async closeAdIfPresent() {
    await clickHelper.clickAtCoordinates(100, 100);
  }
}

export = new AdPage();
