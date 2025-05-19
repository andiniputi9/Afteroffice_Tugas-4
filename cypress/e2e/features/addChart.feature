Feature: Add Cart

Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user enters valid username and password

Scenario: Add item to cart successfully
    Given the user is logged in
    And the user enters valid username and password
    When the user adds a product to the cart
    Then the cart should display the correct product count

  Scenario: Attempt to checkout with an empty cart
    Given the user is logged in
    And the user enters valid username and password
    When the user navigates to the cart without adding products
    Then an error message should be displayed
