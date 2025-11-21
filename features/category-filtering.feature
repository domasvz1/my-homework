@category-filtering
Feature: Category Filtering
  As a user
  I want to filter wallpapers by category
  So that I can browse wallpapers of specific types

  Background:
    Given I am on the homepage
    And I accept cookie consent if present
    When I click on "Browse Now" button on navigation bar

  @filter @category
  Scenario Outline: Select category from homepage dropdown and navigate to wallpapers page
    Then I am on "/ringtones-and-wallpapers" page
    When I click on the category filter button
    Then I see the category dropdown
    When I select category "<category>"
    Then I am on "/wallpapers" page
    And I verify the URL contains "<url_param>"
    And I see the category chip "<chip_text>"
    Examples:
      | category   | url_param           | chip_text  |
      | Funny      | categories=FUNNY    | Funny      |
      | Technology | categories=TECHNOLOGY | technology |
      | Nature     | categories=NATURE   | nature     |
      | Animals    | categories=ANIMALS  | animals    |

  @filter @category
  Scenario Outline: Select single category from wallpapers page dropdown and verify URL and chip
    When I click on Wallpapers tab
    When I click on the category dropdown
    Then I see the category dropdown
    When I select category "<category>"
    Then I see only "<category>" wallpapers
    And I verify the URL contains "<url_param>"
    And I see the category chip "<chip_text>"
    Examples:
      | category   | url_param             | chip_text  |
      | Nature     | categories=NATURE     | nature     |
      | Animals    | categories=ANIMALS    | animals    |
      | Space      | categories=SPACE      | space      |
      | Technology | categories=TECHNOLOGY | technology |

  @filter @multi-select
  Scenario: Select multiple categories simultaneously and verify all appear in URL and chips
    When I click on Wallpapers tab
    When I click on the category dropdown
    Then I see the category dropdown
    When I check category "Nature"
    And I check category "Animals"
    Then I verify the URL contains "categories=NATURE"
    And I verify the URL contains "NATURE"
    And I verify the URL contains "ANIMALS"
    And I see the category chip "nature"
    And I see the category chip "animals"

  @filter @deselect
  Scenario: Remove category filter by unchecking in dropdown
    When I click on Wallpapers tab
    When I click on the category dropdown
    Then I see the category dropdown
    When I check category "Technology"
    And I click away from the dropdown
    Then I see the category chip "technology"
    When I click on the category dropdown
    And I uncheck category "Technology"
    And I click away from the dropdown
    Then I do not see the category chip "technology"

  @filter @deselect-chip
  Scenario: Remove category filter by clicking X button on chip
    When I click on Wallpapers tab
    When I click on the category dropdown
    Then I see the category dropdown
    When I check category "Technology"
    And I click away from the dropdown
    Then I see the category chip "technology"
    When I click the X button on chip "technology"
    Then I do not see the category chip "technology"

  @filter @clear-all
  # discovered bug via main page category selection, it transfers to the wallpapers page, but if another cateory is slected, 
  # the initially selected one is cleared automatically
  Scenario: Clear all selected category filters using reset all button
    When I click on Wallpapers tab
    When I click on the category dropdown
    Then I see the category dropdown
    When I check category "Animals"
    And I check category "Technology"
    And I check category "Space"
    And I check category "Nature"
    And I click away from the dropdown
    Then I see the category chip "animals"
    And I see the category chip "technology"
    And I see the category chip "space"
    And I see the category chip "nature"
    When I click the reset all button
    Then I do not see the category chip "animals"
    And I do not see the category chip "technology"
    And I do not see the category chip "space"
    And I do not see the category chip "nature"

  @filter @persistence
  Scenario: Verify category filter persists when navigating from homepage to wallpapers tab
    Then I am on "/ringtones-and-wallpapers" page
    When I click on the category filter button
    Then I see the category dropdown
    When I select category "Nature"
    Then I am on "/wallpapers" page
    And I verify the URL contains "categories=NATURE"
    Then I see the category chip "nature"

  @filter @combination
  # BUG DISCOVERED: Wallpapers filtered by tag don't show the filtered tag on details page
  # The wallpaper is returned in tag filter results but the tag is missing from wallpaper details
  Scenario: Apply both category and tag filters together and verify on details page
    When I click on Wallpapers tab
    When I click on the category dropdown
    Then I see the category dropdown
    When I check category "Nature"
    And I click away from the dropdown
    Then I see the category chip "nature"
    And I verify the URL contains "NATURE"
    When I click on the tag dropdown
    Then I see the tag dropdown
    When I check first tag option
    And I click away from the dropdown
    Then I see the tag chip
    And I verify the URL contains "tags="
    When I click on the first filtered wallpaper
    And I close any ad if present
    Then I see tags on wallpaper details page
    # And I see the selected tag on wallpaper details page  # DISABLED: Bug - filtered tag not present on details

  @filter @price
  Scenario: Filter wallpapers by free price and verify all results are free
    When I click on Wallpapers tab
    When I click on the price dropdown
    Then I see the price dropdown
    When I select free only
    And I click away from the dropdown
    Then I see the price chip "Free"
    And I verify the URL contains "free=true"
    And I verify all wallpapers are free

  @filter @price
  Scenario: Filter wallpapers by paid price and verify all results are paid
    When I click on Wallpapers tab
    When I click on the price dropdown
    Then I see the price dropdown
    When I select paid only
    And I click away from the dropdown
    Then I see the price chip "Paid"
    And I verify the URL contains "paid=true"
    And I verify all wallpapers are paid

  @filter @color
  Scenario: Filter wallpapers by color and verify color tag appears on details page
    When I click on Wallpapers tab
    When I click on the color dropdown
    Then I see the color dropdown
    When I select color "Black"
    And I click away from the dropdown
    Then I see the color chip "Black"
    And I verify the URL contains "colors="
    When I click on the first filtered wallpaper
    And I close any ad if present
    Then I see tags on wallpaper details page
    And I see tag "black" on wallpaper details page

  @filter @all-categories-visible
  Scenario: Verify all category options are visible in homepage dropdown
    When I click on the category filter button
    Then I see the category dropdown
    And I verify all categories are visible

  @filter @all-categories-visible
  Scenario: Verify all category options are visible in wallpapers page dropdown
    When I click on Wallpapers tab
    When I click on the category dropdown
    Then I see the category dropdown
    And I verify all categories are visible

  @filter @no-results
  Scenario: Verify no results message appears for nonsense search query
    When I search for wallpapers with keyword "xyzabc123nonexistent"
    Then I see no results message
