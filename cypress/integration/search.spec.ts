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
  let api_key: string;

  beforeEach(() => {
    cy.visit('/');

    api_key = Cypress.env('api_key');
  });

  it('should search title and display results with mock', () => {
    cy.intercept('GET', `https://imdb-api.com/en/API/Search/${api_key}/t`, {
      fixture: 'titles.json',
    }).as('search');

    cy.get('[data-testid="search-input"]').type('t');
    cy.get('[data-testid="search-input"]').should('have.value', 't');
    cy.url().should('contain', '/?q=t');

    cy.get('[data-testid="search-results"]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-testid="search-result"]')
          .should('be.visible')
          .within(() => {
            cy.get('h3').should('contain', 't', { matchCase: false });
          });
      });
  });

  it('search does not match title and displays info message', () => {
    cy.visit('http://localhost:3000/?q=***');
    cy.url().should('contain', '/?q=***');

    cy.get('[data-testid="search-not-found"]')
      .should('be.visible')
      .should('contain', `Your search for "***" did not have any matches`);
  });

  it('should display error message when search fails', () => {
    cy.intercept('GET', `https://imdb-api.com/en/API/Search/${api_key}/t`, {
      forceNetworkError: true,
    }).as('search');

    cy.get('[data-testid="search-input"]').type('t');
    cy.get('[data-testid="search-input"]').should('have.value', 't');
    cy.url().should('contain', '/?q=t');

    cy.get('[role="alert"]')
      .should('be.visible')
      .should('contain', 'Something went wrong, please try again');
  });

  it('should display the initial search results when search input content is deleted', () => {
    cy.intercept('GET', `https://imdb-api.com/en/API/Search/${api_key}/t`, {
      fixture: 'titles.json',
    }).as('search');

    cy.get('[data-testid="search-input"]').type('t');
    cy.get('[data-testid="search-input"]').should('have.value', 't');
    cy.url().should('contain', '/?q=t');

    cy.get('[data-testid="search-results"]')
      .should('be.visible')
      .within(() => {
        cy.get('[data-testid="search-result"]')
          .should('be.visible')
          .within(() => {
            cy.get('h3').should('contain', 't', { matchCase: false });
          });
      });

    cy.get('[data-testid="search-input"]').clear();
    cy.get('[data-testid="search-input"]').should('have.value', '');
    cy.url().should('not.contain', '/?q=t');

    cy.then(() => {
      cy.get('[data-testid="search-results"]')
        .should('be.visible')
        .within(() => {
          cy.get('[data-testid="search-result"]')
            .should('be.visible')
            .within(() => {
              cy.get('h3').should('contain', 'b', { matchCase: false });
            });
        });
    });
  });
});

export {};
