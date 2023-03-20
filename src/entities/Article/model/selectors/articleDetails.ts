import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { initialState } from '../slice/articleDetailsSlice';

export const getArticleDetails = (state: StateSchema) => state.articleDetails || initialState;

export const getArticleDetailsData = createSelector(
    getArticleDetails,
    (state: ArticleDetailsSchema) => state.data,
);

export const getArticleDetailsIsLoading = createSelector(
    getArticleDetails,
    (state: ArticleDetailsSchema) => state.isLoading,
);

export const getArticleDetailsError = createSelector(
    getArticleDetails,
    (state: ArticleDetailsSchema) => state.error,
);
