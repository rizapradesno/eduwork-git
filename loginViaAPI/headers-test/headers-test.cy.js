describe('Validate Headers', () => {
    it('Succesfullt validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')        
    })

    it('Succesfully validate Body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        var datapokemon = {
            "ability": {
            "name" : "limber",
            "url" : "https://pokeapi.co/api/v2/ability/7/"
            }
        }

        cy.get('@pokemon').should((response) => {
            expect(response.body.abilities[0].ability.name).to.eq(datapokemon.ability.name)
        })
    
        })        
    })

