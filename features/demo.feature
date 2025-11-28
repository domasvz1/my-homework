@demo
Feature: Demo Tests
  Demonstration of test reporting with videos and screenshots
  
  Background:
    Given I am on the homepage
    And I accept cookie consent if present
  
  @demo @passing @debug
  Scenario: Successful category selection demonstrates video recording
    When I click on "Browse Now" button on navigation bar
    And I click on Wallpapers tab
    And I click on the category dropdown
    Then I see the category dropdown
    When I select category "Nature"
    And I click away from the dropdown
    Then I see the category chip "nature"
  
  @demo @passing @debug  
  Scenario: Successful price filter demonstrates clean test execution
    When I click on "Browse Now" button on navigation bar
    And I click on Wallpapers tab
    And I click on the price dropdown
    Then I see the price dropdown
    When I select free only
    And I click away from the dropdown
    Then I see the price chip "Free"
  
  @demo @failing @debug
  Scenario: Intentional failure demonstrates screenshot capture on error
    When I click on "Browse Now" button on navigation bar
    And I click on Wallpapers tab
    When I click on "NonExistentButton" button on navigation bar
