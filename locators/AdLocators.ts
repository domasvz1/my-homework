export const AdLocators = {
  dismissButton: '#dismiss-button',
  closeButton: '.close-button',
  closeText: 'button >> text=/close/i',
  closeAriaLabel: '[aria-label="Close ad"]',
  anyCloseButton: 'button:has-text("Close"), div:has-text("Close")[role="button"]'
} as const;
