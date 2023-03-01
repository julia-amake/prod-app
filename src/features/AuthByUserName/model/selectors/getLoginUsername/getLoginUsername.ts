import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName';
import { getLoginState } from '../getLoginState/getLoginState';
import { initialState } from '../../slice/loginSlice';

export const getLoginUsername = createSelector(
    getLoginState,
    (loginForm: LoginSchema) => loginForm?.username || initialState.username,
);
