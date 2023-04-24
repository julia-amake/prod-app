import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import Informer from '@/shared/ui/Informer/Informer';
import { getArticles } from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesInfiniteListProps {
    className?: string;
}

export const ArticlesInfiniteList = memo((props: ArticlesInfiniteListProps) => {
    const {
        className = '',
    } = props;

    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);

    if (error) return <Informer title={error} isCentered />;
    return (
        <ArticleList
            articles={articles}
            isLoading={isLoading}
            view={view}
            className={className}
        />
    );
});
