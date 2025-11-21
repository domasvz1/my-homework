/// <reference path="./steps.d.ts" />

declare const I: CodeceptJS.I;

declare function inject(): {
  I: CodeceptJS.I;
  cookiePage: typeof import('./pages/CookiePage');
  downloadPage: typeof import('./pages/DownloadPage');
  verificationPage: typeof import('./pages/VerificationPage');
  adPage: typeof import('./pages/AdPage');
  searchPage: typeof import('./pages/SearchPage');
  navigationPage: typeof import('./pages/NavigationPage');
  premiumPage: typeof import('./pages/PremiumPage');
  loginPage: typeof import('./pages/LoginPage');
  categoryPage: typeof import('./pages/CategoryPage');
  tagPage: typeof import('./pages/TagPage');
  pricePage: typeof import('./pages/PricePage');
  colorPage: typeof import('./pages/ColorPage');
  wallpaperDetailsPage: typeof import('./pages/WallpaperDetailsPage');
  waitHelper: typeof import('./tests/helpers/WaitHelper');
};

declare function locate(selector: string): CodeceptJS.LocatorOrString;
declare function tryTo(fn: () => void | Promise<void>): Promise<boolean>;
declare function Given(title: string, callback: Function): void;
declare function When(title: string, callback: Function): void;
declare function Then(title: string, callback: Function): void;
