import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types/profile';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileData = createSelector(
    getProfileState,
    (profile: ProfileSchema) => profile.data,
);
