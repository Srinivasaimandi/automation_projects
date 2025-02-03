///<reference types='Cypress'/>

import LoginPage from "../../support/pageobjects/loginPage";

describe("forms suite", function () {
  before("setup", function () {
    // loading fixtures
    cy.fixture("example").as("testData");
  });
  it("login test", function () {
    let loginPage = new LoginPage();
    loginPage.visit();
    loginPage.iptUsername.type(this.testData.email);
    loginPage.iptPassword.type(this.testData.password);
    loginPage.btnSubmit.click();
  });
});
