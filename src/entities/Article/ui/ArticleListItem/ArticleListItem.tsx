import React, { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemProps } from '../../model/types/articleListItem';
import ArticleListItemDeprecated from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import ArticleListItemRedesigned from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export const ArticleListItem = memo((props: ArticleListItemProps) => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<ArticleListItemRedesigned {...props} />}
        off={<ArticleListItemDeprecated {...props} />}
    />
));
