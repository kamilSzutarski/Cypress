class Footer {

    storeInformationIcons = [
        "icon-map-marker",
        "icon-phone",
        "icon-envelope-alt"
    ];

    storeInformationList = [
        "Research Triangle Park",
        "Call us now",
        "support@seleniumframework.com"
    ];

    myAccountList = [
        "My orders",
        "My credit slips",
        "My addresses",
        "My personal info",
        "Sign out"
    ];

    myAccountHrefList = [
        Cypress.env('ordersUrl'),
        Cypress.env('creditSlipsUrl'),
        Cypress.env('addressUrl'),
        Cypress.env('identityUrl')];

    informationHrefList = [
        Cypress.env('specialsUrl'),
        Cypress.env('newProductsUrl'),
        Cypress.env('bestsellerUrl'),
        Cypress.env('storesUrl'),
        Cypress.env('contactUsUrl'),
        Cypress.env('policyUrl'),
        Cypress.env('aboutUsUrl'),
        Cypress.env('siteMapUrl')];

    categoriesHrefList = [Cypress.env('womenUrl')];

    informationList = [
        "Specials",
        "New products", 
        "Best sellers",
        "Our stores",
        "Contact us",
        "Terms and conditions of use",
        "About us",
        "Sitemap"
    ];

    categoryList = ["Women"];


    getmyAccountHrefList() {
        return myAccountHrefList;
    }

    getStoreInformationIcons() {
        return this.storeInformationIcons;
    }

    getStoreInformationText() {
        return this.storeInformationList;
    }

    getMyAccountText() {
        return this.myAccountList;
    }

    getInformationText() {
        return this.informationList;
    }

    getCategoryListText() {
        return this.categoryList;
    }

    getNewsletterLabel() {
        return cy.get('#newsletter_block_left > h4');
    }

    getNewsletterInput() {
        return cy.get('#newsletter-input');
    }

    getNewsletterSubmit() {
        return cy.get('button[name="submitNewsletter"]');
    }

    getFollowUsLabel() {
        return cy.get('#social_block > h4');
    }

    getFacebook() {
        return cy.get('.facebook > a');
    }

    getTwitter() {
        return cy.get('.twitter > a');
    }

    getGoogle() {
        return cy.get('.google-plus > a');
    }

    getYoutube() {
        return cy.get('.youtube > a');
    }

    getStoreInformationLabel() {
        return cy.get('#block_contact_infos > div > h4');
    }

    getStoreInfoList() {
        return cy.get('div > ul.toggle-footer > li');
    }

    getMyAccountLink() {
        return cy.get('h4 > [title="Manage my customer account"');
    }

    getMyAccountList() {
        return cy.get('ul.bullet > li');
    }

    getInformationLabel() {
        return cy.get('#block_various_links_footer > h4');
    }

    getInformationList() {
        return cy.get('section > ul.toggle-footer > li');
    }

    getCategoriesLabel() {
        return cy.get('.blockcategories_footer > h4');
    }

    getCategoriesList() {
        return cy.get('div.list > ul.tree > li');
    }

    getPrestaShop() {
        return cy.get('._blank');
    }

    getAlert() {
        return cy.get('.alert');
    }

    setNewsletterEmail(email) {
        this.getNewsletterInput().type(email);
        this.getNewsletterSubmit().click();
    }
}

export default Footer;