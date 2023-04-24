import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { PageContent } from '@/shared/ui/Page/PageContent/PageContent';
import s from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Page className={s.page}>
            <PageContent>
                {t('Страница не найдена')}
            </PageContent>
        </Page>
    );
};

export default NotFoundPage;
