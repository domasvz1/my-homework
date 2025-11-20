export const NavigationLocators = {
  getNavigationLink: (buttonText: string) => `a:has-text("${buttonText}")`,
  browseNowLink: 'a[href="/ringtones-and-wallpapers"]',
  wallpapersTab: 'a[href="/wallpapers"]',
  ringtonesTab: 'a[href="/ringtones"]',
  searchInput: 'input#search',
  searchButton: 'button[type="submit"]',
  uploadButton: 'button:has-text("Upload")',
  userMenuButton: '[title="Open user menu"]',
  signInButton: 'button:has-text("Sign in")',
  wallpapersLink: 'a[data-appearance="secondary"][href="/wallpapers"]'
} as const;
