export const WallpaperDetailsLocators = {
  // Tags container on wallpaper details page
  tagsContainer: '.flex.flex-wrap.gap-8',
  
  // Individual tag chips
  tagChips: 'span[data-size="medium"][data-appearance="secondary"]',
  
  // Specific tag by text - simple locator
  getTagChip: (tagName: string) =>
    `span:has-text("${tagName}")`,
  
  // Any tag chip link
  tagLinks: 'a[href^="/wallpapers?keyword="]',
  
  // Wallpaper cards (for clicking first wallpaper)
  wallpaperCards: 'a[href^="/wallpapers/"]',
  
  // Filter chips on wallpaper pages
  filterChips: 'button[data-size="medium"][data-appearance="primary"]',
  
  // Color chips with detailed class
  colorChipsDetailed: '.Chip_chip__4E4jb[data-size="medium"][data-appearance="primary"]',
} as const;
