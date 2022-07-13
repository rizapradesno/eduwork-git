describe('login/logout test', ()=>{
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })

    it('should try to login with invalid data', () => {
        cy.fixture("xuser").then(xuser =>{
            const username = xuser.username
            const password = xuser.password
            
            cy.login(username,password)
        })
    })

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    })

    it('should login to application with valid data', ()=>{
        cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password

            cy.login(username,password)

            cy.get('li').should('contain.text', 'Account Summary')
        })
    })

    it('should logout from the application',()=>{
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text','Home')
    })
})