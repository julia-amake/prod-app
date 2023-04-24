import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { profileInitialState } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState: profileInitialState,
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
            state.validateErrors = [];
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
                state.isLoading = true;
                state.validateErrors = [];
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.formData = action.payload;
                state.validateErrors = [];
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            });
    },
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
