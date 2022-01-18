import { Then } from "cypress-cucumber-preprocessor/steps";
import { pages } from "../helpers";

Then(/^the "([^"]*)" page is visible$/, function (page) {
	cy.url().should("include", pages[page]);
});
