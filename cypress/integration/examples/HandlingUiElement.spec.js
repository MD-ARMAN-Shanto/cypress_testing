describe('Handling UI Elements', ()=>{
    it('Checking Input box & Radio buttons', ()=>{

        cy.visit("http://demo.guru99.com/test/newtours/") //visit the website
        cy.url().should('include', 'guru99') //verify url should include guru99

        //get the username which should be visible(condition) also enabled the input field and type data to username
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type('Arman')

        //get the username which should be visible(condition) also enabled the input field and type data to password
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type('Arman123')

        cy.get('input[type="submit"]').should('be.visible').click() //get the submit button which should be visible and click the button

        cy.title().should('eq', 'Login: Mercury Tours') //get the title of the sign in page and conditionally checked the title of the page

        cy.get(':nth-child(2) > [width="80"] > a').click() //click on the the reservation page

        cy.title().should('eq', 'Find a Flight: Mercury Tours:') //get the title of the reservation page which should be equal to the given name

        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') //visibility and checking test
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() //visibility and checking test
        cy.get('[name="findFlights"]').should('be.visible').click() //visibility and checking test
        cy.get('p > [face="Arial, Helvetica, sans-serif"][style="color:#000;"] > :nth-child(1) > :nth-child(1)').contains('After flight finder - No Seats Avaialble ') //visibility and checking test



    })
})