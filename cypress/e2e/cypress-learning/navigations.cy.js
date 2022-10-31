/// <reference types="Cypress" />

describe("tarayıcıda ileri geri operasyonları",()=>{
    it("cypress.io sayfasına git,feature tıkla ileri geri yap",()=>{
        cy.visit('https://www.cypress.io/')
        cy.title().should("eq","JavaScript End to End Testing Framework | cypress.io testing tools")

        cy.get("div#page-content ul:nth-child(1) > li:nth-child(4) > a").click();
        cy.title().should("eq","Pricing For Cypress Testing Framework | cypress.io testing tools")

        cy.go("back")
        cy.title().should("eq","JavaScript End to End Testing Framework | cypress.io testing tools")
        cy.wait(3000)
        cy.go("forward")
        cy.title().should("eq","Pricing For Cypress Testing Framework | cypress.io testing tools")
        cy.go(-1)
        cy.title().should("eq","JavaScript End to End Testing Framework | cypress.io testing tools")

    })
})