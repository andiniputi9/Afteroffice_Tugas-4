const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

const baseUrl = 'https://www.saucedemo.com/';

Given("the user is logged in", () => {
  cy.visit(baseUrl);
});

Given('the user enters valid username and password', () => {
  cy.get('[data-test=username]').type('standard_user');
  cy.get('[data-test=password]').type('secret_sauce');
  cy.get('[data-test=login-button]').click();
});

Given('the user adds a product to the cart', () => {
  cy.get('.inventory_item').first().within(() => {
    cy.contains('Add to cart').click();

  });
});

When('the user navigates to the cart after adding products', () => {
  cy.get('.shopping_cart_link').click();
});

When('the user clicks on the checkout button', () => {
  cy.get('#checkout').click();
}
);


When('the user enters valid shipping information', () => {
  cy.get('[data-test=firstName]').type('John');
  cy.get('[data-test=lastName]').type('Doe');
  cy.get('[data-test=postalCode]').type('12345');
  cy.get('[data-test=continue]').click();
});

When('the user leaves required fields empty', () => {
  cy.get('[data-test=continue]').click();
});

Then('the order should be successfully completed', () => {
  cy.get('[data-test=finish]').click();
  cy.url().should('include', '/checkout-complete.html');
});

Then('an error message should be displayed', () => {
  cy.get('[data-test=error]').should('be.visible');
});
