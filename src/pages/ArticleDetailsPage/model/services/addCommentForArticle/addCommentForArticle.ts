import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { Comment } from '@/entities/Comment';
import {
    fetchCommentsBrArticleId,
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string, // comment text
    ThunkConfig<string>
    >(
        'articleDetails/addCommentForArticle',
        async (text, thunkAPI) => {
            const {
                dispatch, getState, rejectWithValue, extra,
            } = thunkAPI;

            const userData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !text || !article) {
                return rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article.id,
                    userId: userData.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsBrArticleId(article.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
