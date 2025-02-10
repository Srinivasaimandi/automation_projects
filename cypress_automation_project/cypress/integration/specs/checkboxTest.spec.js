/// reference types="cypress" />

import CheckBoxPage from "../../support/pageobjects/CheckBoxPage";

describe("checkbox suite", function () {
  it.skip("check a checkboxe and validate status", function () {
    let checkBoxPage = new CheckBoxPage();
    checkBoxPage.visit();
    checkBoxPage.chkCheckMeOut(1).check().should("be.checked");
    checkBoxPage.chkCheckMeOut(2).should("not.be.checked");
    checkBoxPage.chkCheckMeOut(3).should("not.be.checked");
  });

  it.skip("check all checkbox, validate status and reset the checkboxes", function () {
    let checkBoxPage = new CheckBoxPage();
    checkBoxPage.visit();
    checkBoxPage.chkCheckMeOut(1).check().should("be.checked");
    checkBoxPage.chkCheckMeOut(2).check().should("be.checked");
    checkBoxPage.chkCheckMeOut(3).check().should("be.checked");
    checkBoxPage.btnReset.click();
    checkBoxPage.chkCheckMeOut(1).should("not.be.checked");
    checkBoxPage.chkCheckMeOut(2).should("not.be.checked");
    checkBoxPage.chkCheckMeOut(3).should("not.be.checked");
  });
});
