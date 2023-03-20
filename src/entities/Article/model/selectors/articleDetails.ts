import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../slice/articleDetailsSlice';

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data || initialState.data;
export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading || initialState.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error || initialState.error;
