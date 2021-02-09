class ShippingPage {

    getCarrierTitle() {
        return cy.get('.delivery_options_address > .carrier_title');
    }

    getDeliveryPrice() {
        return cy.get('td.delivery_option_price > .delivery_option_price');
    }

    getAgreeCheckbox() {
        return cy.get('[type="checkbox"]');
    }

    getPreviousStep() {
        return cy.get('.button-exclusive');
    }

    getProceedToCheckout() {
        return cy.get('[name="processCarrier"]');
    }

    getTermsOfService() {
        return cy.get('.iframe');
    }

    setAgreeCheckbox() {
        this.getAgreeCheckbox().check();
    }

}

export default ShippingPage;