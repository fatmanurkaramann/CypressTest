/// <reference types="Cypress" />
describe("sauce demo test",()=>{
    it("sauce demo sayfasına git başlığı doğrula",()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')
    })
    it("Basarili login test",()=>{
        cy.fixture("userData").as("user")
        cy.get("@user").then((user)=>{
            cy.loginx(user.userName,user.password)
        })
    })
    it("basarisiz login test",()=>{
        cy.fixture("userData").as("user")
        cy.get("@user").then((user) => {
            cy.loginx(user.usernameFake, user.passwordFake)
        })
    })
})