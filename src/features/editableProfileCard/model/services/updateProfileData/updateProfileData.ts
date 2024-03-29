import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/validate';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void, // profileId
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { getState, rejectWithValue, extra } = thunkAPI;
    const formData = getProfileFormData(getState());
    const errors = validateProfileData(formData);

    if (errors.length > 0) {
        return rejectWithValue(errors);
    }

    try {
        const response = await extra.api.put<Profile>(
            `/profile/${formData?.id}`,
            formData,
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
