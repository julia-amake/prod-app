import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageSection } from '@/shared/ui/Page';
import { Preloader } from '@/shared/ui/Preloader';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    id: string;
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { id, className = '' } = props;
        const { t } = useTranslation();
        const {
            data: articles,
            isLoading,
            error,
        } = useArticleRecommendationsList({ limit: 3, excluded: id });

        if (isLoading) return <Preloader />;
        if (error || !articles?.length) return null;

        return (
            <PageSection
                title={t('Рекомендуем')}
                className={className}
                data-testid="ArticleRecommendationsList"
            >
                <ArticleList articles={articles} />
            </PageSection>
        );
    },
);
