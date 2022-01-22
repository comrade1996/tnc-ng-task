describe('Test dynamic quiz builder feature ', () => {
  it('check the add question functions', () => {
    cy.visit('/')
    cy.get('[data-cy=add-question]').click()

    cy.get('[data-cy=question-input]')
      .should('be.visible')
  })
})
