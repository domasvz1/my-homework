import { setHeadlessWhen, setWindowSize } from '@codeceptjs/configure';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// set window size
setWindowSize(1920, 1080);

export const config = {
  tests: './features/**/*.feature',
  output: './output',
  helpers: {
    Playwright: {
      url: process.env.BASE_URL,
      show: true,
      browser: 'chromium',
      windowSize: '1920x1080',
      waitForTimeout: 10000,
      waitForAction: 1000,
      timeout: 30000,
      chromium: {
        args: ['--disable-blink-features=AutomationControlled']
      },
      contextOptions: {
        acceptDownloads: true
      }
    },
    FileSystem: {}
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: [
      './step_definitions/download-steps.ts',
      './step_definitions/ad-steps.ts',
      './step_definitions/wallpaper-steps.ts',
      './step_definitions/navigation-steps.ts',
      './step_definitions/premium-steps.ts',
      './step_definitions/login-steps.ts',
      './step_definitions/category-steps.ts',
      './step_definitions/tag-steps.ts',
      './step_definitions/price-steps.ts',
      './step_definitions/color-steps.ts',
      './step_definitions/wallpaper-details-steps.ts',
      './step_definitions/wait-steps.ts'
    ]
  },
  include: {
    cookiePage: './pages/CookiePage.ts',
    downloadPage: './pages/DownloadPage.ts',
    verificationPage: './pages/VerificationPage.ts',
    adPage: './pages/AdPage.ts',
    searchPage: './pages/SearchPage.ts',
    navigationPage: './pages/NavigationPage.ts',
    premiumPage: './pages/PremiumPage.ts',
    loginPage: './pages/LoginPage.ts',
    categoryPage: './pages/CategoryPage.ts',
    tagPage: './pages/TagPage.ts',
    pricePage: './pages/PricePage.ts',
    colorPage: './pages/ColorPage.ts',
    wallpaperDetailsPage: './pages/WallpaperDetailsPage.ts',
    waitHelper: './tests/helpers/WaitHelper.ts'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    tryTo: {
      enabled: true
    }
  },
  require: ['ts-node/register'],
  name: 'wallpaper-portal-tests',
  translation: 'en-US'
};
