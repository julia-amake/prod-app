import React, { memo, useMemo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import s from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    className?: string;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        sort,
        order,
        onChangeOrder,
        onChangeSort,
        className = '',
    } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('По возрастанию'),
            },
            {
                value: 'desc',
                content: t('По убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('Дата создания'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('Просмотры'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('Название'),
            },
        ],
        [t],
    );

    return (
        <div className={cn(s.outer, {}, [className])}>
            <Select
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
                size="S"
            />
            <Select
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
                size="S"
            />
        </div>
    );
});
