import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { StickyContentLayout } from '@/shared/layouts';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Heading } from '@/shared/ui/deprecated/Heading';
import { PageContent } from '@/shared/ui/deprecated/Page';
import { Page } from '@/widgets/Page';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { FiltersContainer } from './FiltersContainer/FiltersContainer';
import { ViewSelectorContainer } from './ViewSelectorContainer/ViewSelectorContainer';
import s from './ArticlesPage.module.scss';

const reducersList: ReducersList = {
    articlesPage: articlesPageReducer,
};

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const hasMore = useSelector(getArticlesPageHasMore);
    const [searchParams] = useSearchParams();

    useDynamicModuleLoader(reducersList, false);

    const onLoadNextPart = useCallback(() => {
        if (!hasMore) return;
        dispatch(fetchNextArticlesPage());
    }, [hasMore, dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Page
                    onScrollEnd={!isLoading ? onLoadNextPart : undefined}
                    className={className}
                    dataTestid="ArticlesPage"
                >
                    <StickyContentLayout
                        content={
                            <>
                                <ArticlesInfiniteList />
                                {/* <ArticlePageGreeting /> */}
                            </>
                        }
                        left={<ViewSelectorContainer />}
                        right={<FiltersContainer />}
                    />
                </Page>
            }
            off={
                <Page
                    onScrollEnd={!isLoading ? onLoadNextPart : undefined}
                    className={className}
                    dataTestid="ArticlesPage"
                >
                    <PageContent>
                        <Heading content={t('Статьи')} className={s.title} />
                        <ArticlesPageFilters className={s.filters} />
                        <ArticlesInfiniteList />
                        {/* <ArticlePageGreeting /> */}
                    </PageContent>
                </Page>
            }
        />
    );
});

export default ArticlesPage;
