import { StateSchema } from '@/app/providers/StoreProvider';

import { articlesPageInitialState as initialState } from '../consts/consts';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || initialState.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error || initialState.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || initialState.view;
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page || initialState.page;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || initialState.limit;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore ?? initialState.hasMore;
export const getArticlesPageIsInitialized = (state: StateSchema) => state.articlesPage?._isInitialized
    ?? initialState._isInitialized;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order || initialState.order;
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort || initialState.sort;
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search || initialState.search;
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type || initialState.type;
