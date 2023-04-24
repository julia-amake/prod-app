import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { PageContent } from '@/shared/ui/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();

    return (
        <Page className={className}>
            <PageContent>
                {t('Админ панель')}
            </PageContent>
        </Page>
    );
});

export default AdminPanelPage;
