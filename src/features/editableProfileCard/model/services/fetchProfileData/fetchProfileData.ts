import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string | undefined, // profileId
    ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
        const response = await extra.api.get<Profile>(`/profile/${profileId}`);
        // fake error
        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
