import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/shared/consts/localstorage';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';

export const initAuthData = createAsyncThunk<
    User, // на выход
    void, // на вход
    ThunkConfig<string>
>('user/initAuthData', async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) return rejectWithValue('no user id');

    try {
        const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

        if (!response) {
            return rejectWithValue('no user');
        }

        localStorage.setItem(
            LOCAL_STORAGE_LAST_DESIGN_KEY,
            response?.features?.isAppRedesigned ? 'new' : 'old',
        );

        return response;
    } catch (e) {
        return rejectWithValue('error');
    }
});
