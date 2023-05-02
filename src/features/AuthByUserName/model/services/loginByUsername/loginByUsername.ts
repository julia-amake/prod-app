import { createAsyncThunk } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localstorage';

import { User, userActions } from '@/entities/User';

import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
    >(
        'login/loginByUsername',
        async (authData, thunkAPI) => {
            const { dispatch, rejectWithValue, extra } = thunkAPI;

            try {
                const response = await extra.api.post<User>('/login', authData);

                if (!response.data) {
                    throw new Error();
                }

                // localStorage только для имитации бекенда, на проде так делать нельзя
                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

                dispatch(userActions.setAuthData(response.data));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
