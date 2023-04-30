export {
    fetchArticleRecommendations,
} from './model/services/FetchArticleRecommendations/FetchArticleRecommendations';

export { articleDetailsPageReducers } from './model/slice';
export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPage.async';
export type { ArticleDetailsPageSchema } from './model/types';
export { getCanEditArticle } from './model/selectors/article/article';
