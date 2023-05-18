let currArticleId: string = '';

describe('The user opened the article details page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currArticleId = article.id;
            cy.visit(`articles/${currArticleId}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currArticleId);
    });

    it('The article loaded successfully', () => {
        cy.getByTestId('ArticleDetails.Header').should('exist');
    });

    it('Recommendations section loaded successfully', () => {
        cy.getByTestId('ArticleRecommendationsList')
            .should('exist')
            .within(() => {
                cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 1);
            });
    });

    it('The user leaves a comment', () => {
        cy.getByTestId('ArticleDetails.Header').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('e2e test comment');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('The user rates the article', () => {
        cy.getByTestId('ArticleDetails.Header').should('exist');
        const card = cy.getByTestId('RatingCard').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'test feedback');
        card.within(() => {
            cy.get('[data-selected=true]').should('have.length', 5);
        });
    });
});
