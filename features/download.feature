@download
Feature: Wallpaper Download Functionality
  As a user
  I want to download free wallpapers
  So that I can use them on my device

  Background:
    Given I am on the wallpapers page for "nature"
    And I accept cookie consent if present

  @comprehensive-verification
  Scenario: Successfully download a free wallpaper with full verification
    When I find and click a free wallpaper
    And  I close any ad if present
    And I see the download button
    When I click the download button and save as "nature-wallpaper.jpg"
    And I wait for the ad popup to disappear
    Then I verify the file is downloaded
    And I verify the file has valid size
    And I verify the file is a valid image format
    And I verify the image has valid dimensions
    And I verify the filename is safe
