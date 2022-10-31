///<reference types="Cypress" />

describe("Trigger events",()=>{
    it("mouse over",()=>{
        cy.visit("https://www.amazon.de/")
        cy.get("span#nav-link-accountList-nav-line-1").trigger("mouseover")
        cy.get("div#nav-al-your-account a:nth-child(4) > span").click()
    })
})