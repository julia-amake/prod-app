import { createAsyncThunk } from '@reduxjs/toolkit';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlags } from '../lib/setGetFeatures';

export interface UpdateFeatureFlagsOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
    void, // на выход
    UpdateFeatureFlagsOptions, // на вход
    ThunkConfig<string>
    // eslint-disable-next-line consistent-return
>('updateFeatureFlags', async ({ userId, newFeatures }, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
        // обновляем фичи на сервере, отправляем patch запрос
        await dispatch(
            updateFeatureFlagsMutation({
                userId,
                features: {
                    ...getAllFeatureFlags(),
                    ...newFeatures,
                },
            }),
        );
        // т.к. фичи не реактивные, принудительно обновляем страницу
        window.location.reload();
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
