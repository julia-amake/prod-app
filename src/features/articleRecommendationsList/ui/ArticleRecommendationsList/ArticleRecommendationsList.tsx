import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { PageSection } from 'shared/ui/PageSection/PageSection';
import Preloader from 'shared/ui/Preloader/Preloader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/services/FetchArticleRecommendations/FetchArticleRecommendations';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    id: string;
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const {
        id,
        className = '',
    } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading, error } = useArticleRecommendationsList({ limit: 3, excluded: id });
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations(id));
    }, [id]);

    if (isLoading) return <Preloader />;
    if (error) return null;

    return (
        <PageSection
            title={t('Рекомендуем')}
            className={className}
        >
            <ArticleList articles={articles} />
        </PageSection>
    );
});
