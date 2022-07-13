Cypress.Commands.add('login', (username,password) => {
    cy.clearCookies()
    cy.clearLocalStorage()

    //invalid data
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)
    cy.get('input[name="submit"]').click()

    //valid data
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)
    cy.get('input[name="submit"]').click()
});
