import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleFeatures } from '@/shared/lib/features';
import { PageSection as PageSectionDeprecated } from '@/shared/ui/deprecated/Page';
import { Preloader as PreloaderDeprecated } from '@/shared/ui/deprecated/Preloader';
import { PageSection } from '@/shared/ui/redesigned/PageSection';
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

        if (isLoading) return <PreloaderDeprecated />;
        if (error || !articles?.length) return null;

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <PageSection
                        title={t('Рекомендуем')}
                        className={className}
                        data-testid="ArticleRecommendationsList"
                    >
                        <ArticleList articles={articles} />
                    </PageSection>
                }
                off={
                    <PageSectionDeprecated
                        title={t('Рекомендуем')}
                        className={className}
                        data-testid="ArticleRecommendationsList"
                    >
                        <ArticleList articles={articles} />
                    </PageSectionDeprecated>
                }
            />
        );
    },
);
