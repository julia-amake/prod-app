import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings/jsonSettings';
import { JsonSettings } from '../types/jsonSettings';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings, // на вход
    JsonSettings, // на выход
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    const userData = getUserAuthData(getState());
    const currSettings = getJsonSettings(getState());

    if (!userData) return rejectWithValue('no user data');

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap(); // разворачиваем результат

        if (!response.jsonSettings) {
            return rejectWithValue('no jsonSettings data');
        }

        return response.jsonSettings;
    } catch (e) {
        return rejectWithValue('error');
    }
});
