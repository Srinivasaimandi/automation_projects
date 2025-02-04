class RegisterPage {
  get firstName() {
    return cy.get("#firstName");
  }

  get lastName() {
    return cy.get("#lastName");
  }

  get phoneNumber() {
    return cy.get("#phone");
  }

  get country() {
    return cy.get("#countries_dropdown_menu");
  }

  get emailAddress() {
    return cy.get("#emailAddress");
  }

  get password() {
    return cy.get("#password");
  }

  fillform() {
    this.firstName.type("John");
    this.lastName.type("Doe");
    this.phoneNumber.type("1234567890");
    this.country.select("India");
    this.emailAddress.type("");
    this.password.type("password");
  }
}

export default RegisterPage;
