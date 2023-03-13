import React, { FC, useCallback } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Heading, { HeadingSize } from 'shared/ui/Heading/Heading';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import EditLine from 'shared/assets/icons/EditLine.svg';
import DoneLine from 'shared/assets/icons/DoneLine.svg';
import EraserLine from 'shared/assets/icons/EraserLine.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions, updateProfileData } from 'entities/Profile';
import s from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
    readonly: boolean;
    isLoading?: boolean;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const {
        readonly,
        isLoading = false,
        className = '',
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onEdit = useCallback(
        () => {
            dispatch(profileActions.setReadOnly(false));
        },
        [dispatch],
    );

    const onCancelEdit = useCallback(
        () => {
            dispatch(profileActions.resetFormData());
        },
        [dispatch],
    );

    const onSaveEdit = useCallback(
        () => {
            dispatch(updateProfileData());
        },
        [dispatch],
    );

    return (
        <header className={cn(s.header, {}, [className])}>
            <Heading
                size={HeadingSize.L}
                className={s.title}
            >
                {t('Профиль')}
            </Heading>
            <div className={s.buttons}>
                {readonly
                    ? (
                        <Button
                            label={t('Редактировать')}
                            theme={ButtonTheme.OUTLINED}
                            size={ButtonSize.M}
                            icon={{ element: EditLine }}
                            onClick={onEdit}
                            className={s.btn}
                            disabled={isLoading}
                        />
                    )
                    : (
                        <>
                            <Button
                                label={t('Отменить')}
                                theme={ButtonTheme.OUTLINED}
                                size={ButtonSize.M}
                                icon={{ element: EraserLine }}
                                onClick={onCancelEdit}
                                className={s.btn}
                                disabled={isLoading}
                            />
                            <Button
                                label={t('Сохранить')}
                                theme={ButtonTheme.PRIMARY}
                                size={ButtonSize.M}
                                icon={{ element: DoneLine }}
                                onClick={onSaveEdit}
                                className={cn(s.btn, {}, [s.btn_last])}
                                disabled={isLoading}
                            />
                        </>
                    )}
            </div>
        </header>
    );
};

export default ProfilePageHeader;
