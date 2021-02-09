class SummaryPage {

    stepsList = [
        "Summary",
        "Sign in",
        "Address",
        "Shipping",
        "Payment"
    ];

    getStepsList() {
        return cy.get('ul.step.clearfix > li');
    }

    getProductQuantity() {
        return cy.get('#summary_products_quantity');
    }

    getTotalProducts() {
        return cy.get('#total_product');
    }

    getTotalShipping() {
        return cy.get('#total_shipping');
    }

    getTotalValue() {
        return cy.get('#total_price');
    }

    getProceedToChecout() {
        return cy.get('p > [title="Proceed to checkout"]');
    }

    getNavigationPage() {
        return cy.get('.navigation_page');
    }
    
}

export default SummaryPage;