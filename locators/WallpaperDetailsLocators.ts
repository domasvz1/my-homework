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
} as const;
