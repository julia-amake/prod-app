import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../serveces/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';

export const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: null,
    data: null,
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
