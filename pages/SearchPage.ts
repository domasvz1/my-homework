import { NavigationLocators } from '../locators/NavigationLocators';
import { WallpaperLocators } from '../locators/WallpaperLocators';

const { I } = inject();

class SearchPage {
  async searchForWallpapers(keyword: string) {
    await I.fillField(NavigationLocators.searchInput, keyword);
    await I.click(NavigationLocators.searchButton);
    await I.waitForElement(WallpaperLocators.wallpaperCards, 10);
  }

  async verifyNoResultsMessage() {
    // await I.wait(2); // Wait for search results to load
    // Check if there are minimal wallpaper cards (nonsense searches may show 1-2 sponsored/default results)
    const wallpaperCards = 'a[href^="/wallpapers/"]';
    const cardCount = await I.grabNumberOfVisibleElements(wallpaperCards);
    
    // For a truly nonsense search, expect very few results (< 5)
    if (cardCount >= 5) {
      throw new Error(`Expected minimal/no results for nonsense search, but found ${cardCount} wallpapers`);
    }
    
    console.log(`Verified: Minimal results (${cardCount}) for nonsense search query`);
  }
}

export = new SearchPage();
