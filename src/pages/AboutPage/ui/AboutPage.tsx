import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageContent } from '@/shared/ui/deprecated/Page';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page dataTestid="AboutPage">
            <PageContent>{t('О сайте')}</PageContent>
        </Page>
    );
};

export default AboutPage;
