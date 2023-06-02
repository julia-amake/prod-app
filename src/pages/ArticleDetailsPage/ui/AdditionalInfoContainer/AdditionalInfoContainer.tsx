import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRouteArticleEdit } from '@/shared/consts/router';
import { cn } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
} from '@/entities/Article';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { getCanEditArticle } from '../..';
import s from './AdditionalInfoContainer.module.scss';

interface AdditionalInfoContainerProps {
    className?: string;
}

export const AdditionalInfoContainer = memo(
    ({ className = '' }: AdditionalInfoContainerProps) => {
        const article = useSelector(getArticleDetailsData);
        const isLoading = useSelector(getArticleDetailsIsLoading);
        const canEdit = useSelector(getCanEditArticle);
        const navigate = useNavigate();

        const onEditArticle = useCallback(() => {
            if (!article) return;
            navigate(getRouteArticleEdit(article.id));
        }, [article, navigate]);

        if (!article && !isLoading) return null;
        return (
            <Card className={cn(s.outer, {}, [className])}>
                {article && (
                    <ArticleAdditionalInfo
                        views={article.views}
                        author={article.user}
                        createdAt={article.createdAt}
                        canEdit={canEdit}
                        onEditArticle={onEditArticle}
                    />
                )}
            </Card>
        );
    },
);
