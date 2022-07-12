// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username,password,amount,date,description) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)
    cy.get('input[name="user_remember_me"]').click()
    cy.get('input[name="submit"]').click()
    cy.contains('Pay Bills').click()
    cy.get('#sp_payee').select('Apple')
    cy.get('#sp_account').select(3).should('have.value','4')
    cy.get('#sp_amount').type(amount)
    cy.get('#sp_date').type(date).type('{enter}')
    cy.get('#sp_description').type(description)
    cy.get('input[type="submit"]').click()
});
