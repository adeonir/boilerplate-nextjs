describe('Boilerplate', () => {
  it('should render correctly', () => {
    cy.visit('http://localhost:3000')

    cy.findAllByRole('heading').should('have.length', 2)

    cy.contains('Next.js Boilerplate')
    cy.contains('Next.js, TypeScript, Tailwind, Storybook, Vitest, Cypress and Testing-Library')
  })
})
