export const ColorLocators = {
  // Color dropdown chip button
  colorDropdownChip: 'button:has-text("Color")',
  
  // Color dropdown container
  colorDropdown: '[role="option"]',
  
  // First color option
  firstColorOption: '[role="option"]:first-child',
  
  // Color chip
  anyColorChip: 'button[data-size="medium"][data-appearance="primary"]',
} as const;
