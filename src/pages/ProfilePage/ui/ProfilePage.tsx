import React, { useEffect } from 'react';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
    const dispatch = useAppDispatch();

    useDynamicModuleLoader(initialReducers, true);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className="main-content">
            <ProfileCard />
        </div>
    );
};

export default ProfilePage;
