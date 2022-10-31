/// <reference types="Cypress" />

describe("Cypress url related commands",()=>{
    it("fineuploader sitesine git",()=>{
        cy.visit("https://fineuploader.com/")
    })
    it("fineuploader protokolü kontrol",()=>{
        cy.location("protocol").should("contain","https")
    })
    it("fineuploader hostname kontrol",()=>{
        cy.location("hostname").should("eq","fineuploader.com")
    })
    it("fineuploader sitesine git demoya tıkla",()=>{
        cy.get("div#menu li:nth-child(2) > a").should("be.visible").click()
        cy.location("pathname").should("eq","/demos.html")
    })
    it("demo sayfasındaki linklere geçiş",()=>{
        cy.get("div.span2.left > ul > li:nth-child(2) > a").should("be.visible").click()
        cy.url().should("eq","https://fineuploader.com/demos.html#gallery-view")
    })
})