import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import SearchFill from './searchfill.cy';

Given('I open homepage application'), () => {
    SearchFill.visit()
}

When('I use Search Feature'), () => {
    SearchFill.SearchFeature()
}

Then('I should see Search results'), () => {
    cy.get('h2').should('contain.text', 'Search Results:')
    cy.get('li').should('contain.text', 'Zero - Free Access to Online Banking')
    cy.get('li').should('contain.text', 'Zero - Online Statements')
}