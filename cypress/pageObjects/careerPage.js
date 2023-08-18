
/// <reference types="cypress" />

class CareerPage {

    jobTitleField() {
        return cy.get('#keywordSearch');
    }

    searchButton() {
        return cy.get('.input-group-btn');
    }

    searchCategories() {
        return cy.get('.phs-search-categories li ');
    }

    refineYourSearch() {
        return cy.get('.panel-title > ppc-content');
    }
}
export const careerPage = new CareerPage();
