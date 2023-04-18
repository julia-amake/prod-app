import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

export const articlesPageInitialState: ArticlesPageSchema = {
    isLoading: false,
    error: '',
    view: ArticleView.GRID,
    page: 1,
    hasMore: true,
    entities: {},
    ids: [],
    limit: 6,
    order: 'desc',
    sort: ArticleSortField.CREATED,
    search: '',
    type: ArticleType.ALL,
    _isInitialized: false,
};
