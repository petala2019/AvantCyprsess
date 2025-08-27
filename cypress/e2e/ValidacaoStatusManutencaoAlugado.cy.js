describe('Carros - Validação de carro alugado', () => {
  const baseUrl = 'https://qe-test.recrutamento.avantsoft.com.br';

  beforeEach(() => {
    cy.visit(baseUrl);
    // Login
    cy.get('#email').type(Cypress.env('email'));
    cy.get('#password').type(Cypress.env('senha'), { log: false });
    cy.get('button[type="submit"]').click();
  });

  it('Deve validar que o primeiro carro está alugado', () => {
     cy.get(':nth-child(1) > .flex-col > .flex > .inline-flex').should('contain.text', 'Alugado'); // verifica se contém o texto "Alugado"
  });

   it('Deve validar carro está em manutenção', () => {
    cy.get(':nth-child(5) > .flex-col > .flex > .inline-flex').should('contain.text', 'Manutenção');
  });
});

