describe('Test Suite', function () {
    it('Alerts Testing', function () {

        cy.visit("http://demo.automationtesting.in/Alerts.html")

        cy.get('.btn-danger').click()

            cy.on('window:alert', (str)=>
            {
                expect(str).to.equal('I am an alert box!')
            })
    });
});