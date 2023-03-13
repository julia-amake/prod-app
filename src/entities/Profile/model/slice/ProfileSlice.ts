import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileData } from '../serveces/updateProfileData/updateProfileData';
import { fetchProfileData } from '../serveces/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profile';

export const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: '',
    data: null,
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, action:PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.formData = {
                ...state.formData,
                ...action.payload,
            };
        },
        resetFormData: (state) => {
            state.readonly = true;
            state.formData = state.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = '';
                state.isLoading = true;
                state.readonly = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
