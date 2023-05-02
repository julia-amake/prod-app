import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PageContent } from '@/shared/ui/Page';

import { Page } from '@/widgets/Page';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className = '' } = props;

    const { t } = useTranslation();

    return (
        <Page className={className}>
            <PageContent>
                {t('У вас нет доступа к этой странице')}
            </PageContent>
        </Page>
    );
});

export default ForbiddenPage;
