import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { PageContent } from 'shared/ui/Page';
import s from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();

    return (
        <Page className={cn(s.forbiddenPage, {}, [className])}>
            <PageContent>
                {t('У вас нет доступа к этой странице')}
            </PageContent>
        </Page>
    );
});

export default ForbiddenPage;
