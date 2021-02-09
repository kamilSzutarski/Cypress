import SignInPage from '../../pageObjects/SignInPage';

describe('sign in', () => {

  const signInPage = new SignInPage;

  beforeEach(() => {
    signInPage.visit();
  })

  it('no email', () => {
    signInPage.getSignInButton().click();
    cy.url().should('eq', Cypress.env('signInUrl'));
    cy.get('.alert').should('be.visible');
    cy.get('.alert').should('contain', 'An email address required.');
  })

  it('no password', () => {
    signInPage.setEmail('random@random.pl');
    signInPage.getSignInButton().click();
    cy.url().should('eq', Cypress.env('signInUrl'));
    cy.get('.alert').should('be.visible');
    cy.get('.alert').should('contain', 'Password is required.');
  })

  it('incorrect email', () => {
    signInPage.setEmail('random@random.');
    signInPage.getSignInButton().click();
    cy.url().should('eq', Cypress.env('signInUrl'));
    cy.get('.alert').should('be.visible');
    cy.get('.alert').should('contain', 'Invalid email address.');
  })

  it('authentication failed', () => {
    signInPage.setEmail('random@random.pl');
    signInPage.setPassword('P@ssw0rd');
    signInPage.getSignInButton().click();
    cy.url().should('eq', Cypress.env('signInUrl'));
    cy.get('.alert').should('be.visible');
    cy.get('.alert').should('contain', 'Authentication failed.');
  })

  it('authentication successful', () => {
    cy.fixture('LoginCredentials').then(function (data) {
      signInPage.setEmail('testujemylogin@o2.pl');
      signInPage.setPassword('Haslo123');
      signInPage.getSignInButton().click();
      cy.url().should('eq', Cypress.env('accountUrl'));
      cy.get('.account > span').should('have.text', data.name + ' ' + data.surname);
      cy.get('.navigation_page').should('contain', 'My account');
      cy.get('.page-heading').should('contain', 'My account');
      cy.get('.logout').should('contain', 'Sign out');
    })
  })
})