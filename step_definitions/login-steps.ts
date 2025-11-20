const { loginPage } = inject();

When('I login with credentials from environment', async () => {
  const email = process.env.SECRET_EMAIL || '';
  const password = process.env.SECRET_PASSWORD || '';
  await loginPage.loginWithCredentials(email, password);
});
