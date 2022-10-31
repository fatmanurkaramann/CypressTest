/// <reference types="Cypress" />

describe("Read and Write File",()=>{
    it("write file",()=>{
        cy.writeFile("basitNotDefteri.txt","hello\n")
        cy.writeFile("basitNotDefteri.txt","Cypress derslerine hoşgeldiniz",{flag:'a+'})
    })
    it("read file",()=>{
        cy.readFile("basitNotDefteri.txt").should("contain","Cypress")
    })
    it("read file2",()=>{
        cy.readFile("basitNotDefteri.txt").then((text)=>{
            expect(text).to.contain("hello")
        })
    })
})