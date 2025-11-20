import * as path from 'path';
import { DownloadLocators } from '../locators/DownloadLocators';
import { WallpaperLocators } from '../locators/WallpaperLocators';

const { I } = inject();

class DownloadPage {

  async navigateToSearch(category: string) {
    await I.amOnPage(`/find/wallpapers/${category}`);
    await I.waitForElement(WallpaperLocators.pageHeading, 10);
    await I.waitForElement(WallpaperLocators.wallpaperCards, 10);
  }
  
  async waitForDownloadButton() {
    await I.waitForElement(DownloadLocators.downloadButton, 10);
  }
  
  async prepareDownloadHandler(filename: string) {
    await I.handleDownloads(filename);
  }

  async clickDownloadButtonOnly() {
    await I.click(DownloadLocators.downloadButton);
  }

  async clickDownloadButton(filename: string) {
    await I.handleDownloads(filename);
    await I.click(DownloadLocators.downloadButton);
  }
  
  async waitForAdPopupToDisappear() {
    await I.waitForInvisible('[role="dialog"]', 20);
  }
  
  getDownloadsDir() {
    return path.join(process.cwd(), 'output');
  }

}

export = new DownloadPage();
