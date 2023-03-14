import { createSelector } from '@reduxjs/toolkit';
import { ProfileSchema } from '../../types/profile';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileValidateErrors = createSelector(
    getProfileState,
    (profile: ProfileSchema) => profile.validateErrors,
);
