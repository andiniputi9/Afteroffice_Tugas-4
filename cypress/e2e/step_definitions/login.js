const {Given, When, Then} = require('cypress-cucumber-preprocessor/steps');

const baseUrl = 'https://www.saucedemo.com/';

Given("the user is on the login page", () => {
    cy.visit(baseUrl);
  });

  
  When('the user enters valid username and password', () => {
    cy.get('[data-test=username]').type('standard_user');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });

  When('the user enters invalid username and password', () => {
    cy.get('[data-test=username]').type('test');
    cy.get('[data-test=password]').type('secret_sauce');
    cy.get('[data-test=login-button]').click();
  });


  Then('the user should be redirected to the products page', () => {
    cy.url().should('include', '/inventory.html');
  });

  Then('an error message should be displayed', () => {
    cy.get('[data-test=error]').should('be.visible');
  });

 
  

  
 
  
 
 