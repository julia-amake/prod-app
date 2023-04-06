import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
        'article/fetchArticleRecommendations',
        async (_, thunkAPI) => {
            const { rejectWithValue, extra } = thunkAPI;

            try {
                const response = await extra.api.get<Article[]>(
                    '/articles',
                    {
                        params: {
                            _limit: 3,
                            _expand: 'user',
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
