import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { ArticleSortSelector } from '@/features/articleSortSelector';
import { ArticleTypeTabs } from '@/features/articleTypeTabs';
import useArticlesFilters from '../../../lib/hooks/useArticlesFilters/useArticlesFilters';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import s from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();
    const {
        type,
        onChangeType,
        onChangeSearch,
        onChangeOrder,
        onChangeSort,
        search,
        order,
        sort,
        isLoading,
    } = useArticlesFilters();

    return (
        <div className={cn(s.outer, {}, [className])}>
            <Input
                placeholder={t('Искать статью')}
                value={search}
                className={s.search}
                onChange={onChangeSearch}
            />
            <div className={s.filters}>
                <ArticleTypeTabs
                    onChangeType={onChangeType}
                    value={type}
                    isLoading={isLoading}
                />
                <div className={s.sorts}>
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ViewSelectorContainer />
                </div>
            </div>
        </div>
    );
});
