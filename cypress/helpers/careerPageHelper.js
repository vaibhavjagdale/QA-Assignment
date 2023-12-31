
import { careerPage } from '../pageObjects/careerPage';

class CareerPageHelper {

    enterJobTitle(title) {
        cy.log(`user enter job title: ${title}`);
        careerPage.jobTitleField().clear().type(title).should('have.value', title);
    }

    clickSearchButton(title) {
        cy.log(`user click on search button`);
        careerPage.searchButton().scrollIntoView().click();
    }

    refineSearchResultWithCountry(country) {
        cy.log(`user refine search result: ${country}`);
        cy.get('.phs-filter-panels div[data-ph-at-text="country"]').scrollIntoView().find('button').click();
        cy.get('#CountryBody ul li').contains(country).parent().find('input[type="checkbox"]').click({ force: true }).should('be.checked').wait(500);
    }

    selectJobCategoriesFromSearch(category) {
        cy.log(`user select job category: ${category}`);
        careerPage.jobTitleField().click();
        careerPage.searchCategories().contains(category)
            .scrollIntoView()
            .invoke('attr', 'data-ph-at-data-count')
            .as('jobCountWithSalesCategory')
        careerPage.searchCategories().contains(category).click();
    }

    scrollToRefineYourSerach() {
        cy.log(`user scroll to refine your search area`);
        careerPage.refineYourSearch().scrollIntoView();
    }



}
export const careerPageHelper = new CareerPageHelper();
