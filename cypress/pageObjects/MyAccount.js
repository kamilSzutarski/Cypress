class MyAccount {

    visit() {
        cy.visit(Cypress.env('loginUrl'));
      }

    getSignOut() {
        return cy.get('a[title="Log me out"]').contains('Sign out');
    }

}
export default MyAccount;