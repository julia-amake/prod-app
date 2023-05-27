import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleView } from '@/entities/Article';
import { ArticleViewSelector } from '@/features/articleViewSelector';
import { getArticlesPageView } from '../../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../../model/slice/articlesPageSlice';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className = '' } = props;
        const view = useSelector(getArticlesPageView);
        const dispatch = useAppDispatch();

        const onChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlesPageActions.setView(view));
            },
            [dispatch],
        );

        return (
            <ArticleViewSelector
                className={className}
                view={view}
                onViewClick={onChangeView}
            />
        );
    },
);
