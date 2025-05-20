Feature: Checkout
  Scenario: Successful checkout with valid information
    Given the user is logged in
    And the user enters valid username and password
    And the user adds a product to the cart
    When the user navigates to the cart after adding products
    And the user clicks on the checkout button
    And the user enters valid shipping information
    Then the order should be successfully completed

  Scenario: Unsuccessful checkout with missing information
    Given the user is logged in
    And the user enters valid username and password
    And the user adds a product to the cart
    When the user navigates to the cart after adding products
    And the user clicks on the checkout button
    And the user leaves required fields empty
    Then an error message should be displayed
