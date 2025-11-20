export const CategoryLocators = {
  // Category button on /ringtones-and-wallpapers page (hamburger icon)
  categoriesButton: 'button:has-text("Categories")',
  
  // Category dropdown chip on /wallpapers page (pill-shaped)
  categoryDropdownChip: 'button[aria-haspopup="dialog"]:has-text("Category")',
  
  // Category dropdown container
  categoryDropdown: '[role="option"]',
  
  // Individual category checkboxes (by label text)
  getCategoryCheckbox: (categoryName: string) => 
    `div[role="option"]:has-text("${categoryName}") span.Checkbox_input__ZoALC`,
  
  getCategoryOption: (categoryName: string) =>
    `div[role="option"]:has-text("${categoryName}")`,

  // Chip with category name (for verification)
  getCategoryChip: (categoryName: string) =>
    `button[data-size="medium"]:has-text("${categoryName}")`,

  // Chip button itself
  getChipRemoveButton: (categoryName: string) => {
    const capitalized = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
    return `//button[@data-size = 'medium'][@data-appearance = 'primary'][contains(., '${capitalized}')]`;
  },

  // Reset All button
  resetAllButton: 'button[data-size="medium"][data-appearance="primary"]:has-text("Reset All")',
  
  // All available categories
  categories: {
    funny: 'Funny',
    technology: 'Technology',
    entertainment: 'Entertainment',
    music: 'Music',
    nature: 'Nature',
    drawings: 'Drawings',
    sports: 'Sports',
    brands: 'Brands',
    carsAndVehicles: 'Cars & Vehicles',
    other: 'Other',
    animals: 'Animals',
    patterns: 'Patterns',
    bollywood: 'Bollywood',
    anime: 'Anime',
    games: 'Games',
    holidays: 'Holidays',
    designs: 'Designs',
    love: 'Love',
    newsPolitics: 'News & Politics',
    people: 'People',
    sayings: 'Sayings',
    spiritual: 'Spiritual',
    space: 'Space',
    comics: 'Comics'
  }
} as const;
