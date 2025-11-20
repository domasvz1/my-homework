@download
Feature: Wallpaper Download
  As a user
  I want to download wallpapers
  So that I can use them on my device

  Background:
    Given I am on the homepage
    And I accept cookie consent if present

  @download @free
  Scenario: Download free wallpaper
    When I click on "Browse Now" button on navigation bar
    And I click on Wallpapers tab
    When I click on the price dropdown
    Then I see the price dropdown
    When I select free only
    And I click away from the dropdown
    Then I see the price chip "Free"
    When I click the first wallpaper
    And I close any ad if present
    And I see the download button
    When I click the download button and save as "nature-wallpaper.jpg"
    And I wait for the ad popup to disappear
    Then I verify the file is downloaded
    And I verify the file has valid size
    And I verify the file is a valid image format
    And I verify the image has valid dimensions
    And I verify the filename is safe

  @download @free @login
  Scenario: Download free wallpaper when logged in
    When I click on "Browse Now" button on navigation bar
    And I click on Sign in button
    And I login with credentials from environment
    And I click on Wallpapers link
    When I click on the price dropdown
    Then I see the price dropdown
    When I select free only
    And I click away from the dropdown
    Then I see the price chip "Free"
    When I click the first wallpaper
    And I close any ad if present
    And I see the download button
    When I click the download button and save as "free-logged-in.jpg"
    And I wait for the ad popup to disappear
    Then I verify the file is downloaded
    And I verify the file has valid size
    And I verify the file is a valid image format

  @download @premium @login
  Scenario: Download premium wallpaper with login flow
    When I click on "Browse Now" button on navigation bar
    And I click on Wallpapers tab
    When I click on the price dropdown
    Then I see the price dropdown
    When I select paid only
    And I click away from the dropdown
    Then I see the price chip "Paid"
    When I click the first wallpaper
    And I close any ad if present
    And I see the download button
    When I click the download button
    Then I see the unlock modal
    When I click on login and watch ad button
    And I login with credentials from environment
    And I see the download button
    And I prepare to save download as "premium-with-login-modal.jpg"
    When I click the download button
    Then I verify the file is downloaded

  @download @premium @ad-watching
  Scenario: Download premium wallpaper by watching ad
    When I click on "Browse Now" button on navigation bar
    And I click on Sign in button
    And I login with credentials from environment
    And I click on Wallpapers link
    When I click on the price dropdown
    Then I see the price dropdown
    When I select paid only
    And I click away from the dropdown
    Then I see the price chip "Paid"
    When I click the first wallpaper
    And I close any ad if present
    And I see the download button
    And I prepare to save download as "paid-ad-watching.jpg"
    When I click the download button
    And I watch the ad to unlock premium content
    Then I verify the file is downloaded
    And I verify the file has valid size
    And I verify the file is a valid image format
