import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { PageContent } from 'shared/ui/Page/PageContent/PageContent';

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
