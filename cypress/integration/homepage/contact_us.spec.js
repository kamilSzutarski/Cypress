import ContactUsPage from '../../pageObjects/ContactUsPage';

describe('tests contatct us form', () => {

    const contact = new ContactUsPage();

    beforeEach(() => {
        contact.visit();
    })

    it('check page headings', () => {
        contact.getPageHeading().should('contain', 'Customer service - Contact us');
        contact.getPageSubheading().should('contain', 'send a message');
        contact.getNavigationPage().should('contain', 'Contact');
    })

    it('submit empty form', () => {
        contact.getSendButton().click();
        cy.url().should('eq', Cypress.env('contactUsUrl'));
        cy.get('.alert').should('be.visible');
    })

    it('submit empty message', () => {
        contact.setEmail('random@random.pl');
        contact.getSendButton().click();
        cy.url().should('eq', Cypress.env('contactUsUrl'));
        cy.get('ol > li').should('contain', 'The message cannot be blank');
    })

    it('submit empty subject', () => {
        contact.setEmail('random@random.pl');
        contact.setMessage('Lorem Ipsum...');
        contact.setOrder('PL1337');
        contact.getSendButton().click();
        cy.url().should('eq', Cypress.env('contactUsUrl'));
        cy.get('ol > li').should('contain', 'Please select a subject from the list provided');
    })

    it('sending the message', () => {
        contact.setEmail('random@random.pl');
        contact.setMessage('Lorem Ipsum...');
        contact.setOrder('PL1337');
        contact.setSubject('Customer service');
        contact.getSendButton().click();
        cy.url().should('eq', Cypress.env('contactUsUrl'));
        cy.get('.alert').should('contain', 'Your message has been successfully sent to our team.');
    })
    
    it('sending the attachment', () => {
        contact.setEmail('random@random.pl');
        contact.setMessage('Lorem Ipsum...');
        contact.setOrder('PL1337');
        contact.setSubject('Webmaster');
 
        const fixturePath = 'logo.png';
        contact.getFileUpload().attachFile(fixturePath);
        contact.getSendButton().click();
        cy.url().should('eq', Cypress.env('contactUsUrl'));
        cy.get('.alert').should('contain', 'Your message has been successfully sent to our team.');

    })
})