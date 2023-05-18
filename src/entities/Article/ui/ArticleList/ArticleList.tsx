import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { Informer, InformerStatuses } from '@/shared/ui/deprecated/Informer';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import s from './ArticleList.module.scss';

interface ArticleListProps {
    articles: Article[];
    view?: ArticleView;
    isLoading?: boolean;
    className?: string;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { articles, view, isLoading, className = '' } = props;

    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={cn(s.outer, {}, [s.informer, className])}>
                <Informer
                    status={InformerStatuses.INFO}
                    title={t('Статьи не найдены')}
                    text={t('Попробуйте изменить параметры поиска')}
                />
            </div>
        );
    }

    return (
        <div
            className={cn(s.outer, { [s.outer_list]: view === ArticleView.LIST }, [className])}
            data-testid="ArticleList"
        >
            {articles?.length
                ? articles.map((article) => (
                      <ArticleListItem
                          article={article}
                          view={view}
                          key={article.id}
                          className={cn(s.item)}
                      />
                  ))
                : null}
            {isLoading &&
                Array.from(Array(view === ArticleView.GRID ? 6 : 3), (_, idx) => (
                    <ArticleListItemSkeleton view={view} className={cn(s.item)} key={idx} />
                ))}
        </div>
    );
});
