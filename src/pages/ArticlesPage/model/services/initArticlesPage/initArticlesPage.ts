import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageIsInitialized } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'article/initArticlesPage',
        async (_, thunkAPI) => {
            const { getState, dispatch } = thunkAPI;
            const isInitialized = getArticlesPageIsInitialized(getState());

            if (!isInitialized) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({ page: 1 }));
            }
        },
    );
