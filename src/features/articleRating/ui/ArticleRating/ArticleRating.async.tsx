import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton height={158} />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
