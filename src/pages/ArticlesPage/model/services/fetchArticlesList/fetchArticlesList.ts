import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
    >(
        'article/fetchArticlesList',
        async (props, thunkAPI) => {
            const { rejectWithValue, getState, extra } = thunkAPI;

            const { page } = props;
            const limit = getArticlesPageLimit(getState());

            try {
                const response = await extra.api.get<Article[]>(
                    '/articles',
                    {
                        params: {
                            _expand: 'user',
                            _page: page,
                            _limit: limit,
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
