describe('MyTestSuite', function () {
    it('Table Test', function () {

        cy.visit('https://testautomationpractice.blogspot.com/')

        //chek value presence anywhere in the table
        cy.get('table[name=BookTable]').contains('td', 'Javascript').should('be.visible')

        //check value presence in specific row & column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(3) > td:nth-child(3)').contains('Java').should('be.visible')

        //verify the book name "Master in Java" whose author is Amod
        //first get the amod table column
        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e, index, $list) =>
        {
            const text = $e.text()
            if (text.includes("Amod"))
            {
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname)
                    {
                        const bookName = bname.text()
                        expect(bookName).to.equal('Master In Java')
                    })
            }
        })
    });
});