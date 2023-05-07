import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContent } from '@/shared/ui/Page';
import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page dataTestid="MainPage">
            <PageContent>
                {t('Главная страница')}
                <Counter />
            </PageContent>
        </Page>
    );
};

export default MainPage;
