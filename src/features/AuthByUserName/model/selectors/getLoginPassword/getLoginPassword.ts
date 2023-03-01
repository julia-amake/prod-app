import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUserName';
import { getLoginState } from '../getLoginState/getLoginState';
import { initialState } from '../../slice/loginSlice';

export const getLoginPassword = createSelector(
    getLoginState,
    (loginForm: LoginSchema) => loginForm?.password || initialState.password,
);
