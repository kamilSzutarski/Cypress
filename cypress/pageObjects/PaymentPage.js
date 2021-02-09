class PaymentPage {

    getPreviousStep() {
        return cy.get('.button-exclusive');
    }

    getPayByBankwire() {
        return cy.get('.bankwire');
    }

    getPayByCheck() {
        return cy.get('.cheque');
    }

    getConfirmOrder() {
        return cy.get('p.clearfix > button');
    }

    getSubheading() {
        return cy.get('h3.page-subheading');
    }

    getAlert() {
        return cy.get('p.alert');
    }
}

export default PaymentPage;