class Header {
  
  getSignInLink() {
    return cy.get('.login');
  }

  getContactUsLink() {
    return cy.get('#contact-link > a');
  }

  getLogoLink() {
    return cy.get('.logo');
  }

  getSearchInput() {
    return cy.get('#search_query_top');
  }

  getSearchBtn() {
    return cy.get('#searchbox > .btn');
  }

  getCartLink() {
    return cy.get('[title="View my shopping cart"]');
  }
}

export default Header;