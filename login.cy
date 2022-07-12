describe('working with inputs', ()=>{
    it('visit the website', ()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    })

    it('should fill username',()=>{
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Riza Pradesno Tusandrio')
    })

    it('should fill password',()=>{
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    })

    it('should check box',()=>{
        cy.get('input[name="user_remember_me"]').click()
        

    })
})
