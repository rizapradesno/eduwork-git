describe('working with inputs', ()=>{
    it('visit the website', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include','saucedemo.com')
    })
    it('should fill username',()=>{
        cy.fixture('userSauce').then(userSauce=>{

            const UserName = userSauce.UserName
            
            cy.get('#user-name').clear()
            cy.get('#user-name').type(UserName)

            
        })
    })
    it('should fill password',()=>{
        cy.fixture('userSauce').then(userSauce=>{

            const UserPassword = userSauce.UserPassword

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(UserPassword)            

            
        })
    })
    it('should try to login',()=>{
        cy.get('input[name="login-button"]').click()
    })
    it('should try to add backpack to chart',()=>{
        cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click()
    })
    it('should try to remove backpack from chart',()=>{
        cy.get('button[name="remove-sauce-labs-backpack"]').click()
    })
})
