import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    string,
    ThunkConfig<string>
>('article/fetchArticleRecommendations', async (excludeId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _limit: 3,
                _expand: 'user',
                _id_ne: excludeId,
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
});
