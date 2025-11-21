@download
Feature: Wallpaper Download
  As a user
  I want to download wallpapers
  So that I can use them on my device

  Background:
    Given I am on the homepage
    And I accept cookie consent if present
    When I click on "Browse Now" button on navigation bar

  @download @free
  Scenario: Download free wallpaper from wallpapers page without login
    When I click on Wallpapers tab
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
    Then I verify the file "nature-wallpaper.jpg" is downloaded
    And I verify the file has valid size
    And I verify the file is a valid image format
    And I verify the image has valid dimensions
    And I verify the filename is safe
    And I delete the downloaded file "nature-wallpaper.jpg"

  @download @free @login
  Scenario: Download free wallpaper from wallpapers link after logging in
    When I click on Sign in button
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
    Then I verify the file "free-logged-in.jpg" is downloaded
    And I verify the file has valid size
    And I verify the file is a valid image format
    And I delete the downloaded file "free-logged-in.jpg"

  @download @paid @login
  Scenario: Verify unlock modal appears for paid wallpaper when not logged in initially
    When I click on Wallpapers tab
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
    And I prepare to save download as "paid-with-login-modal.jpg"
    When I click the download button
    Then I see the unlock modal with ads left
    # And I watch the ad to unlock paid content
    # Then I verify the file "paid-with-login-modal.jpg" is downloaded
    # And I delete the downloaded file "paid-with-login-modal.jpg"

  @download @paid @ad-watching @debug
  Scenario: Verify watch ad button appears for paid wallpaper when already logged in
    When I click on Sign in button
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
    And I watch the ad to unlock paid content
    # Then I verify the file "paid-ad-watching.jpg" is downloaded
    # And I verify the file has valid size
    # And I verify the file is a valid image format
    # And I delete the downloaded file "paid-ad-watching.jpg"

  @download @free @search
  Scenario Outline: Search and download free wallpaper using navigation search bar
    When I select Wallpapers from category dropdown in "navigation search bar"
    And I search for keyword "<keyword>" in "navigation search bar"
    When I click on the price dropdown
    Then I see the price dropdown
    When I select free only
    And I click away from the dropdown
    Then I see the price chip "Free"
    When I click the first wallpaper
    And I close any ad if present
    And I see the download button
    When I click the download button and save as "search-<keyword>-free.jpg"
    And I wait for the ad popup to disappear
    Then I verify the file "search-<keyword>-free.jpg" is downloaded
    And I verify the file has valid size
    And I verify the file is a valid image format
    And I verify the image has valid dimensions
    And I verify the filename is safe
    And I delete the downloaded file "search-<keyword>-free.jpg"
    
    Examples:
      | keyword   |
      | flowers   |
      | landscape |

  @download @paid @search @login @ad-watching
  Scenario Outline: Search for paid wallpaper using main search bar and verify unlock modal with login
    When I select Wallpapers from category dropdown in "main search bar"
    And I search for keyword "<keyword>" in "main search bar"
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
    And I prepare to save download as "search-<keyword>-paid.jpg"
    When I click the download button
    Then I see the unlock modal with ads left
    # And I watch the ad to unlock paid content
    # Then I verify the file "search-<keyword>-paid.jpg" is downloaded
    # And I delete the downloaded file "search-<keyword>-paid.jpg"
    
    Examples:
      | keyword  |
      | city     |
      | abstract |
