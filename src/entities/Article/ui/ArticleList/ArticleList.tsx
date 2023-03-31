import React, { memo, useCallback } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import s from './ArticleList.module.scss';

interface ArticleListProps {
    articles: Article[];
    view?: ArticleView;
    isLoading?: boolean;
    className?: string;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        articles,
        view,
        isLoading,
        className = '',
    } = props;

    const isExtra = useCallback((num:number) => {
        const currNum = num + 1;
        return currNum === 1 || currNum % 6 === 0;
    }, []);

    return (
        <div className={cn(s.outer, { [s.outer_list]: view === ArticleView.LIST }, [className])}>
            {articles.length
                ? articles.map((article) => (
                    <ArticleListItem
                        article={article}
                        view={view}
                        key={article.id}
                        className={cn(s.item)}
                    />
                ))
                : null}
            {isLoading && (
                Array.from(Array(view === ArticleView.GRID ? 6 : 3), (_, idx) => (
                    <ArticleListItemSkeleton
                        view={view}
                        className={cn(s.item)}
                        key={idx}
                    />
                ))
            )}
        </div>
    );
});
