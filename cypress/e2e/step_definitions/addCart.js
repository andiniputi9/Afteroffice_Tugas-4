const {Given, When, Then} = require('cypress-cucumber-preprocessor/steps');

const baseUrl = 'https://www.saucedemo.com/';

Given("the user is logged in", () => {
    cy.visit(baseUrl);
  });

 Given('the user enters valid username and password', () => {
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });

  When('the user adds a product to the cart', () => {
    cy.get('.inventory_item').first().within(() => {
        cy.contains('Add to cart').click();

    }); 
});
  When('the user navigates to the cart without adding products', () => {
    cy.get('.shopping_cart_link').click();
  });

  Then('the cart should display the correct product count', () => {
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', 1);
  });
  
  Then('an error message should be displayed', () => {
    cy.get('.cart_item').should('have.length', 0);
  });
  