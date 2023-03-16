import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation('article');

    return (
        <div className={cn(s.outer, {}, [className])}>
            ARTICLES PAGE
        </div>
    );
});

export default ArticlesPage;
