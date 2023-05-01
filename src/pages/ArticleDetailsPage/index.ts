export {
    fetchArticleRecommendations,
} from './model/services/FetchArticleRecommendations/FetchArticleRecommendations';

export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
export type { ArticleDetailsPageSchema } from './model/types';
export { getCanEditArticle } from './model/selectors/article/article';
