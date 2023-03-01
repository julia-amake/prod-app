import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginIsLoading = createSelector(
    getLoginState,
    (loginForm: LoginSchema) => loginForm?.isLoading || false,
);
