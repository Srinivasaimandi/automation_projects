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

  loginToPortal(email, password) {
    // Add this method
    this.iptUsername.type(email);
    this.iptPassword.type(password);
    this.btnSubmit.click();
  }
}

export default LoginPage;
