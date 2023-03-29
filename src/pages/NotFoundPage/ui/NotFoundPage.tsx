import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import s from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Page className={s.page}>
            {t('Страница не найдена')}
        </Page>
    );
};

export default NotFoundPage;
