class CheckBoxPage {
  visit() {
    cy.visit("https://qa-automation-practice.netlify.app/checkboxes");
  }

  chkCheckMeOut(index) {
    //return cy.get(`input[type='checkbox']:nth-child(${index}`);
    return cy.get(`#checkbox${index}`);
  }

  get btnReset() {
    return cy.get(".btn-primary");
  }
}
export default CheckBoxPage;
