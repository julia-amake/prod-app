import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// На боевом проекте так не делать!!!
export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 300);
}));
