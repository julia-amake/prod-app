import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { getArticlesPageIsInitialized } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'article/initArticlesPage',
        async (searchParams, thunkAPI) => {
            const { getState, dispatch } = thunkAPI;
            const inited = getArticlesPageIsInitialized(getState());

            if (inited) return;

            searchParams.forEach((value, key) => {
                // eslint-disable-next-line default-case
                switch (key) {
                case 'order':
                    dispatch(articlesPageActions.setOrder(value as SortOrder));
                    break;
                case 'sort':
                    dispatch(articlesPageActions.setSort(value as ArticleSortField));
                    break;
                case 'search':
                    dispatch(articlesPageActions.setSearch(value));
                    break;
                case 'type':
                    dispatch(articlesPageActions.setType(value as ArticleType));
                    break;
                }
            });

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        },
    );
