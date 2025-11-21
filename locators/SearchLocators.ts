// Search locators - same elements exist in both navigation bar and main search
// Use locate().at(1) for navigation bar, locate().at(2) for main search
export const SearchLocators = {
  browseNowLink: 'a[href="/ringtones-and-wallpapers"]',
  
  // These locators return BOTH nav and main search elements
  categoryDropdown: '.Search_search-category__0XoQm button',
  searchInput: 'input[name="search"]',
  searchButton: 'button[type="submit"]',
  
  // Wallpapers option in category dropdown
  wallpapersOption: {xpath: '//div[@role="menuitemradio"]//label[text()="Wallpapers"]'},
  
  noResultsMessage: 'text=/no results|nothing found|0 results/i',
  noResultsHeading: 'h1, h2, h3',
} as const;
