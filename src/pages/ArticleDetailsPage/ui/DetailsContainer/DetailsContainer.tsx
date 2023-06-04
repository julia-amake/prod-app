import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleDetails, getArticleDetailsIsLoading } from '@/entities/Article';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className = '' } = props;
    const { id } = useParams<{ id: string }>();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const { t } = useTranslation('article');

    if (!id) return null;
    return (
        <VStack as={Card} className={className} gap="24">
            <ArticleDetails id={id} isLoading={isLoading} />
            <ToggleFeatures
                feature="isArticleRatingEnabled"
                on={<ArticleRating articleId={id} />}
                off={<div>{t('Рейтинг скоро появится')}</div>}
            />
            <ArticleDetailsComments id={id} isLoading={isLoading} />
            <ArticleRecommendationsList id={id} />
        </VStack>
    );
});
