import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemDeprecatedSkeleton } from './ArticleListItemDeprecated/ArticleListItemDeprecatedSkeleton';
import { ArticleListItemRedesignedSkeleton } from './ArticleListItemRedesigned/ArticleListItemRedesignedSkeleton';

interface ArticleListItemSkeletonProps {
    view?: ArticleView;
    className?: string;
}

export const ArticleListItemSkeleton = (
    props: ArticleListItemSkeletonProps,
) => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<ArticleListItemRedesignedSkeleton {...props} />}
        off={<ArticleListItemDeprecatedSkeleton {...props} />}
    />
);
