describe('Navbar Test', function() {
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should display online banking content', ()=>{
        cy.contains('Online Banking').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('should display service list bank online content', ()=>{
        cy.contains('Account Summary').click()

        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
        cy.get('input[name="submit"]').click()

        cy.url().should('include','/bank/account-summary.html')
        cy.get('h2').should('be.visible').and('contain.text', 'Cash Accounts')

        cy.contains('Account Activity').click()
        cy.url().should('include','/bank/account-activity.html')
        cy.get('h2').should('be.visible').and('contain.text', 'Show Transactions')

        cy.contains('Transfer Funds').click()
        cy.url().should('include','/bank/transfer-funds.html')
        cy.get('h2').should('be.visible').and('contain.text', 'Transfer Money & Make Payments')

        cy.contains('Pay Bills').click()
        cy.url().should('include','/bank/pay-bills.html')
        cy.get('h2').should('be.visible').and('contain.text', 'Make payments to your saved payees')

        cy.contains('My Money Map').click()
        cy.url().should('include','/bank/money-map.html')
        cy.contains('OutFlow Chart')

        cy.contains('Online Statements').click()
        cy.url().should('include','/bank/online-statements.html')
        cy.get('h2').should('be.visible').and('contain.text', 'Statements & Documents')
    })

    it('should display homepage content',()=>{
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })

    it('should display feedback content',()=>{
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('be.visible').and('contain.text', 'Feedback')
    })

    it('should display homepage content',()=>{
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })

    
})