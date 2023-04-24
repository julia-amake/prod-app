import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string, // id
    ThunkConfig<string>
    >(
        'article/fetchArticleById',
        async (id, thunkAPI) => {
            const { rejectWithValue, extra } = thunkAPI;

            try {
                const response = await extra.api.get<Article>(`/articles/${id}`, {
                    params: {
                        _expand: 'user',
                    },
                });
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
