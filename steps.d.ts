/// <reference types='codeceptjs' />
type wallpaperPage = typeof import('./pages/WallpaperPage');
type cookiePage = typeof import('./pages/CookiePage');
type downloadPage = typeof import('./pages/DownloadPage');
type verificationPage = typeof import('./pages/VerificationPage');
type adPage = typeof import('./pages/AdPage');
type searchPage = typeof import('./pages/SearchPage');
type navigationPage = typeof import('./pages/NavigationPage');
type premiumPage = typeof import('./pages/PremiumPage');
type loginPage = typeof import('./pages/LoginPage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, wallpaperPage: wallpaperPage, cookiePage: cookiePage, downloadPage: downloadPage, verificationPage: verificationPage, adPage: adPage, searchPage: searchPage, navigationPage: navigationPage, premiumPage: premiumPage, loginPage: loginPage }
  interface Methods extends Playwright, FileSystem {}
  interface I extends WithTranslation<Methods> {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}

