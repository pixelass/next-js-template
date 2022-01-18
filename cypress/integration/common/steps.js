import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { pages, dataTestId } from "../helpers";

Given(/^the user is on the "([^"]*)" page$/, function (page) {
	cy.visit(pages[page]);
});

When(/^the user clicks on "([^"]*)" in the navigation$/, function (text) {
	cy.get(dataTestId("navigation")).find("a").contains(text).click();
});
