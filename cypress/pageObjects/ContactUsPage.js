class ContactUsPage {

    visit() {
        cy.visit(Cypress.env('contactUsUrl'));
      }

    getNavigationPage() {
        return cy.get('.navigation_page');
    }

    getPageHeading() {
        return cy.get('.page-heading');
    }

    getPageSubheading() {
        return cy.get('.page-subheading');
    }

    getSendButton() {
        return cy.get('button#submitMessage');
    }

    getFileUpload() {
        return cy.get('#fileUpload');
    }

    getMessageArea() {
        return cy.get('#message');
    }

    getSubject() {
        return cy.get('#id_contact');
    }

    getEmail() {
        return cy.get('#email');
    }

    getOrder() {
        return cy.get('#id_order');
    }

    setMessage(text) {
        this.getMessageArea().type(text);
    }

    setEmail(email) {
        this.getEmail().type(email);
    }

    setOrder(order) {
        this.getOrder().type(order);
    }

    setSubject(subject) {
        this.getSubject().select(subject);
    }

}

export default ContactUsPage;