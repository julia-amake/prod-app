import React, {
    memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    articleId: string;
    className?: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const {
        articleId,
        className = '',
    } = props;

    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });
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

    if (isLoading) return <Skeleton height={158} />;

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating}
            className={className}
            title={t('Вам понравилась статья?')}
            hasFeedback
        />
    );
});

export default ArticleRating;
