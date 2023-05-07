import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { PageContent } from '@/shared/ui/Page';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();

    return (
        <Page
            className={className}
            dataTestid="AdminPanelPage"
        >
            <PageContent>
                {t('Админ панель')}
            </PageContent>
        </Page>
    );
});

export default AdminPanelPage;
