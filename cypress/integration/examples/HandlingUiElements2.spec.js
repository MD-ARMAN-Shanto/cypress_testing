describe('Test Suite ui', function () {

    it('Testing Checkbox ', function () {

        cy.visit("http://demo.automationtesting.in/Register.html") //visiting the website

        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket') // first check the checkbox then checked whether it's checked or not
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies') // first check the checkbox then checked whether it's checked or not
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey') // first check the checkbox then checked whether it's checked or not

        cy.get('#checkbox1').uncheck().should('not.be.checked')  //uncheck individually
        cy.get('#checkbox2').uncheck().should('not.be.checked') //uncheck individually
        cy.get('#checkbox3').uncheck().should('not.be.checked') //uncheck individually

        //check at the checkbox at a time
        cy.get('input[type=checkbox]').check(['Cricket', 'Hockey'])



    });


    it('Skills Drop Down Check', function () {

        //static single drop down list first select then check the value has the same value.
        cy.get('#Skills').select('Client Support').should('have.value', 'Client Support')
    });

    it('Language Multi select Dropdown', function () {

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains( 'Arabic').click()
        cy.get('.ui-corner-all').contains( 'English').click()

    });

    it('Country input box search drop down select with force fully', function () {

        cy.get('[role=combobox]').click({force: true})
        cy.get('.select2-search__field').type('Bangla').type('{enter}')
        cy.get('#submitbtn').should('be.visible').click()

    });
});