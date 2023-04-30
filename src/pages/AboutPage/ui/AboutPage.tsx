import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContent } from '@/shared/ui/Page/PageContent/PageContent';
import { Page } from '@/widgets/Page';

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
