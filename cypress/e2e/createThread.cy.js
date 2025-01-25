/**
 * - create thread spec
 *   - should display create thread page correctly
 *   - should create thread when title and content are provided
 */

describe('create thread spec', () => {
  beforeEach(() => {
    // login before each test
    cy.visit('http://localhost:5173/');
    cy.get('input[placeholder="Email"]').type('andy@mail.com');
    cy.get('input[placeholder="Password"]').type('123123');
    cy.get('button').contains(/^Login$/).click();

    // verify
    cy.get('nav').contains(/^ForumApp$/).should('be.visible');
    cy.get('span').contains(/^Andy$/).should('be.visible');
    cy.get('button').contains(/^Create Thread$/).should('be.visible');
  });

  it('should display create thread page correctly', () => {
    // click create thread button
    cy.get('button').contains(/^Create Thread$/).click();

    // verify
    cy.get('input[placeholder="Title"]').should('be.visible');
    cy.get('input[placeholder="Category"]').should('be.visible');
    cy.get('textarea[placeholder="Content"]').should('be.visible');
    cy.get('button').contains(/^Post$/).should('be.visible');
  });

  it('should create thread when title and content are provided', () => {
    // click create thread button
    cy.get('button').contains(/^Create Thread$/).click();

    // input title, category and content
    cy.get('input[placeholder="Title"]').type('Thread-1');
    cy.get('input[placeholder="Category"]').type('General');
    cy.get('textarea[placeholder="Content"]').type('Lorem ipsum dolor sit amet.');

    // click post button
    cy.get('button').contains(/^Post$/).click();

    // verify
    cy.get('.card-title').contains('Thread-1').should('be.visible');
    cy.get('.card-text').contains('Lorem ipsum dolor sit amet.').should('be.visible');
  });
});