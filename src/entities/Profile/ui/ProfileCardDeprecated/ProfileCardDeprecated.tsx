import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { ProfileCardProps } from '../../model/types/profileCard';
import s from './ProfileCardDeprecated.module.scss';

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        isLoading,
        error,
        data,
        readOnly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeCountry,
        onChangeCurrency,
        onChangeUsername,
        onChangeAvatar,
        className = '',
    } = props;

    const { t } = useTranslation(['profile', 'translation']);

    return (
        <div className={cn(s.outer, {}, [className])}>
            {!isLoading && !error && data && (
                <div className={cn(s.data, {})}>
                    {data.avatar && (
                        <div className={s.avatar}>
                            <AvatarDeprecated src={data.avatar} />
                        </div>
                    )}
                    <HStack justify="between" wrap className={s.form}>
                        <InputDeprecated
                            label={t('Ваше имя')}
                            value={data?.name}
                            readOnly={readOnly}
                            className={s.input}
                            onChange={onChangeFirstname}
                            data-testid="ProfileCard.Firstname"
                        />
                        <InputDeprecated
                            label={t('Ваша фамилия')}
                            value={data?.lastname || ''}
                            readOnly={readOnly}
                            className={s.input}
                            onChange={onChangeLastname}
                            data-testid="ProfileCard.Lastname"
                        />
                        <InputDeprecated
                            label={t('Ваш возраст')}
                            value={data?.age || ''}
                            readOnly={readOnly}
                            className={s.input}
                            onChange={onChangeAge}
                        />
                        <InputDeprecated
                            label={t('Ваш город')}
                            value={data?.city || ''}
                            readOnly={readOnly}
                            className={s.input}
                            onChange={onChangeCity}
                        />
                        <InputDeprecated
                            label={t('Имя пользователя')}
                            value={data?.username || ''}
                            readOnly={readOnly}
                            className={s.input}
                            onChange={onChangeUsername}
                        />
                        <InputDeprecated
                            label={t('Ссылка на аватар')}
                            value={data?.avatar || ''}
                            readOnly={readOnly}
                            className={s.input}
                            onChange={onChangeAvatar}
                        />
                        <CurrencySelect
                            label={t('Валюта')}
                            value={data.currency}
                            onChange={onChangeCurrency}
                            readOnly={readOnly}
                            className={s.input}
                        />
                        <CountrySelect
                            label={t('translation:Страна')}
                            value={data.country}
                            onChange={onChangeCountry}
                            readOnly={readOnly}
                            className={s.input}
                        />
                    </HStack>
                </div>
            )}
        </div>
    );
});
