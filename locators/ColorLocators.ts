export const ColorLocators = {
  // Color dropdown chip button
  colorDropdownChip: 'button:has-text("Color")',
  
  // Color dropdown container
  colorDropdown: '[role="option"]',
  
  // First color option
  firstColorOption: '[role="option"]:first-child',
  
  // Get specific color option
  getColorOption: (colorName: string) =>
    `div[role="option"]:has-text("${colorName}")`,
  
  // Get specific color chip
  getColorChip: (colorName: string) =>
    `button[data-size="medium"]:has-text("${colorName}")`,
  
  // Any color chip
  anyColorChip: 'button[data-size="medium"][data-appearance="primary"]',
  
  // Color chip with class (for details page)
  colorChipDetailed: '.Chip_chip__4E4jb[data-size="medium"][data-appearance="primary"]',
} as const;
