import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import Preloader from 'shared/ui/Preloader/Preloader';
import Informer from 'shared/ui/Informer/Informer';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile | null;
    readOnly: boolean;
    isLoading: boolean;
    error?: string;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    const {
        data = null,
        readOnly,
        isLoading,
        className = '',
        error = '',
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
        <div className={cn(s.outer, {}, [className])}>
            {!isLoading && !error && data && (
                <div className={cn(s.data, {})}>
                    {data.avatar && (
                        <div className={s.avatar}>
                            <Avatar
                                src={data.avatar}
                            />
                        </div>
                    )}
                    <HStack
                        justify="between"
                        wrap
                        className={s.form}
                    >
                        <Input
                            label={t('Ваше имя')}
                            value={data?.name}
                            readOnly={readOnly}
                            className={s.input}
                            onChange={onChangeFirstname}
                        />
                        <Input
                            label={t('Ваша фамилия')}
                            value={data?.lastname || ''}
                            readOnly={readOnly}
                            className={s.input}
                            onChange={onChangeLastname}
                        />
                        <Input
                            label={t('Ваш возраст')}
                            value={data?.age || ''}
                            readOnly={readOnly}
                            className={s.input}
                            onChange={onChangeAge}
                        />
                        <Input
                            label={t('Ваш город')}
                            value={data?.city || ''}
                            readOnly={readOnly}
                            className={s.input}
                            onChange={onChangeCity}
                        />
                        <Input
                            label={t('Имя пользователя')}
                            value={data?.username || ''}
                            readOnly={readOnly}
                            className={s.input}
                            onChange={onChangeUsername}
                        />
                        <Input
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
            {isLoading && <Preloader />}
            {error && (
                <Informer
                    title={t('Ошибка_при_загрузке_пользователя')}
                    text={t('translation:Попробуйте_обновить_страницу')}
                />
            )}
        </div>
    );
};
