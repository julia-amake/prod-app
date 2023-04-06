import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import s from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = !!id;

    return (
        <Page className={cn(s.outer, {}, [className])}>
            {isEdit ? t('Edit article') : t('Create article')}
        </Page>
    );
});

export default ArticleEditPage;
