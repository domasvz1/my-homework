import { WallpaperLocators } from '../locators/WallpaperLocators';
const { I } = inject();

class WallpaperPage {
  async clickFirstFreeWallpaper() {
    await I.waitForElement(WallpaperLocators.wallpaperCards, 10);
    
    const totalCards = await I.grabNumberOfVisibleElements(WallpaperLocators.wallpaperCards);
    
    for (let i = 1; i <= totalCards; i++) {
      const cardXPath = WallpaperLocators.getCardXPath(i);
      const premiumIconXPath = WallpaperLocators.getPremiumIconXPath(cardXPath);
      
      const hasPremiumIcon = await tryTo(() => I.seeElement({xpath: premiumIconXPath}));
      
      if (!hasPremiumIcon) {
        await I.click({xpath: cardXPath});
        return;
      }
    }
    
    throw new Error('No free wallpapers found - all have premium icons');
  }
  
  async clickFirstPremiumWallpaper() {
    await I.waitForElement(WallpaperLocators.wallpaperCards, 10);
    
    const totalCards = await I.grabNumberOfVisibleElements(WallpaperLocators.wallpaperCards);
    
    for (let i = 1; i <= totalCards; i++) {
      const cardXPath = WallpaperLocators.getCardXPath(i);
      const premiumIconXPath = WallpaperLocators.getPremiumIconXPath(cardXPath);
      
      const hasPremiumIcon = await tryTo(() => I.seeElement({xpath: premiumIconXPath}));
      
      if (hasPremiumIcon) {
        await I.click({xpath: cardXPath});
        return;
      }
    }
    
    throw new Error('No premium wallpapers found');
  }
  
  async clickDownload() {
    await I.waitForElement(WallpaperLocators.downloadButton, 10);
    await I.click(WallpaperLocators.downloadButton);
  }
}

export = new WallpaperPage();
