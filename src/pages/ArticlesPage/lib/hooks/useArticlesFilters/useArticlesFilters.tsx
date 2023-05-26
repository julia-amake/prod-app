import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import {
    getArticlesPageIsLoading,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../../model/slice/articlesPageSlice';

const useArticlesFilters = () => {
    const search = useSelector(getArticlesPageSearch);
    const dispatch = useAppDispatch();
    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    const debouncedFetchData = useDebounce(fetchData, 500);
    const type = useSelector(getArticlesPageType);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);

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

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(sort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (order: SortOrder) => {
            dispatch(articlesPageActions.setOrder(order));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return {
        search,
        type,
        isLoading,
        sort,
        order,
        onChangeSearch,
        onChangeType,
        onChangeSort,
        onChangeOrder,
    };
};

export default useArticlesFilters;
