import AccountCreationPage from './AccountCreationPage'

class SignInPage {

  visit() {
    cy.visit(Cypress.env('loginUrl'));
  }

  getEmailCreateInput() {
    return cy.get('#email_create');
  }

  getCreateAccountBtn() {
    return cy.get('#SubmitCreate');
  }

  goToAccountCreationPage(email) {
    this.getEmailCreateInput().clear().type(email);
    this.getCreateAccountBtn().click();

    const accountCreationPage = new AccountCreationPage();
    return accountCreationPage;
  }

  getNavigationPage() {
    return cy.get('.navigation_page');
  }

  getPageHeading() {
    return cy.get('.page-heading');
  }

  getSignInButton() {
    return cy.get('p.submit > button');
  }

  getEmail() {
    return cy.get('#email');
  }

  getPassword() {
    return cy.get('#passwd');
  }

  setEmail(email) {
    this.getEmail().type(email);
  }

  setPassword(password) {
    this.getPassword().type(password);
  }

}

export default SignInPage;