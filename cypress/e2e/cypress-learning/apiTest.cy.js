/// <reference types="Cypress" />

describe("Basit api test",()=>{
    it("headers doğrulama testi",()=>{
        cy.request("https://pokeapi.co/api/v2/pokemon/1")
        .its("headers")
        .its("content-type")
        .should("include","application/json; charset=utf-8")

    })
    it("headers doğrulama2",()=>{
        cy.request({
            url:"https://pokeapi.co/api/v2/pokemon/1",
            method:"GET"
        }).then((response)=>{
            expect(response.headers).to.have.property("content-type").and
            .to.be
            .include("application/json; charset=utf-8")
        })
    })
    it("status doğrulama testi",()=>{
        cy.request("https://pokeapi.co/api/v2/pokemon/1")
        .its("status")
        .should("eq",200)
    })
    it("body name testi",()=>{
        cy.request("https://pokeapi.co/api/v2/pokemon/1")
        .its("body")
        .should("include",{name:"bulbasaur"})
    })
})