import testData from '../../fixtures/testData.json'
import { careerPageHelper } from '../../helpers/careerPageHelper';
import { careerPageAssertion } from '../../assertion/careerPageAssertion';

describe('Search job on career portal: Test Automation Engineer', () => {

  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('/');
    cy.get('button').contains('Allow').click();
  });

  it("Search job with title ", () => {
    // Test data
    const searchJobTitle = 'Test'
    const refineCountryName = 'Netherlands'

    // Test Actions
    careerPageHelper.enterJobTitle(searchJobTitle);
    careerPageHelper.clickSearchButton();

    // Test Verification
    careerPageAssertion.verifyUrlWithSearchTitle(searchJobTitle);
    careerPageAssertion.verifySearchResultFromMultipleLocations(searchJobTitle);
    careerPageHelper.refineSearchResultWithCountry(refineCountryName);
    careerPageAssertion.verifySearchResultWithSingleLocation(refineCountryName);
  });

  it("Search job with category", () => {
    // Test data from Fixture

    careerPageHelper.selectJobCategoriesFromSearch(testData.Testcase2.categoryName);
    careerPageHelper.scrollToRefineYourSerach();

    careerPageAssertion.verifySeachResultJobCountWithCategory(testData.Testcase2.categoryName);
    careerPageHelper.refineSearchResultWithCountry(testData.Testcase2.refineCountryName);
    careerPageAssertion.verifySeachResultJobCountWithCategoryAndCountry(testData.Testcase2.categoryName, testData.Testcase2.refineCountryName, testData.Testcase2.jobCountWithSalesandGermanCountry);

  });
});
