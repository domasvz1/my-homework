export const TagLocators = {
  // Tag dropdown chip button (same pattern as category)
  tagDropdownChip: 'button:has-text("Tag")',
  
  // Tag dropdown container
  tagDropdown: '[role="listbox"]',
  
  // Tag option (any)
  tagOption: '[role="option"]',
  
  // First tag option in the dropdown
  firstTagOption: '[role="option"]:first-child',
  
  // Second tag option (skip search input)
  secondTagOption: '[role="option"]:nth-child(2)',
  
  // Get specific tag chip by text
  getTagChip: (tagName: string) =>
    `button[data-size="medium"]:has-text("${tagName}")`,
  
  // Any tag chip (selected filter chips)
  anyTagChip: 'button[data-size="medium"][data-appearance="primary"]',
} as const;
