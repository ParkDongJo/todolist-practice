describe('Smoke Test', () => {
  it ('Makes sure the welcome message up!', () => {
    cy.visit('http://localhost:60046')
      .contains('Hello. world!');
  })
})