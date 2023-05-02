import { FC, lazy } from 'react';

import { AddCommentFormProps } from './AddCommentForm';

// На боевом проекте так не делать!!!
export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
