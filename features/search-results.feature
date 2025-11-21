@search-results
Feature: Search Results
  As a user
  I want search results to be relevant
  So that I can easily find wallpapers matching my search term

  Background:
    Given I am on the homepage
    And I accept cookie consent if present
    When I click on Browse Now button

  @search @quality
  Scenario Outline: Verify wallpapers from navigation search bar contain search keyword as tag
    When I select Wallpapers from category dropdown in "navigation search bar"
    And I search for keyword "<keyword>" in "navigation search bar"
    And I click the first wallpaper
    And I close any ad if present
    Then I see tags on wallpaper details page
    And I see tag "<keyword>" on wallpaper details page
    
    Examples:
      | keyword |
      | sunset  |
      | nature  |
      | ocean   |
      | cars    |

  @search @quality
  # Note: "animals" keyword is potentially bugged ? - search returns wallpapers without "animals" tag
  Scenario Outline: Verify wallpapers from main search bar contain search keyword as tag
    When I select Wallpapers from category dropdown in "main search bar"
    And I search for keyword "<keyword>" in "main search bar"
    And I click the first wallpaper
    And I close any ad if present
    Then I see tags on wallpaper details page
    And I see tag "<keyword>" on wallpaper details page
    
    Examples:
      | keyword    |
      | space      |
      | forest     |
      | beach      |
      | mountains  |
      # | animals  | # Minor possible issue: Some search returns wallpapers without "animals" tag
