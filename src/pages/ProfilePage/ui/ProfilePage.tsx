import React, { useCallback, useEffect } from 'react';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getProfileReadonly,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { IntegerValidation } from 'shared/lib/utils/validations';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
    const formData = useSelector(getProfileFormData);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const dispatch = useAppDispatch();

    useDynamicModuleLoader(initialReducers, true);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({
                name: value || '',
            }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({
                lastname: value || '',
            }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value: string = '') => {
            dispatch(profileActions.updateProfile({
                age: IntegerValidation(value),
            }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({
                city: value || '',
            }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({
                username: value || '',
            }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({
                avatar: value || '',
            }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(profileActions.updateProfile({
                currency: value || Currency.RUB,
            }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(profileActions.updateProfile({
                country: value || Country.RUSSIA,
            }));
        },
        [dispatch],
    );

    return (
        <div className="main-content">
            <ProfilePageHeader
                readonly={readonly}
                isLoading={isLoading}
            />
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readOnly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </div>
    );
};

export default ProfilePage;
