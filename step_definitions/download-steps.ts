const { cookiePage, downloadPage, verificationPage } = inject();

Given('I am on the wallpapers page for {string}', async (category: string) => {
  await downloadPage.navigateToSearch(category);
});

Given('I accept cookie consent if present', async () => {
  await cookiePage.acceptCookiesIfPresent();
});

Then('I see the download button', async () => {
  await downloadPage.waitForDownloadButton();
});

When('I prepare to save download as {string}', async (filename: string) => {
  await downloadPage.prepareDownloadHandler(filename);
});

When('I click the download button', async () => {
  await downloadPage.clickDownloadButton();
});

When('I click the download button and save as {string}', async (filename: string) => {
  await downloadPage.clickDownloadButtonAndHandleDownload(filename);
});

When('I wait for the ad popup to disappear', async () => {
  await downloadPage.waitForAdPopupToDisappear();
});

Then('I verify the file is downloaded', async () => {
  const downloadsDir = downloadPage.getDownloadsDir();
  await verificationPage.verifyFileDownloaded(downloadsDir);
});

Then('I verify the file {string} is downloaded', async (filename: string) => {
  const downloadsDir = downloadPage.getDownloadsDir();
  await verificationPage.verifySpecificFileDownloaded(downloadsDir, filename);
});

Then('I delete the downloaded file {string}', async (filename: string) => {
  const downloadsDir = downloadPage.getDownloadsDir();
  await verificationPage.deleteDownloadedFile(downloadsDir, filename);
});

Then('I verify the file has valid size', async () => {
  await verificationPage.verifyFileSize();
});

Then('I verify the file is a valid image format', async () => {
  await verificationPage.verifyImageFormat();
});

Then('I verify the image has valid dimensions', async () => {
  await verificationPage.verifyImageDimensions();
});

Then('I verify the filename is safe', async () => {
  await verificationPage.verifyFilenameSafety();
});

Then('the downloaded image format should be one of {string}', async (formats: string) => {
  await verificationPage.verifyFormatInList(formats);
});

Then('the downloaded image should be decodable', async () => {
  await verificationPage.verifyImageDecodable();
});

Then('the downloaded image dimensions should be at least {int}x{int}', async (minWidth: number, minHeight: number) => {
  await verificationPage.verifyMinimumDimensions(minWidth, minHeight);
});
