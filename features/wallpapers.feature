@wallpapers
Feature: Wallpaper Search Functionality
  As a user
  I want to search for wallpapers by keyword
  So that I can find specific wallpapers I'm interested in

  Background:
    Given I am on the homepage
    And I accept cookie consent if present

  @search-and-download
  Scenario: Search for wallpapers by keyword and download
    When I click on Browse Now button
    And I search for wallpapers with keyword "sunset"
    And I find and click a free wallpaper
    And I close any ad if present
    And I see the download button
    When I click the download button and save as "sunset-wallpaper.jpg"
    And I wait for the ad popup to disappear
    Then I verify the file is downloaded
    And I verify the file has valid size
    And I verify the file is a valid image format

  # WIP: This test downloads the file twice due to handleDownloads() capturing background downloads
  # when the modal appears. Needs refactoring to separate modal verification from actual download.
  @premium-wallpaper-login-flow
  @debug
  Scenario: Login to access premium wallpaper download option
    When I click on Browse Now button
    And I search for wallpapers with keyword "sunset"
    And I find and click a premium wallpaper
    And I close any ad if present
    And I see the download button
    When I click the download button and save as "premium-sunset.jpg"
    Then I see the unlock modal
    When I click on login and watch ad button
    And I login with credentials from environment
    And I see the download button
    When I click the download button and save as "premium-sunset-logged-in.jpg"
    Then I verify the file is downloaded

  # WIP: This test needs login setup before running (e.g., in Before hook)
  # Currently assumes user must watch ad when logged in, but actual behavior may be:
  # - Direct download without ad (if user has premium subscription)
  # - Watch ad flow (if user is logged in but not premium)
  # TODO: Add login in Before() hook and verify which modal/button appears
  # TODO: Conditionally handle "Watch Ad" vs direct download based on account type
  @premium-wallpaper-logged-in
  Scenario: Download premium wallpaper by watching ad when logged in
    When I click on Browse Now button
    And I search for wallpapers with keyword "sunset"
    And I find and click a premium wallpaper
    And I close any ad if present
    And I see the download button
    When I click the download button and save as "premium-sunset.jpg"
    And I watch the ad to unlock premium content
    Then I verify the file is downloaded
    And I verify the file has valid size
    And I verify the file is a valid image format
