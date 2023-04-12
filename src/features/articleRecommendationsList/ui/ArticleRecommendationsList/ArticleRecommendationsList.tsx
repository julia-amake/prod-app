import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { PageSection } from 'shared/ui/PageSection/PageSection';
import Preloader from 'shared/ui/Preloader/Preloader';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const {
        className = '',
    } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

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