

/*
describe('My First Test', () => {
    it('verify the title of the page!', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce demo store')
    })
})*/

describe('Locating Elements', ()=>{
    it('verify cart amount', function ()
    {
        cy.visit("https://demo.nopcommerce.com/") //visit to the website

        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") //get search box by id and type the value of search item

        cy.get(".search-box-button").click() //click on the search button with class name

        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()  //click on add to cart button with class item

        cy.get("#product_enteredQuantity_4").clear().type('4') //get the no. of products input filed. clear the input field and type the value

        cy.get("#add-to-cart-button-4").click() //click on the add to cart button with id

        cy.wait(5000) //after clicking waiting for pop up closing for 5s

        cy.get(".cart-label").click()  //click on the top menu shopping cart to checkout the price

        cy.wait(3000) //waiting for the page load for 3s

        cy.get(".product-subtotal").contains("$7,200.00") //condition check with contains whether it takes perfect amount

    });
})

