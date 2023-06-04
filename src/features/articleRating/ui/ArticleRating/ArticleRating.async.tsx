import { lazy, Suspense } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    const skeleton = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<SkeletonRedesigned height={70} borderRadius={20} />}
            off={<SkeletonDeprecated height={158} />}
        />
    );

    return (
        <Suspense fallback={skeleton}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
