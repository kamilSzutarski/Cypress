import AddressPage from '../../pageObjects/AddressPage';
import HomePage from '../../pageObjects/HomePage'
import PaymentPage from '../../pageObjects/PaymentPage';
import ShippingPage from '../../pageObjects/ShippingPage';
import SummaryPage from '../../pageObjects/SummaryPage';

describe('perform full blouse purchase order', () => {

    const homePage = new HomePage();
    const summaryPage = new SummaryPage();
    const addressPage = new AddressPage();
    const shippingPage = new ShippingPage();
    const paymentPage = new PaymentPage();

    before(() => {       
        cy.visit('/');
        cy.login();
    })

    it('perform full blouse purchase order', () => {

        let arr = [];

        cy.validateLogin();

        cy.fixture('Products').then(function (data) {

            let arr2 = homePage.selectProduct(data.productName);
            cy.log("zara bedzie arr");
            cy.log(arr2);

            homePage.header.getCartLink().click();
            var newArray = arr.flat();

            summaryPage.getStepsList().as('list').should('have.length', 5);
            cy.get('@list').each((item, index) => {
                cy.wrap(item).should('contain.text', summaryPage.stepsList[index]);
            })

            cy.get('.navigation_page').as('navigation').should('have.text', 'Your shopping cart');
            cy.get('h1').should('contain.text', 'Shopping-cart');
            summaryPage.getTotalShipping().contains('2.00');
            summaryPage.getTotalProducts().contains('43.40');
            summaryPage.getProductQuantity().should('have.text', '2 Products');
            summaryPage.getTotalValue().contains('45.40');
            summaryPage.getProceedToChecout().click();

            cy.get('@navigation').should('have.text', 'Addresses')
            cy.get('h1').should('contain.text', 'Addresses')
            addressPage.getPreviousPage().click();
            cy.url().should('eq', 'http://automationpractice.com/index.php?controller=order&step=0');
            summaryPage.getProceedToChecout().click();
            cy.url().should('eq', 'http://automationpractice.com/index.php?controller=order&step=1');

            addressPage.getAddNewAddress().click();
            cy.url().should('eq', 'http://automationpractice.com/index.php?controller=address&back=order.php%3Fstep%3D1');
            cy.go('back');

            addressPage.setCommentText('Adding short comment...');
            addressPage.getProceedToCheckout().click();

            cy.get('@navigation').should('have.text', 'Shipping');
            cy.get('h1').should('contain.text', 'Shipping');
            shippingPage.getCarrierTitle().should('contain.text', 'Choose a shipping option for this address: My address');
            shippingPage.getDeliveryPrice().should('contain.text', '2.00');

            shippingPage.getPreviousStep().click();
            cy.url().should('eq', 'http://automationpractice.com/index.php?controller=order&step=1&multi-shipping=');
            addressPage.getProceedToCheckout().click();
            cy.url().should('eq', 'http://automationpractice.com/index.php?controller=order');
            shippingPage.setAgreeCheckbox();
            shippingPage.getTermsOfService().click();
            cy.wait(1000);
            cy.get('.fancybox-item').click();
            shippingPage.getProceedToCheckout().click();

            cy.get('@navigation').should('have.text', 'Your payment method');
            cy.get('h1').should('contain.text', 'Please choose your payment method');
            paymentPage.getPreviousStep().click();
            cy.url().should('eq', 'http://automationpractice.com/index.php?controller=order&step=2');
            shippingPage.setAgreeCheckbox();
            shippingPage.getProceedToCheckout().click();
            cy.url().should('eq', 'http://automationpractice.com/index.php?controller=order&multi-shipping=');
            summaryPage.getTotalShipping().contains('2.00');
            summaryPage.getTotalProducts().contains('43.40');
            summaryPage.getTotalValue().contains('45.40');

            paymentPage.getPayByBankwire().click();
            paymentPage.getSubheading().should('contain.text', 'Bank-wire payment')
            cy.get('@navigation').should('contain.text', 'Bank-wire payment');
            cy.get('h1').should('contain.text', 'Order summary');
            paymentPage.getPreviousStep().click();
            paymentPage.getPayByCheck().click();
            paymentPage.getSubheading().should('contain.text', 'Check payment')
            cy.get('@navigation').should('contain', 'Check payment');
            cy.get('div.box > p:nth-child(2)').should('contain', 'You have chosen to pay by check. Here is a short summary of your order:');

            paymentPage.getConfirmOrder().click();
            cy.get('@navigation').should('contain.text', 'Order confirmation');
            cy.get('h1').should('contain.text', 'Order confirmation');
            paymentPage.getSubheading().should('contain.text', 'Your check must include:');
            paymentPage.getAlert().should('contain.text', 'Your order on My Store is complete.');
            

        })
    })
})