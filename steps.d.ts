/// <reference types='codeceptjs' />
type cookiePage = typeof import('./pages/CookiePage');
type downloadPage = typeof import('./pages/DownloadPage');
type verificationPage = typeof import('./pages/VerificationPage');
type adPage = typeof import('./pages/AdPage');
type searchPage = typeof import('./pages/SearchPage');
type navigationPage = typeof import('./pages/NavigationPage');
type premiumPage = typeof import('./pages/PremiumPage');
type loginPage = typeof import('./pages/LoginPage');
type categoryPage = typeof import('./pages/CategoryPage');
type tagPage = typeof import('./pages/TagPage');
type pricePage = typeof import('./pages/PricePage');
type colorPage = typeof import('./pages/ColorPage');
type wallpaperDetailsPage = typeof import('./pages/WallpaperDetailsPage');
type waitHelper = typeof import('./tests/helpers/WaitHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, cookiePage: cookiePage, downloadPage: downloadPage, verificationPage: verificationPage, adPage: adPage, searchPage: searchPage, navigationPage: navigationPage, premiumPage: premiumPage, loginPage: loginPage, categoryPage: categoryPage, tagPage: tagPage, pricePage: pricePage, colorPage: colorPage, wallpaperDetailsPage: wallpaperDetailsPage, waitHelper: waitHelper }
  interface Methods extends Playwright, FileSystem {}
  interface I extends WithTranslation<Methods> {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}

