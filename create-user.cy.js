describe('Get User List', () => {
    it('succesfully create new user', () => {
        var user = {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'leader')
        })                
    });
})