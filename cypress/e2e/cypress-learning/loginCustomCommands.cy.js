/// <reference types="Cypress" />

describe("custom commands login",()=>{
    beforeEach(()=>{
        cy.viewport(1200,600) //tüm itler için
    })
    it("başarılı login sayfası testi",()=>{
        cy.viewport("iphone-8") //bu it için
        cy.fixture("userData").as("user")
        cy.visit('https://www.saucedemo.com/')
        cy.get("@user").then((user)=>{
            cy.loginx(user.userName,user.password)
        })
    })
   
})