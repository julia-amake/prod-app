import React from 'react';
import { useTranslation } from 'react-i18next';

import { PageContent } from '@/shared/ui/Page';

import { Page } from '@/widgets/Page';

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
