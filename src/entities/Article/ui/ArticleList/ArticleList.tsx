import React, { memo } from 'react';
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

    const renderArticle = (article: Article, idx: number) => {
        const isExtra = idx === 0;

        return (
            <ArticleListItem
                article={article}
                view={view}
                key={article.id}
                className={cn(s.item)}
                isExtra={isExtra}
            />
        );
    };

    return (
        <div className={cn(s.outer, { [s.outer_list]: view === ArticleView.LIST }, [className])}>
            {articles.length
                ? articles.map((article, idx) => renderArticle(article, idx))
                : null}
            {isLoading && (
                Array.from(Array(view === ArticleView.GRID ? 11 : 3), (_, idx) => (
                    <ArticleListItemSkeleton
                        view={view}
                        isExtra={idx === 0}
                        className={cn(s.item)}
                        key={idx}
                    />
                ))
            )}
        </div>
    );
});
