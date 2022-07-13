describe('Searchbox Test', function(){
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('shoould type into searchbox and submit',()=>{
        cy.get('#searchTerm').type('online {enter}')
    })

    it('should show search result page', ()=>{
        cy.get('h2').should('contain.text', 'Search Results:')
        cy.get('li').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get('li').should('contain.text', 'Zero - Online Statements')
    })
}) 