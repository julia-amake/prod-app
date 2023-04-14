import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { PageContent } from 'shared/ui/Page/PageContent/PageContent';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            <PageContent>
                {t('О сайте')}
            </PageContent>
        </Page>
    );
};

export default AboutPage;
