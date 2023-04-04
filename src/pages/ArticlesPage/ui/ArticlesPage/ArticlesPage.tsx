import React, { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import Informer from 'shared/ui/Informer/Informer';
import { useSearchParams } from 'react-router-dom';
import Heading from 'shared/ui/Heading/Heading';
import { useTranslation } from 'react-i18next';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlesPageError, getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import s from './ArticlesPage.module.scss';

const reducersList: ReducersList = {
    articlesPage: articlesPageReducer,
};

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const hasMore = useSelector(getArticlesPageHasMore);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    useDynamicModuleLoader(reducersList, false);

    const onLoadNextPart = useCallback(
        () => {
            if (!hasMore) return;
            dispatch(fetchNextArticlesPage());
        },
        [hasMore, dispatch],
    );

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return (
            <Page>
                <Informer title={error} isCentered />
            </Page>
        );
    }

    return (
        <Page
            onScrollEnd={!isLoading ? onLoadNextPart : undefined}
            className={className}
        >
            <Heading content={t('Статьи')} className={s.title} />
            <ArticlesPageFilters className={s.filters} />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                view={view}
            />
        </Page>
    );
});

export default ArticlesPage;
