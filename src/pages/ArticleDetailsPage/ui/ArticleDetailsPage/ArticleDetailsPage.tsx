import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation('article');

    return (
        <div className={cn(s.outer, {}, [className])}>
            ARTICLE DETAILS PAGE
        </div>
    );
});

export default ArticleDetailsPage;
