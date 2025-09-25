// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('esperarSpinnerSiExiste', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.la-ball-clip-rotate-pulse').length > 0) {
      cy.get('.la-ball-clip-rotate-pulse', { timeout: 20000 }).should('not.exist');
    }
  });
});

Cypress.Commands.add('validarMensajeExito', (mensaje) => {
  cy.contains('span', mensaje).should('exist');
  cy.get('button[name="btn-accept"]').click();
});
