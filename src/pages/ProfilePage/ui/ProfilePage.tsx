import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
    const { t } = useTranslation();

    useDynamicModuleLoader(initialReducers, true);

    return (
        <div className="main-content">
            {t('Профиль')}
        </div>
    );
};

export default ProfilePage;
