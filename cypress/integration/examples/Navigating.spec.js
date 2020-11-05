describe('Testing', function () {

    it('Navigating', function () {

        cy.visit('https://demo.nopcommerce.com/')

        cy.title().should('eq', 'nopCommerce demo store')

        cy.get('.ico-register').contains('Reg').click()

        cy.title().should('eq', 'nopCommerce demo store. Register')
        cy.go('back')
        cy.title().should('eq', 'nopCommerce demo store') // home page

        cy.go('forward')
        cy.title().should('eq', 'nopCommerce demo store. Register') //reg page

        cy.go(-1) //back to the home page
        cy.title().should('eq', 'nopCommerce demo store') //home page
        cy.go(1) //forward
        cy.title().should('eq', 'nopCommerce demo store. Register') //reg page




    });
});