import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@/shared/assets/icons/redesigned/Search.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ArticleSortSelector } from '@/features/articleSortSelector';
import { ArticleTypeTabs } from '@/features/articleTypeTabs';
import s from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
    searchValue?: string | number;
    searchOnChange?: (value: string) => void;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    typeValue: ArticleType;
    onChangeType: (type: ArticleType) => void;
    typeIsLoading?: boolean;
    className?: string;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        searchValue,
        searchOnChange,
        typeValue,
        typeIsLoading,
        onChangeType,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
        className = '',
    } = props;
    const { t } = useTranslation();

    return (
        <VStack as={Card} className={cn(s.outer, {}, [className])} gap="32">
            <Input
                placeholder={t('Найти')}
                value={searchValue}
                className={s.search}
                onChange={searchOnChange}
                icon={{
                    element: SearchIcon,
                    position: 'left',
                }}
                size="s"
            />
            <ArticleTypeTabs
                onChangeType={onChangeType}
                value={typeValue}
                isLoading={typeIsLoading}
            />
            <ArticleSortSelector
                order={order}
                sort={sort}
                onChangeOrder={onChangeOrder}
                onChangeSort={onChangeSort}
            />
        </VStack>
    );
});
