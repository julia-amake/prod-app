describe('The user opened the articles page', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });

    it('Successfully loaded articles', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
