/**
 * - leaderboard spec
 *   - should display leaderboard page correctly
 */

describe('leaderboard spec', () => {
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
    // navigate to leaderboard page
    cy.get('li').contains(/^Leaderboard$/).click();

    // verify
    cy.get('h3').contains(/^Leaderboard$/).should('be.visible');
    cy.get('th').contains(/^#$/).should('be.visible');
    cy.get('th').contains(/^Name$/).should('be.visible');
    cy.get('th').contains(/^Score$/).should('be.visible');
  });
});