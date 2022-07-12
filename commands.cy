describe('working with inputs', ()=>{
    it('visit the website', ()=>{
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
        cy.url().should('include','login.html')
    })
    it('should try to login & payment',()=>{
        cy.fixture('userbank').then(userbank=>{

        const username = userbank.username
        const password = userbank.password
        const amount = userbank.amount
        const date = userbank.date
        const description = userbank.description    
        cy.login(username,password,amount,date,description)    

            
        })
    })

    
})
