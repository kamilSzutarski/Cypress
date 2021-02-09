class AddressPage {

    deliveryAddressElements = [
        "Your delivery address",
    ];

    getAddressSelector() {
        return cy.get('#id_address_delivery');
    }

    getAddressesCheckbox() {
        return cy.get('.addressesAreEquals');
    }

    getCommentArea() {
        return cy.get('#ordermsg > .form-control');
    }

    getPreviousPage() {
        return cy.get('[title="Previous"]');
    }

    getProceedToCheckout() {
        return cy.get('[name="processAddress"]');
    }

    getUpdateDeliveryAddress() {
        return cy.get('ul#address_delivery > li.address_update > a.button');
    }

    getUpdateBillingAddress() {
        return cy.get('ul#address_invoice > li.address_update > a.button');
    }

    getAddNewAddress() {
        return cy.get('.address_add > .button > span');
    }

    getDeliveryAddressTable() {
        return cy.get('ul#address_delivery > li');
    }

    getBillingAddressTable() {
        return cy.get('ul#address_invoice > li');
    }

    setAddressSelector(address) {
        this.getCountrySelector().select(address).should('have.value', address);
    }

    setCommentText(text) {
        this.getCommentArea().type(text);
    }

}

export default AddressPage;