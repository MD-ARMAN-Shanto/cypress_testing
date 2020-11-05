describe('Test Suite', function () {
    it('Google Search Box Test', function () {
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('test cypress'),
        cy.get('.FPdoLc > center > .gNO89b').click({force: true})
    });
});