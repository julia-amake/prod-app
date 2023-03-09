import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileError, getProfileIsLoading } from 'entities/Profile';
import Heading, { HeadingSize } from 'shared/ui/Heading/Heading';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import EditLine from 'shared/assets/icons/EditLine.svg';
import Input from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import s from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={cn(s.outer, {}, [className])}>
            <header className={s.header}>
                <Heading
                    size={HeadingSize.L}
                    className={s.title}
                >
                    {t('Профиль')}
                </Heading>
                <Button
                    label={t('Редактировать')}
                    theme={ButtonTheme.OUTLINED}
                    size={ButtonSize.M}
                    icon={{ element: EditLine }}
                />
            </header>
            <div className={s.data}>
                <Input
                    label={t('Ваше имя')}
                    value={data?.name}
                    className={s.input}
                />
                <Input
                    label={t('Ваша фамилия')}
                    value={data?.lastname}
                    className={s.input}
                />
            </div>
        </div>
    );
};
