import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ReducersList, useDynamicModuleLoader } from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { Informer } from '@/shared/ui/Informer';
import { PageContent } from '@/shared/ui/Page';

import { ArticleDetails, getArticleDetailsIsLoading } from '@/entities/Article';

import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';

import { Page } from '@/widgets/Page';

import { articleDetailsPageReducers } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducersList:ReducersList = {
    articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className = '' } = props;

    const { t } = useTranslation('article');
    const { id } = useParams();

    useDynamicModuleLoader(reducersList, true);

    const isLoading = useSelector(getArticleDetailsIsLoading);

    if (!id) {
        return (
            <Page className={className}>
                <Informer title={t('Статья не найдена')} isCentered />
            </Page>
        );
    }

    return (
        <Page className={className}>
            <ArticleDetailsPageHeader />
            <PageContent>
                <ArticleDetails id={id} isLoading={isLoading} />
                <ArticleRating articleId={id} />
                <ArticleDetailsComments id={id} isLoading={isLoading} />
                <ArticleRecommendationsList id={id} />
            </PageContent>
        </Page>
    );
});

export default ArticleDetailsPage;
