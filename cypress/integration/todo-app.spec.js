/// <reference types="cypress"/>
 
describe('Todo application', () => {
    it('should log any accessibility failures', () => {
      cy.visit('https://todomvc.com/examples/react/dist/');
      cy.injectAxe();
      cy.checkA11y();
    });
   });