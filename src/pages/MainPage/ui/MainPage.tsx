import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContent } from '@/shared/ui/Page';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <PageContent>
                {t('Главная страница')}
            </PageContent>
        </Page>
    );
};

export default MainPage;
