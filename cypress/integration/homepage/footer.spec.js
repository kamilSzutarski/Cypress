import Footer from '../../pageObjects/Footer'

describe('check footer elements', () => {

    const footer = new Footer();

    before(() => {
        cy.visit('/');
    })

    it('checking store information section', () => {
        footer.getStoreInformationLabel().should('have.text', 'Store information');
        footer.getStoreInfoList().as('list').should('have.length', 3);
        cy.get('@list').each((item, index) => {
            cy.wrap(item).should('contain.text', footer.storeInformationList[index]);
            cy.wrap(item).find('i').should('have.class', footer.storeInformationIcons[index]);
        })
    })

    it('checking my account section', () => {
        footer.getMyAccountLink().should('have.text', 'My account').and('have.attr', 'href', Cypress.env('accountUrl'));
        footer.getMyAccountList().as('list').should('have.length', 4);
        cy.get('@list').each((item, index) => {
            cy.wrap(item).should('contain.text', footer.myAccountList[index]);
            cy.wrap(item).find('a').should('have.attr', 'href', footer.myAccountHrefList[index]);
        })
    })

    it('checking information section', () => {
        footer.getInformationLabel().should('have.text', 'Information');
        footer.getInformationList().as('list').should('have.length', 8);
        cy.get('@list').each((item, index) => {
            cy.wrap(item).should('contain.text', footer.informationList[index]);
            cy.wrap(item).find('a').should('have.attr', 'href', footer.informationHrefList[index]);
        })
    })

    it('checking categories section', () => {
        footer.getCategoriesLabel().should('have.text', 'Categories');
        footer.getCategoriesList().as('list').should('have.length', 1);
        cy.get('@list').each((item, index) => {
            cy.wrap(item).should('contain.text', footer.categoryList[index]);
            cy.wrap(item).find('a').should('have.attr', 'href', footer.categoriesHrefList[index]);
        })
    })

    it('checking newsletter section', () => {
        footer.getNewsletterLabel().should('have.text', 'Newsletter').and('be.visible');
        footer.getNewsletterInput().should('have.attr', 'value', 'Enter your e-mail');
    })

    it('successfully subscribed', () => {
        cy.visit('/');
        cy.createEmail().then(email => { 
            assert.isDefined(email)   
            footer.setNewsletterEmail(email.emailAddress);
            footer.getNewsletterInput().should('have.attr', 'value', 'You have successfully subscribed to this newsletter.');
            footer.getAlert().should('have.text', ' Newsletter : You have successfully subscribed to this newsletter.');
        })
    })

    it('invalid newsletter email address', () => {
        cy.visit('/');
        footer.setNewsletterEmail('subscribetest@o2');
        footer.getNewsletterInput().should('have.attr', 'value', 'Invalid email address.');
        footer.getAlert().should('have.text', ' Newsletter : Invalid email address.');
    })

    it('email already registered', () => {
        cy.visit('/');
        footer.setNewsletterEmail('subscribetest@o2.pl');
        footer.getNewsletterInput().should('have.attr', 'value', 'This email address is already registered.');
        footer.getAlert().should('have.text', ' Newsletter : This email address is already registered.');
    })
    

    it('checking social media section', () => {
        footer.getFollowUsLabel().should('have.text', 'Follow us').and('be.visible');
        footer.getFacebook().should('have.attr', 'href', 'https://www.facebook.com/groups/525066904174158/').and('be.visible');
        footer.getTwitter().should('have.attr', 'href', 'https://twitter.com/seleniumfrmwrk').and('be.visible');
        footer.getYoutube().should('have.attr', 'href', 'https://www.youtube.com/channel/UCHl59sI3SRjQ-qPcTrgt0tA').and('be.visible');
        footer.getGoogle().should('have.attr', 'href', 'https://plus.google.com/111979135243110831526/posts').and('be.visible');
    })

    it('checking bottom section', () => {
        footer.getPrestaShop().should('have.text', 'Ecommerce software by PrestaShop™').and('be.visible');
        footer.getPrestaShop().should('have.attr', 'href', 'http://www.prestashop.com');
    })
})
