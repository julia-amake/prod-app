import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: '12 приемов работы с&nbsp;JavaScript, которых нет в&nbsp;большинстве туториалов',
    subtitle: 'В этой статье я покажу 12 отличных способов улучшить и&nbsp;ускорить свой JavaScript-код.',
    image: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/727/f54/666/727f54666075840f2c6a6d521f39e8f1.jpeg',
    views: 1052,
    createdAt: '16.03.2023',
    userId: '1',
    type: 'IT',
    blocks: [],
};

export const createArticle = (article?: Article) =>
    cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'some' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'some' },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
