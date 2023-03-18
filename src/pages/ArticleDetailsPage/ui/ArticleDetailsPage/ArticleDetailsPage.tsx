import React, { memo, useMemo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import Informer from 'shared/ui/Informer/Informer';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation('article');
    const { id } = useParams();

    const content = useMemo(() => {
        if (!id) return <Informer title={t('Статья не найдена')} />;
        return <ArticleDetails id={id} />;
    }, [t, id]);

    return (
        <div className={cn('main-content', {}, [className])}>
            {content}
        </div>
    );
});

export default ArticleDetailsPage;
