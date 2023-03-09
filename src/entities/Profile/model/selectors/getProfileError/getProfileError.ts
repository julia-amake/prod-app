import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types/profile';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileError = createSelector(
    getProfileState,
    (profile: ProfileSchema) => profile.error,
);
