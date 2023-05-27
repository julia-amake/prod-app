import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { ProfileCardProps } from '../../model/types/profileCard';
import s from './ProfileCardRedesigned.module.scss';

export const ProfileCardRedesignedSkeleton = () => (
    <div className={s.data}>
        <Skeleton
            width={128}
            height={128}
            borderRadius="50%"
            marginLeft="auto"
            marginRight="auto"
            marginBottom="32px"
        />
        <HStack className={s.formRedesigned} justify="between" wrap>
            <VStack className={s.column} gap="16" justify="between">
                <Skeleton
                    className={s.inputRedesigned}
                    height={38}
                    borderRadius="48px"
                />
                <Skeleton
                    className={s.inputRedesigned}
                    height={38}
                    borderRadius="48px"
                />
                <Skeleton
                    className={s.inputRedesigned}
                    height={38}
                    borderRadius="48px"
                />
                <Skeleton
                    className={s.inputRedesigned}
                    height={38}
                    borderRadius="48px"
                />
            </VStack>
            <VStack className={s.column} gap="16" justify="between">
                <Skeleton
                    className={s.inputRedesigned}
                    height={38}
                    borderRadius="48px"
                />
                <Skeleton
                    className={s.inputRedesigned}
                    height={38}
                    borderRadius="48px"
                />
                <Skeleton
                    className={s.inputRedesigned}
                    height={38}
                    borderRadius="48px"
                />
                <Skeleton
                    className={s.inputRedesigned}
                    height={38}
                    borderRadius="48px"
                />
            </VStack>
        </HStack>
    </div>
);

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
    const {
        data,
        readOnly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation(['profile', 'translation']);

    return (
        <div className={s.data}>
            <Avatar
                className={s.avatarRedesigned}
                src={data?.avatar}
                size={128}
            />
            <HStack className={s.formRedesigned} justify="between" wrap>
                <VStack className={s.column} gap="16" justify="between">
                    <Input
                        className={s.inputRedesigned}
                        label={t('Ваше имя')}
                        value={data?.name}
                        readOnly={readOnly}
                        onChange={onChangeFirstname}
                        data-testid="ProfileCard.Firstname"
                    />
                    <Input
                        className={s.inputRedesigned}
                        label={t('Ваша фамилия')}
                        value={data?.lastname || ''}
                        readOnly={readOnly}
                        onChange={onChangeLastname}
                        data-testid="ProfileCard.Lastname"
                    />
                    <Input
                        className={s.inputRedesigned}
                        label={t('Ваш возраст')}
                        value={data?.age || ''}
                        readOnly={readOnly}
                        onChange={onChangeAge}
                    />
                    <Input
                        className={s.inputRedesigned}
                        label={t('Ваш город')}
                        value={data?.city || ''}
                        readOnly={readOnly}
                        onChange={onChangeCity}
                    />
                </VStack>
                <VStack className={s.column} gap="16" justify="between">
                    <Input
                        className={s.inputRedesigned}
                        label={t('Имя пользователя')}
                        value={data?.username || ''}
                        readOnly={readOnly}
                        onChange={onChangeUsername}
                    />
                    <Input
                        className={s.inputRedesigned}
                        label={t('Ссылка на аватар')}
                        value={data?.avatar || ''}
                        readOnly={readOnly}
                        onChange={onChangeAvatar}
                    />
                    <CurrencySelect
                        className={s.inputRedesigned}
                        label={t('Валюта')}
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readOnly={readOnly}
                    />
                    <CountrySelect
                        className={s.inputRedesigned}
                        label={t('translation:Страна')}
                        value={data?.country}
                        onChange={onChangeCountry}
                        readOnly={readOnly}
                    />
                </VStack>
            </HStack>
        </div>
    );
});
