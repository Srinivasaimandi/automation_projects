///<reference types='Cypress'/>

import { faker } from "@faker-js/faker";

import LoginPage from "../../support/pageobjects/loginPage";

describe("forms suite", function () {
  beforeEach("setup", function () {
    // loading fixtures
    cy.fixture("example").as("testData");
  });

  it("login with invalid credentials", function () {
    let loginPage = new LoginPage();
    loginPage.visit();
    loginPage.loginToPortal(faker.internet.email(), faker.internet.password());
    cy.url().should("include", "auth_ecommerce");
    cy.get("#message").should(
      "have.text",
      "Bad credentials! Please try again! Make sure that you've registered."
    );
  });

  it("login with valid credentials", function () {
    let loginPage = new LoginPage();
    loginPage.visit();
    loginPage.loginToPortal(this.testData.email, this.testData.password);
  });
});
