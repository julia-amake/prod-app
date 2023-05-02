import { createAsyncThunk } from '@reduxjs/toolkit';

import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

import { Article, ArticleType } from '@/entities/Article';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import {
    getArticlesPageLimit,
    getArticlesPageNumber,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
    >(
        'article/fetchArticlesList',
        async (props, thunkAPI) => {
            const { rejectWithValue, getState, extra } = thunkAPI;

            const page = getArticlesPageNumber(getState());
            const limit = getArticlesPageLimit(getState());
            const order = getArticlesPageOrder(getState());
            const sort = getArticlesPageSort(getState());
            const search = getArticlesPageSearch(getState());
            const type = getArticlesPageType(getState());

            try {
                addQueryParams({
                    sort, order, search, type,
                });
                const response = await extra.api.get<Article[]>(
                    '/articles',
                    {
                        params: {
                            _expand: 'user',
                            _page: page,
                            _limit: limit,
                            _sort: sort,
                            _order: order,
                            q: search,
                            type_like: type === ArticleType.ALL ? undefined : type,
                        },
                    },
                );
                // fake error
                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
