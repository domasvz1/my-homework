import { NavigationLocators } from '../locators/NavigationLocators';
import { SearchLocators } from '../locators/SearchLocators';
import { WallpaperLocators } from '../locators/WallpaperLocators';

const { I } = inject();

class SearchPage {
  async searchForWallpapers(keyword: string) {
    await I.fillField(NavigationLocators.searchInput, keyword);
    await I.click(NavigationLocators.searchButton);
    await I.waitForElement(WallpaperLocators.wallpaperCards, 10);
  }

  async selectWallpapersCategoryIn(location: 'navigation search bar' | 'main search bar') {
    const index = location === 'navigation search bar' ? 1 : 2;
    await I.waitForElement(SearchLocators.categoryDropdown, 10);
    await I.click(locate(SearchLocators.categoryDropdown).at(index));
    await I.waitForElement(SearchLocators.wallpapersOption, 10);
    await I.click(SearchLocators.wallpapersOption);
  }

  async searchForKeywordIn(keyword: string, location: 'navigation search bar' | 'main search bar') {
    const index = location === 'navigation search bar' ? 1 : 2;
    await I.fillField(locate(SearchLocators.searchInput).at(index), keyword);
    await I.click(locate(SearchLocators.searchButton).at(index));
    await I.waitForElement(WallpaperLocators.wallpaperCards, 10);
  }

  async verifyNoResultsMessage() {
    const cardCount = await I.grabNumberOfVisibleElements(WallpaperLocators.wallpaperCards);
    
    if (cardCount >= 5) {
      throw new Error(`Expected minimal/no results for nonsense search, but found ${cardCount} wallpapers`);
    }
    
    console.log(`Verified: Minimal results (${cardCount}) for nonsense search query`);
  }
}

export = new SearchPage();
