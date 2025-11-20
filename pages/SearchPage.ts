import { NavigationLocators } from '../locators/NavigationLocators';
import { WallpaperLocators } from '../locators/WallpaperLocators';

const { I } = inject();

class SearchPage {
  async searchForWallpapers(keyword: string) {
    await I.fillField(NavigationLocators.searchInput, keyword);
    await I.click(NavigationLocators.searchButton);
    await I.waitForElement(WallpaperLocators.wallpaperCards, 10);
  }
}

export = new SearchPage();
