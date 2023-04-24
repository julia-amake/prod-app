import { Story } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { ArticleDetailsReducer } from '@/entities/Article';
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slice/addCommentFormSlice';
import { articleDetailsPageReducers } from '@/pages/ArticleDetailsPage/model/slice';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: ArticleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducers,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers } as ReducersMapObject<StateSchema>}
    >
        <StoryComponent />
    </StoreProvider>
);
