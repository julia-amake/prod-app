import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';

export interface ArticleRatingProps {
    articleId: string;
    className?: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { articleId, className = '' } = props;

    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });
    const [rateArticle] = useRateArticle();

    // eslint-disable-next-line
    const rating = useMemo(() => data?.[0]?.rate ?? 0, [articleId, data]);

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticle({
                    userId: userData?.id ?? '',
                    articleId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                console.log(e);
            }
        },
        [articleId, rateArticle, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle],
    );

    const ratingProps = {
        onAccept,
        onCancel,
        rate: rating,
        className,
        hasFeedback: true,
    };

    if (isLoading)
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Skeleton height={70} borderRadius={20} />}
                off={<SkeletonDeprecated height={158} />}
            />
        );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<RatingCard {...ratingProps} title={t('Оцените статью')} />}
            off={
                <RatingCard
                    {...ratingProps}
                    title={t('Вам понравилась статья?')}
                />
            }
        />
    );
});

export default ArticleRating;
