import { lazy, FC } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

// На боевом проекте так не делать!!!
export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 300);
}));
