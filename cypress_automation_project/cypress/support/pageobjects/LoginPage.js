class LoginPage {
  visit() {
    cy.visit("https://qa-practice.netlify.app/auth_ecommerce");
  }
  get iptUsername() {
    return cy.get("#email"); // Adjust the selector as needed
  }

  get iptPassword() {
    return cy.get("#password"); // Adjust the selector as needed
  }

  get btnSubmit() {
    return cy.get("#submitLoginBtn"); // Adjust the selector as needed
  }
}

export default LoginPage;
