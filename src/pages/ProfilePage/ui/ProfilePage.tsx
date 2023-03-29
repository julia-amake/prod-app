import React, { useCallback, useMemo } from 'react';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { IntegerValidation } from 'shared/lib/utils/validations';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import Informer from 'shared/ui/Informer/Informer';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';
import s from './ProfilePage.module.scss';

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
    const { id } = useParams<{id: string}>();

    const { t } = useTranslation();

    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslations = useMemo(() => ({
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);

    const errorsList = useMemo(() => (
        <ul className={s.errors}>
            {validateErrors?.map((err) => (
                <li
                    className={s.errorsItem}
                    key={err}
                >
                    {validateErrorTranslations[err]}
                </li>
            ))}
        </ul>
    ), [validateErrors, validateErrorTranslations]);

    useDynamicModuleLoader(initialReducers, true);

    useInitialEffect(() => {
        if (!id) return;
        dispatch(fetchProfileData(id));
    });

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
        <Page>
            <ProfilePageHeader
                readonly={readonly}
                isLoading={isLoading}
            />
            {validateErrors?.length
                ? (
                    <Informer
                        text={errorsList}
                        isCentered={validateErrors.length === 1}
                        className={s.errorInformer}
                    />
                )
                : null}
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
        </Page>
    );
};

export default ProfilePage;
