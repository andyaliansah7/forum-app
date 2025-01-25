/**
 * - thread detail spec
 *   - should display thread detail page correctly
 *   - should mark as liked when like button is clicked
 *   - should neutralize when like button is clicked again
 *   - should mark as disliked when dislike button is clicked
 *   - should neutralize when dislike button is clicked again
 *   - should create comment when comment are provided
 */

describe('thread detail spec', () => {
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

    cy.get('.card-title').contains('Thread-1').should('be.visible');
    cy.get('.card-text').contains('Lorem ipsum dolor sit amet.').should('be.visible');
  });

  it('should display thread detail page correctly', () => {
    // click thread
    cy.get('.card-title').contains('Thread-1').click();

    // verify
    cy.get('.card-title').contains('Thread-1').should('be.visible');
    cy.get('.card-text').contains('Lorem ipsum dolor sit amet.').should('be.visible');
    cy.get('button.btn.btn-sm.btn-outline-primary').should('be.visible');
    cy.get('button.btn.btn-sm.btn-outline-danger').should('be.visible');
    cy.get('textarea[placeholder="Comment"]').should('be.visible');
    cy.get('button').contains(/^Post$/).should('be.visible');
  });

  it('should mark as liked when like button is clicked', () => {
    // click thread
    cy.get('.card-title').contains('Thread-1').click();

    // click button like
    cy.get('button.btn.btn-sm.btn-outline-primary').first().click();

    // verify
    cy.get('button.btn.btn-sm.btn-primary').first().should('be.visible');
    cy.get('button.btn.btn-sm.btn-outline-danger').first().should('be.visible');
  });

  it('should mark as disliked when dislike button is clicked', () => {
    // click thread
    cy.get('.card-title').contains('Thread-1').click();

    // click button dislike
    cy.get('button.btn.btn-sm.btn-outline-danger').first().click();

    // verify
    cy.get('button.btn.btn-sm.btn-outline-primary').first().should('be.visible');
    cy.get('button.btn.btn-sm.btn-danger').first().should('be.visible');
  });

  it('should create comment when comment are provided', () => {
    // click thread
    cy.get('.card-title').contains('Thread-1').click();

    // input comment
    cy.get('textarea[placeholder="Comment"]').type('The best comment ever.');

    // click post button
    cy.get('button').contains(/^Post$/).click();

    // verify
    cy.get('.card-text').contains('The best comment ever.').should('be.visible');
  });
});