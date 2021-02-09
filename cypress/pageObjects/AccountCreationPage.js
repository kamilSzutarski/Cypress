import MyAccount from "./MyAccount";

class AccountCreationPage {

    visit() {
        cy.visit(Cypress.env('accountCreationUrl'));
    }

    createAccountHeadingsCheck() {
        this.getPersonalInformationHeading().contains('Your personal information');
        this.getAddressHeading().contains('Your address');
        this.getCreationHeading().should('have.text', 'Create an account');
        this.getAuthenticationHeading().contains('Authentication'); 
        cy.url().should('eq', Cypress.env('accountCreationUrl'));
    };

    checkMrRadioButton() {
        cy.get('[type="radio"]').first().check();
    }

    checkMrsRadioButton() {
        cy.get('[type="radio"]').last().check();
    }

    getCustomerLastName() {
        return cy.get('#customer_lastname');
    }

    getEmail() {
        return cy.get('#email');
    }

    getPassword() {
        return cy.get('#passwd');
    }

    getDaysSelector() {
        return cy.get('#days');
    }

    getMonthsSelector() {
        return cy.get('#months');
    }

    getYearsSelector() {
        return cy.get('#years');
    }

    getNewsletterCheckbox() {
        return cy.get('#newsletter');
    }

    getPartnersCheckbox() {
        return cy.get('#optin');
    }

    getFirstName() {
        return cy.get('#firstname');
    }

    getLastName() {
        return cy.get('#lastname');
    }

    getCompany() {
        return cy.get('#company');
    }

    getAddress1() {
        return cy.get('#address1');
    }

    getAddress2() {
        return cy.get('#address2');
    }

    getCity() {
        return cy.get('#city');
    }

    getStateSelector() {
        return cy.get('#id_state');
    }

    getPostCode() {
        return cy.get('#postcode');
    }

    getCountrySelector() {
        return cy.get('#id_country');
    }

    getInformation() {
        return cy.get('#other');
    }

    getHomePhone() {
        return cy.get('#phone');
    }

    getPhone() {
        return cy.get('#phone_mobile');
    }

    getAlias() {
        return cy.get('#alias');
    }

    getPersonalInformationHeading() {
        return cy.get('#account-creation_form').find('h3.page-subheading');
    }

    getAddressHeading() {
        return cy.get(':nth-child(2) > .page-subheading');
    }

    getCreationHeading() {
        return cy.get('#noSlide').find('.page-heading');
    }

    getAuthenticationHeading() {
        return cy.get('span.navigation_page');
    }

    getCustomerFirstName() {
        return cy.get('#customer_firstname');
    }

    setCustomerFirstName(firstName) {
        this.getCustomerFirstName().clear().type(firstName);
    }

    setCustomerLastName(lastName) {
        this.getCustomerLastName().clear().type(lastName);
    }

    setEmail(email) {
        this.getEmail().clear().type(email);
    }

    setPassword(password) {
        this.getPassword().clear().type(password);
    }

    setDaysSelector(day) {
        this.getDaysSelector().select(day);
    }

    setMonthsSelector(month) {
        this.getMonthsSelector().select(month).should('have.value', month);
    }

    setYearsSelector(year) {
        this.getYearsSelector().select(year).should('have.value', year);
    }

    setNewsletterCheckbox() {
        this.getNewsletterCheckbox().check();
    }

    setPartnersCheckbox() {
        this.getPartnersCheckbox().check()
    }

    setFirstName(firstName) {
        this.getFirstName().clear().type(firstName);
    }

    setLastName(lastName) {
        this.getLastName().clear().type(lastName);
    }

    setCompany(company) {
        this.getCompany().clear().type(company);
    }

    setAddress1(address) {
        this.getAddress1().clear().type(address);
    }

    setAddress2(address) {
        this.getAddress2().clear().type(address);
    }

    setCity(city) {
        this.getCity().clear().type(city);
    }

    setStateSelector(state) {
        this.getStateSelector().select(state).should('have.value', state);
    }

    setPostCode(code) {
        this.getPostCode().clear().type(code);
    }

    setCountrySelector(country) {
        this.getCountrySelector().select(country).should('have.value', country);
    }

    setInformation(info) {
        this.getInformation().clear().type(info);
    }

    setHomePhone(homePhone) {
        this.getHomePhone().clear().type(homePhone);
    }

    setPhone(phone) {
        this.getPhone().clear().type(phone);
    }

    setAlias(alias) {
        this.getAlias().clear().type(alias);
    }

    clickRegisterButton() {
        cy.get('#submitAccount').click();
        const myAccount = new MyAccount();
        return myAccount;
    }
}

export default AccountCreationPage