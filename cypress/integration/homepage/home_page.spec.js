describe("Home page testing", () => {
    before(() => {
        cy.visit('/')
    })

    it('header image', () => {
        cy.get('div.banner img')
            .should('have.attr', 'src', 'http://automationpractice.com/modules/blockbanner/img/sale70.png');
    })

    it("call us now", () => {
        cy.get('span.shop-phone').as('shopPhone');

        cy.get('@shopPhone')
            .contains('Call us now');

        cy.get('@shopPhone').within(() => {
            cy.get('strong')
                .contains('0123-456-789');
        })
    })

    it("contact us", () => {
        cy.get('div#contact-link > a')
            .contains('Contact us')
            .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=contact')
            .and('have.attr', 'title', 'Contact Us');
    })

    it("sign in", () => {
        cy.get('div.header_user_info > a')
            .contains('Sign in')
            .should('have.attr', 'href', 'http://automationpractice.com/index.php?controller=my-account')
            .and('have.attr', 'title', 'Log in to your customer account');
    })

    it('slider with 5 elements', () => {
        cy.get('div#homepage-slider ul > li')
            .should('have.length', '5');
    })

    it('slider description', () => {
        cy.get('div#homepage-slider ul > li').eq(0).as('listItem');

        cy.get('@listItem').within(() => {
            cy.get('a')
                .should('have.attr', 'href', 'http://www.prestashop.com/?utm_source=v16_homeslider')

            cy.contains('div.homeslider-description h2', 'EXCEPTEUR');

            cy.contains('div.homeslider-description p:first',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique in tortor et dignissim. Quisque non tempor leo. Maecenas egestas sem elit');
        })
    })

    it("logo image", () => {
        cy.get('div#header_logo > a').as('logo');

        cy.get('@logo')
            .should('have.attr', 'href', 'http://automationpractice.com/')
            .and('have.attr', 'title', 'My Store')
    })

    it("social media icons", () => {
        cy.get('section#social_block ul>li')
            .should('have.length', '4');
    })
})