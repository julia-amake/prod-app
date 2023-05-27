import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox, ListBoxOption } from '@/shared/ui/redesigned/Popups/ui';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleSortField } from '../../../../entities/Article/model/consts/consts';
import s from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    className?: string;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { sort, order, onChangeOrder, onChangeSort, className = '' } = props;

    const { t } = useTranslation();

    const orderOptions = toggleFeatures({
        name: 'isAppRedesigned',
        on: () =>
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useMemo<ListBoxOption<SortOrder>[]>(
                () => [
                    {
                        value: 'asc',
                        title: t('По возрастанию'),
                    },
                    {
                        value: 'desc',
                        title: t('По убыванию'),
                    },
                ],
                // eslint-disable-next-line
                [t],
            ),
        off: () =>
            // @ts-ignore
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useMemo<SelectOption<SortOrder>[]>(
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
                // eslint-disable-next-line
                [t],
            ),
    });

    const sortFieldOptions = toggleFeatures({
        name: 'isAppRedesigned',
        on: () =>
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useMemo<ListBoxOption<ArticleSortField>[]>(
                () => [
                    {
                        value: ArticleSortField.CREATED,
                        title: t('Дата создания'),
                    },
                    {
                        value: ArticleSortField.VIEWS,
                        title: t('Просмотры'),
                    },
                    {
                        value: ArticleSortField.TITLE,
                        title: t('Название'),
                    },
                ],
                // eslint-disable-next-line
                [t],
            ),
        off: () =>
            // @ts-ignore
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useMemo<SelectOption<ArticleSortField>[]>(
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
                // eslint-disable-next-line
                [t],
            ),
    });

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack className={className} gap="8" align="start">
                    <Text content={t('Сортировать по:')} margin="none" />
                    <ListBox
                        options={sortFieldOptions}
                        value={sort}
                        onChange={onChangeSort}
                        size="l"
                    />
                    <ListBox
                        options={orderOptions}
                        value={order}
                        onChange={onChangeOrder}
                        size="l"
                    />
                </VStack>
            }
            off={
                <div className={cn(s.outer, {}, [className])}>
                    <Select
                        // @ts-ignore
                        options={sortFieldOptions}
                        value={sort}
                        onChange={onChangeSort}
                        size="S"
                    />
                    <Select
                        // @ts-ignore
                        options={orderOptions}
                        value={order}
                        onChange={onChangeOrder}
                        size="S"
                    />
                </div>
            }
        />
    );
});
