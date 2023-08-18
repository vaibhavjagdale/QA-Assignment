
class CareerPageAssertion {

    verifyUrlWithSearchTitle(title) {
        cy.log(`user verify url contains: ${title}`);
        cy.url().should('contain', `keywords=${title}`);
    }

    verifySearchResultFromMultipleLocations(searchJobTitle) {
        cy.log(`user verify search result with multiple location for search title: ${searchJobTitle}`);
        cy.get('.phs-filter-panels div[data-ph-at-text="country"]').scrollIntoView().find('button').click();
        cy.get('#CountryBody ul li').should('have.length.greaterThan', 1)
            .each(($el, $index) => {
                cy.wrap($el).find('.result-text').invoke('text')
                    .then((text) => {
                        cy.log(`Job opening with ${searchJobTitle} available in country ${text}`);
                    });
            })

        cy.get('.phs-jobs-list .result-count').invoke('text').as('jobcount')
        cy.get('@jobcount').then((jobcount) => {
            cy.log(`Total job found: ${jobcount}`)
        })

        cy.get('.phs-jobs-list ul .jobs-list-item').should('have.length.greaterThan', 1)
            .each(($el, $index) => {
                cy.wrap($el).find('.job-title span').invoke('text')
                    .then((text) => {
                        cy.log(`Job opening with title ${text}`);
                    })
            })
    }

    verifySearchResultWithSingleLocation(country) {
        cy.log(`user verify search result with single location for country: ${country}`);
        cy.get('.tag .facet-tag').should('have.text', country);
        cy.get('.phs-jobs-list .result-count').invoke('text').as('jobcount')
        cy.get('@jobcount').then((jobcount) => {
            cy.log(`Total number of jobs found in ${country}: ${jobcount}`)
        })
        cy.get('.phs-jobs-list ul .jobs-list-item').should('have.length.greaterThan', 1)
            .each(($el, $index) => {
                cy.wrap($el).find('.job-location').should('include.text', country);
            })
    }

    verifySeachResultJobCountWithCategory(categoryName) {
        cy.log(`user verify search result job count with job category: ${categoryName}`);
        cy.get('.tag .facet-tag').should('have.text', categoryName);
        cy.get('@jobCountWithSalesCategory').then((jobcount) => {
            cy.get('.phs-jobs-list .result-count').invoke('text').should('equal', jobcount);
        })
    }

    verifySeachResultJobCountWithCategoryAndCountry(categoryName, countryName, jobCountWithSalesandGermanCountry) {
        cy.log(`user verify search result job count with job category: ${categoryName} and country: ${countryName}`);
        cy.get('.tag .facet-tag').eq(0).should('have.text', categoryName);
        cy.get('.tag .facet-tag').eq(1).should('have.text', countryName);
        cy.get('.phs-jobs-list .result-count').invoke('text').should('equal', jobCountWithSalesandGermanCountry.toString());

    }
}
export const careerPageAssertion = new CareerPageAssertion();
