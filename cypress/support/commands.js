import 'cypress-file-upload';

const { MailSlurp } = require("mailslurp-client");
const mailslurp = new MailSlurp( {"apiKey": Cypress.env('apiKey')});

Cypress.Commands.add("createEmail", () => {
    return mailslurp.createInbox();
})

Cypress.Commands.add('login', () => {
    cy.fixture('LoginCredentials').then((data) => {
        cy.request({
            method: 'POST',
            url: '/index.php?controller=authentication',
            form: true,
            body: {
                email: data.username,
                passwd: data.password,
                back: 'my-account',
                SubmitLogin: ''
            },
        }).then((response) => {expect(response.status).to.eq(200)})
    })
    cy.getCookie(Cypress.env('prestaCookie')).should('exist');
})

Cypress.Commands.add('validateLogin', () => {
    cy.fixture('LoginCredentials').then((data) => {
        cy.reload();
        cy.get('.account > span').should('have.text', data.name + ' ' + data.surname);
    })
})

Cypress.Commands.add('subscribe', () => {
    cy.createEmail().then(email => { 
        assert.isDefined(email);
        cy.request({
            method: 'POST',
            url: '/',
            form: true,
            body: {
                email: email.emailAddress,
                action: 0,
                submitNewsletter: ''
            },
        })
        .then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body).to.have.string('You have successfully subscribed to this newsletter.');
        })
    })
    cy.getCookie(Cypress.env('prestaCookie')).should('exist');
})

Cypress.Commands.add('register', () => {
    cy.createEmail().then(email => { 
        assert.isDefined(email);
        const emailAddress = email.emailAddress;

        cy.fixture('NewUsers').then((data) => {
            cy.request({
                method: 'POST',
                url: '/index.php?controller=authentication',
                form: true,
                body: {
                    address1: data.address1,
                    address2: data.address2,
                    alias: data.alias,
                    back: data.back,
                    city: data.city,
                    company: data.company,
                    customer_firstname: data.customer_firstname,
                    customer_lastname: data.customer_lastname,
                    days: data.days,
                    email: emailAddress,
                    email_create: data.email_create,
                    firstname: data.firstname,
                    id_country: data.id_country,
                    id_gender: data.id_gender,
                    id_state: data.id_state,
                    is_new_customer: data.is_new_customer,
                    lastname: data.lastname,
                    months: data.months,
                    newsletter: data.newsletter,
                    optin: data.optin,
                    other: data.other,
                    passwd: data.passwd,
                    phone: data.phone,
                    phone_mobile: data.phone_mobile,
                    postcode: data.postcode,
                    submitAccount: data.submitAccount,
                    years: data.years
                },
            }).then((response) => {expect(response.status).to.eq(200)})
        })
    })
    cy.getCookie(Cypress.env('prestaCookie')).should('exist');
})
    