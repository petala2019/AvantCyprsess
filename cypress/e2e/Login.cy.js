describe('Login - Avantsoft', () => {
  const baseUrl = 'https://qe-test.recrutamento.avantsoft.com.br';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Deve realizar login com sucesso', () => {
    cy.get('#email').type(Cypress.env('email'));
    cy.get('#password').type(Cypress.env('senha'), { log: false });
    cy.get('button[type="submit"]').click();
  });

  it('Deve exibir erro com credenciais inválidas', () => {
    cy.get('#email').type('usuario@invalido.com');
    cy.get('#password').type('senhaErrada', { log: false });
    cy.get('button[type="submit"]').click();

    //Valide a mensagem de erro conforme o sistema retornar
    cy.contains('Credenciais inválidas').should('be.visible');
  });
});

