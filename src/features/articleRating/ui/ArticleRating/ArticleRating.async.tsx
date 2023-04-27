import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from '@/features/articleRating/ui/ArticleRating/ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton height={158} />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
