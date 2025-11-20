export const LoginLocators = {
  continueWithFacebookButton: 'button[data-hook="za-login-facebook"]',
  continueWithGoogleButton: 'button[data-hook="za-login-google"]',
  continueWithAppleButton: 'button[data-hook="za-login-apple"]',
  continueWithEmailButton: 'button[data-hook="za-login-email"]',
  emailInput: 'input[data-hook="form-field-email-input"]',
  continueWithPasswordButton: 'button:has-text("Continue with password")',
  passwordInput: 'input[data-hook="form-field-password-input"]',
  continueButton: 'button[data-hook="za-submit"]:has-text("Continue")'
} as const;
