/// <reference types="Cypress"/>
import { PizzaOrder } from "../Pages/PizzaOrder";
const PizzaOrdering=new PizzaOrder();

describe("Ordering a Pizza",()=>{
    it("Select A Website an Order A Pizza",()=>{
        cy.visit("https://www.royalpizza.co.th/")
        cy.wait(3000)
        PizzaOrdering.PizzaSelection1()
        PizzaOrdering.PizzaSize()
        PizzaOrdering.FirstTenPizza()
        PizzaOrdering.SecondTenPizza()
        PizzaOrdering.SelectCheese()
        PizzaOrdering.SelectQuantity()
        PizzaOrdering.AddToCart()
        PizzaOrdering.ViewBasket()
        PizzaOrdering.ProceedToCheckOut()


        
    })
})