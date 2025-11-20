export const WallpaperLocators = {
  wallpaperCards: 'a.A_link__OxrAl[href^="/wallpapers/"]',
  premiumBadge: '.Badge_badge-bg__11Zb9',
  premiumIcon: 'span[style*="premium.28098bbd.png"]',
  downloadButton: 'button:has-text("Download")',
  pageHeading: '.H_heading__FfJtN',
  
  // XPath locators
  getCardXPath: (index: number) => `(//a[@href and starts-with(@href, '/wallpapers/')])[${index}]`,
  getPremiumIconXPath: (cardXPath: string) => `${cardXPath}//span[contains(@style, 'premium.28098bbd.png')]`
} as const;
