Cypress.Commands.add('login', (email, password) => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: {
            email: 'welebro@hotmail.com',
            password: 'Curioso@820'
        }
    }).then(({ status }) => {
        expect(status).to.eq(200)

        Cypress.Cookies.defaults({
            preserve: 'jwt'
        })
    })
})