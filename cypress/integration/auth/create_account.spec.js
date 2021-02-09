import SignInPage from '../../pageObjects/SignInPage'

describe('Generate a new email and sign up via UI', () => {

    const signInPage = new SignInPage();
    const alertList = ["You must register at least one phone number."
    , "lastname is required."
    , "firstname is required."
    , "passwd is required."
    , "address1 is required."
    , "city is required."
    , "Zip/Postal"
    , "This country requires"];

    beforeEach(() => {
        signInPage.visit();
    })

    it('generate a new email and create an account via UI', () => {
        cy.fixture('NewUsers').then((data) => {
            cy.createEmail().then(email => { 
                assert.isDefined(email)
                const emailAddress = email.emailAddress;       
                const accountCreationPage = signInPage.goToAccountCreationPage(emailAddress);
                accountCreationPage.createAccountHeadingsCheck();

                accountCreationPage.checkMrRadioButton();
                accountCreationPage.setCustomerFirstName(data.customer_firstname);
                accountCreationPage.setCustomerLastName(data.customer_lastname);
                accountCreationPage.setPassword(data.passwd);
                accountCreationPage.setDaysSelector(data.days);
                accountCreationPage.setMonthsSelector(data.months);
                accountCreationPage.setYearsSelector(data.years);
                accountCreationPage.setNewsletterCheckbox();
                accountCreationPage.setPartnersCheckbox();
                accountCreationPage.setFirstName(data.firstname);
                accountCreationPage.setLastName(data.lastname);
                accountCreationPage.setCompany(data.company);
                accountCreationPage.setAddress1(data.address1);
                accountCreationPage.setAddress2(data.address2);
                accountCreationPage.setCity(data.city);
                accountCreationPage.setPostCode(data.postcode);
                accountCreationPage.setCountrySelector(data.id_country);
                accountCreationPage.setInformation(data.other);
                accountCreationPage.setHomePhone(data.phone);
                accountCreationPage.setPhone(data.phone_mobile);
                accountCreationPage.setAlias(data.alias);
                accountCreationPage.setStateSelector(data.id_state);

                const myAccount = accountCreationPage.clickRegisterButton();
                myAccount.getSignOut();
                cy.url().should('include', 'controller=my-account');
            })
        })
    })

    it('should throw errors, no required fields', () => {
        const accountCreationPage = signInPage.goToAccountCreationPage('doesntmatter@o2.pl');
        accountCreationPage.createAccountHeadingsCheck();
        accountCreationPage.clickRegisterButton();
        cy.get('.alert > p').contains('There are 8 errors');
        cy.get('ol > li').as('list').should('have.length', 8);
        cy.get('@list').each((item, index) => {
            cy.wrap(item)
            .should('contain.text', alertList[index]);
        })
    })
})