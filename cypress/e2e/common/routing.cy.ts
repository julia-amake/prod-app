import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('The user is not authorized', () => {
        it('Visit the main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Go to the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Go to the articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Go to the article details page', () => {
            cy.visit('/articles/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Go to the admin panel page', () => {
            cy.visit('/admin');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Visit a non-existent page', () => {
            cy.visit('/fhjfhj');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('The user is authorized', () => {
        beforeEach(() => {
            cy.login('user', '123');
        });

        it('Go to the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Go to the articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
        it('Go to the article details page', () => {
            cy.visit('/articles/1');
            cy.get(selectByTestId('ArticleDetailsPage')).should('exist');
        });
        it('Go to the admin panel page', () => {
            cy.visit('/admin');
            cy.get(selectByTestId('ForbiddenPage')).should('exist');
        });
    });

    describe('The admin is authorized', () => {
        it('Go to the admin panel page', () => {
            cy.login('admin', '123');
            cy.visit('/admin');
            cy.get(selectByTestId('AdminPanelPage')).should('exist');
        });
    });
});
