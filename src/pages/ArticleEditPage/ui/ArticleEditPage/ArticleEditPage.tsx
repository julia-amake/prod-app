import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page/Page';
import { PageContent } from '@/shared/ui/Page/PageContent/PageContent';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className = '' } = props;

    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = !!id;

    return (
        <Page className={className}>
            <PageContent>
                {isEdit ? t('Edit article') : t('Create article')}
            </PageContent>
        </Page>
    );
});

export default ArticleEditPage;
