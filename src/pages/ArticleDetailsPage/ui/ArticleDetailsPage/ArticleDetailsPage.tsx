import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import Informer from 'shared/ui/Informer/Informer';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import { Page } from 'widgets/Page/Page';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { PageContent } from 'shared/ui/Page/PageContent/PageContent';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducers } from '../../model/slice';

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
                <ArticleDetailsComments id={id} isLoading={isLoading} />
                <ArticleRecommendationsList id={id} />
            </PageContent>
        </Page>
    );
});

export default ArticleDetailsPage;
