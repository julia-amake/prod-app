import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Informer } from '@/shared/ui/deprecated/Informer';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation();

    if (!id) {
        return <Informer text={t('Такого профиля не существует')} isCentered />;
    }

    return (
        <Page dataTestid="ProfilePage">
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
