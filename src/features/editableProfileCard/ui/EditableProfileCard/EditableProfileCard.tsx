import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { IntegerValidation } from '@/shared/lib/utils/validations';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Heading, HeadingSize } from '@/shared/ui/Heading';
import { Informer } from '@/shared/ui/Informer';
import { VStack } from '@/shared/ui/Stack';
import { ProfileCard } from '@/entities/Profile';
import { ReducersList, useDynamicModuleLoader } from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { PageContent } from '@/shared/ui/Page';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {
    getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import {
    getProfileValidateErrors,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ValidateProfileError } from '../../model/consts/consts';

const initialReducers: ReducersList = {
    profile: profileReducer,
};

interface EditableProfileCardProps {
    id: string;
    className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        id,
        className = '',
    } = props;
    const { t } = useTranslation();
    const formData = useSelector(getProfileFormData);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const dispatch = useAppDispatch();

    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslations: Record<ValidateProfileError, string> = useMemo(() => ({
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_USERNAME]: t('Имя пользователя обязательно'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);

    const errorsList = useMemo(() => (
        <ul>
            {validateErrors?.map((err:ValidateProfileError) => (
                <li key={err}>
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
        <>
            <EditableProfileCardHeader />
            <PageContent>
                <VStack
                    gap="32"
                    className={className}
                    data-testid="EditableProfileCard"
                >
                    <Heading
                        size={HeadingSize.L}
                        content={t('Профиль')}
                    />
                    {validateErrors?.length
                        ? (
                            <Informer
                                text={errorsList}
                                isCentered={validateErrors.length === 1}
                                data-testid="EditableProfileCard.Error"
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
                </VStack>
            </PageContent>
        </>
    );
});
