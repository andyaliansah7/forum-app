/**
 * - login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email is not valid
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display login page correctly', () => {
    // verify
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // click button when email is empty
    cy.get('button').contains(/^Login$/).click();

    // verify
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // input email
    cy.get('input[placeholder="Email"]').type('admin@mail.com');

    // click button when password is empty
    cy.get('button').contains(/^Login$/).click();

    // verify
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email is not valid', () => {
    // input email
    cy.get('input[placeholder="Email"]').type('admin');

    // click button when password is empty
    cy.get('button').contains(/^Login$/).click();

    // verify
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display alert when email and password are wrong', () => {
    // input email and password
    cy.get('input[placeholder="Email"]').type('admin@mail.com');
    cy.get('input[placeholder="Password"]').type('123456');

    // click button when email and password is wrong
    cy.get('button').contains(/^Login$/).click();

    // verify
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // input email and password
    cy.get('input[placeholder="Email"]').type('andy@mail.com');
    cy.get('input[placeholder="Password"]').type('123123');

    // click button when email and password is correct
    cy.get('button').contains(/^Login$/).click();

    // verify
    cy.get('nav').contains(/^ForumApp$/).should('be.visible');
    cy.get('span').contains(/^Andy$/).should('be.visible');
    cy.get('button').contains(/^Create Thread$/).should('be.visible');
  });
});