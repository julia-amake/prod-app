import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginError = createSelector(
    getLoginState,
    (loginForm: LoginSchema) => loginForm?.error,
);
