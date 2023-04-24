import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/classNames';
import {
    ArticleSortField,
    ArticleSortSelector, ArticleType,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Input from '@/shared/ui/Input/Input';
import { SortOrder } from '@/shared/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageIsLoading,
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
    getArticlesPageView,
} from '../../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../../model/slice/articlesPageSlice';
import s from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();

    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const dispatch = useAppDispatch();

    const fetchData = useCallback(
        () => {
            dispatch(fetchArticlesList({ replace: true }));
        },
        [dispatch],
    );

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [fetchData, dispatch],
    );

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlesPageActions.setOrder(order));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(sort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [debouncedFetchData, dispatch],
    );

    const onChangeType = useCallback(
        (type: ArticleType) => {
            dispatch(articlesPageActions.setType(type));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [fetchData, dispatch],
    );

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
                    <ArticleViewSelector
                        view={view}
                        onViewClick={onChangeView}
                    />
                </div>
            </div>
        </div>
    );
});
