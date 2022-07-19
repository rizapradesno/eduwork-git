const URL = 'http://zero.webappsecurity.com/index.html'
const Search = '#searchTerm'

class SearchFill{
    static visit() {
        cy.visit(URL)
    }

    static SearchFeature() {
        cy.get(Search).type('online {enter}')
    }
}

export default SearchFill