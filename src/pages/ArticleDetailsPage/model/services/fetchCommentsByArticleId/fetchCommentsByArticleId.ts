import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsBrArticleId = createAsyncThunk<
    Comment[],
    string | undefined, // articleId
    ThunkConfig<string>
    >(
        'article/fetchCommentsBrArticleId',
        async (articleId, thunkAPI) => {
            const { rejectWithValue, extra } = thunkAPI;

            if (!articleId) {
                return rejectWithValue('error');
            }

            try {
                const response = await extra.api.get<Comment[]>(
                    '/comments',
                    {
                        params: {
                            articleId,
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
