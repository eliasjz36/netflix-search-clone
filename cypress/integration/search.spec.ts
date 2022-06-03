/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display front page', () => {
    cy.contains('Home');
  });

  it('should display the correct title', () => {
    cy.title().should('include', 'Netflix');
  });

  it('should display the correct search input', () => {
    cy.get('[data-testid="search-input"]').should(
      'have.attr',
      'placeholder',
      'Titles, actors, genres',
    );
  });
});

describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('empty search should display no results', () => {
    cy.get('[data-testid="search-input"]').type('{enter}');
    cy.get('[data-testid="search-results"]').should('not.exist');
  });

  it.only('should search title and display results', () => {
    cy.get('[data-testid="search-input"]').type('test');
    cy.get('[data-testid="search-input"]').should('have.value', 'test');
    cy.get('[data-testid="search-results"]').should('be.visible');
    cy.get('[data-testid="search-result"]')
      .should('be.visible')
      .first()
      .find('h3')
      .should('include.text', 'test', { matchCase: false });
  });

  it('search does not match title and displays info message', () => {
    cy.get('[data-testid="search-input"]').type('@#$%^&*');
    cy.get('[data-testid="search-input"]').should('have.value', '@#$%^&*');
    cy.get('[data-testid="search-not-found"]')
      .should('be.visible')
      .should('contain', `Your search for "@#$%^&*" did not have any matches`);
  });
});

export {};
