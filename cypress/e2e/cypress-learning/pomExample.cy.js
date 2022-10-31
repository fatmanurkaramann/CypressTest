/// <reference types="Cypress"/>

import {Login} from "../../pageObjects/login";
const login=new Login();
describe("pom model example",()=>{
    it("başarılı pom",()=>{
      login.navigate();
      login.title();
    })
    it("başarılı login",()=>{
       login.userName();
       login.password();
       login.loginBtn();
    })
})