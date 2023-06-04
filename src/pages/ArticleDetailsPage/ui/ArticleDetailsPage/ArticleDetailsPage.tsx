import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { StickyContentLayout } from '@/shared/layouts';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import {
    ReducersList,
    useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { Informer as InformerDeprecated } from '@/shared/ui/deprecated/Informer';
import { PageContent } from '@/shared/ui/deprecated/Page';
import { Informer as InformerRedesigned } from '@/shared/ui/redesigned/Informer';
import { ArticleDetails, getArticleDetailsIsLoading } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducers } from '../../model/slice';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducersList: ReducersList = {
    articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className = '' } = props;
    const { t } = useTranslation('article');
    const { id } = useParams();
    const isLoading = useSelector(getArticleDetailsIsLoading);

    useDynamicModuleLoader(reducersList, true);

    const Informer = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => InformerRedesigned,
        off: () => InformerDeprecated,
    });

    if (!id) {
        return (
            <Page className={className}>
                <Informer title={t('Статья не найдена')} isCentered />
            </Page>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    content={
                        <Page
                            className={className}
                            dataTestid="ArticleDetailsPage"
                        >
                            <DetailsContainer />
                        </Page>
                    }
                    right={<AdditionalInfoContainer />}
                />
            }
            off={
                <Page className={className} dataTestid="ArticleDetailsPage">
                    <ArticleDetailsPageHeader />
                    <PageContent>
                        <ArticleDetails id={id} isLoading={isLoading} />
                        <ToggleFeatures
                            feature="isArticleRatingEnabled"
                            on={<ArticleRating articleId={id} />}
                            off={<div>{t('Рейтинг скоро появится')}</div>}
                        />
                        <ArticleDetailsComments id={id} isLoading={isLoading} />
                        <ArticleRecommendationsList id={id} />
                    </PageContent>
                </Page>
            }
        />
    );
});

export default ArticleDetailsPage;
