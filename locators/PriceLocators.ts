export const PriceLocators = {
  // Price dropdown chip button
  priceDropdownChip: 'button:has-text("Price")',
  
  // Price dropdown container
  priceDropdown: '[role="option"]',
  
  // Free option
  freeOption: 'div[role="option"]:has-text("Free")',
  
  // Paid option
  paidOption: 'div[role="option"]:has-text("Paid")',
  
  // Price chip
  getPriceChip: (priceType: string) =>
    `button[data-size="medium"]:has-text("${priceType}")`,
} as const;
