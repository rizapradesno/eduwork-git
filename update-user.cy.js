describe('Update User', () => {
    it('Succesfully update user', () => {
        var user = {
            "name" : "Riza Pradesno",
            "job" : "Quality Assurance"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) =>{
            expect(response.status).equal(200)
            expect(response.body.name).to.have.eq(user.name)
        })
    })
})