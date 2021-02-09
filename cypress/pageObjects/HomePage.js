import Header from './Header';
import ContactUsPage from './ContactUsPage';
import Footer from './Footer';

class HomePage {
  constructor() {
    this.header = new Header();
    this.footer = new Footer();
  }

  visit() {
    cy.visit('/');
  }

  selectProduct(input) {

    let product = [];

    input.forEach(function (element) {

      cy.get('ul.homefeatured > li > .product-container > .right-block').each(($el, index, $list) => {

        if ($el.text().includes(element)) {

          product.push(String($el.find('h5 > .product-name').text().trim()));
          product.push(String($el.find('.content_price > .price').text().trim().substring(1)));
          cy.get('.button-container > a.ajax_add_to_cart_button').eq(index).click();
          cy.wait(500);
          cy.get('.continue > span').click();
        }
      })
    })
    cy.log(product.length);
    return product;
  }

  goToContactUs() {
    const link = this.header.getContactUsLink();
    link.click();

    const contactUs = new ContactUsPage();
    return contactUs;
  }

}

export default HomePage;