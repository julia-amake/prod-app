import React from 'react';
import { Page } from 'widgets/Page/Page';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import Informer from 'shared/ui/Informer/Informer';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation();

    if (!id) {
        return (
            <Informer
                text={t('Такого профиля не существует')}
                isCentered
            />
        );
    }

    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
