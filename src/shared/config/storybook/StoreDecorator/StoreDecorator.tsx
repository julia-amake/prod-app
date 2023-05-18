import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { ReducersList } from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { ArticleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articleDetailsPageReducers } from '@/pages/ArticleDetailsPage/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: ArticleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducers,
    articlesPage: articlesPageReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state as StateSchema}
                asyncReducers={
                    {
                        ...defaultAsyncReducers,
                        ...asyncReducers,
                    } as ReducersMapObject<StateSchema>
                }
            >
                <StoryComponent />
            </StoreProvider>
        );
