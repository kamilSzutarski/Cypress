describe('loging in and creating account using requests', () => {

    it('generate a new email and create an account via request', () => {
        cy.register();
    })

    it('sign in via request', () => {
        cy.login();
    })
})