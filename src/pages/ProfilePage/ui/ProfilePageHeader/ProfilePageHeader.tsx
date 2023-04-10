import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Heading, { HeadingSize } from 'shared/ui/Heading/Heading';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import EditLine from 'shared/assets/icons/EditLine.svg';
import DoneLine from 'shared/assets/icons/DoneLine.svg';
import EraserLine from 'shared/assets/icons/EraserLine.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileData, profileActions, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';

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
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
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
        <HStack
            as="header"
            className={className}
            align="center"
            justify="between"
            gap="24"
        >
            <div />
            <HStack
                align="center"
                gap="16"
            >
                {canEdit && (
                    readonly
                        ? (
                            <Button
                                label={t('Редактировать')}
                                theme={ButtonTheme.OUTLINED}
                                size={ButtonSize.M}
                                icon={{ element: EditLine }}
                                onClick={onEdit}
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
                                    disabled={isLoading}
                                />
                                <Button
                                    label={t('Сохранить')}
                                    theme={ButtonTheme.PRIMARY}
                                    size={ButtonSize.M}
                                    icon={{ element: DoneLine }}
                                    onClick={onSaveEdit}
                                    disabled={isLoading}
                                />
                            </>
                        )
                )}
            </HStack>
        </HStack>
    );
};

export default ProfilePageHeader;
