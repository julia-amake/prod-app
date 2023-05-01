import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import EditLine from '@/shared/assets/icons/EditLine.svg';
import DoneLine from '@/shared/assets/icons/DoneLine.svg';
import EraserLine from '@/shared/assets/icons/EraserLine.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { PageHeader } from '@/shared/ui/Page';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {
    getProfileIsLoading,
} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (props) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getProfileIsLoading);
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
        <PageHeader>
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
                                    data-testid="EditableProfileCardHeader.EditButton"
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
                                        data-testid="EditableProfileCardHeader.CancelButton"
                                    />
                                    <Button
                                        label={t('Сохранить')}
                                        theme={ButtonTheme.PRIMARY}
                                        size={ButtonSize.M}
                                        icon={{ element: DoneLine }}
                                        onClick={onSaveEdit}
                                        disabled={isLoading}
                                        data-testid="EditableProfileCardHeader.SaveButton"
                                    />
                                </>
                            )
                    )}
                </HStack>
            </HStack>
        </PageHeader>
    );
};
