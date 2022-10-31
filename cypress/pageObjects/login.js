export class Login {
    navigate(){
        cy.visit("https://www.saucedemo.com/")
    }
    title(){
        cy.title().should("eq","Swag Labs")
    }
    userName(){
        cy.get('#user-name').type("standard_user")
    }
    password(){
        cy.get('#password').type("secret_sauce")
    }
    loginBtn(){
        cy.get('#login-button').click()
    }
}