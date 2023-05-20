import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../../slice/articleDetailsRecommendationsSlice';

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.isLoading ||
    initialState.isLoading;
export const getArticleRecommendationsError = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations?.error || initialState.error;
