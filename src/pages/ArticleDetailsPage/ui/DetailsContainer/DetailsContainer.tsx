import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleDetails, getArticleDetailsIsLoading } from '@/entities/Article';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className = '' } = props;
    const { id } = useParams<{ id: string }>();
    const isLoading = useSelector(getArticleDetailsIsLoading);

    if (!id) return null;
    return (
        <Card className={className}>
            <ArticleDetails id={id} isLoading={isLoading} />
        </Card>
    );
});
