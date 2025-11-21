export const PremiumLocators = {
  unlockModal: '[class*="Modal_modal-content"]',
  unlockModalHeading: 'div:has-text("Unlock and Support the Artist")',
  loginAndWatchAdButton: 'button:has-text("Login & Watch Ad")',
  watchAdButton: 'button:has-text("Watch Ad")',
  adsLeftText: 'span:has-text("ads left today")',
  useCreditsButton: 'button:has-text("Use Credits")',
} as const;
