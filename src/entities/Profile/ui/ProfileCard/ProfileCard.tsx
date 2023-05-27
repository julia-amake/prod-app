import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Informer as InformerDeprecated } from '@/shared/ui/deprecated/Informer';
import { Preloader as PreloaderDeprecated } from '@/shared/ui/deprecated/Preloader';
import { Informer } from '@/shared/ui/redesigned/Informer';
import { ProfileCardProps } from '../../model/types/profileCard';
import { ProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
    ProfileCardRedesigned,
    ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';
import s from '../ProfileCardRedesigned/ProfileCardRedesigned.module.scss';

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    const { isLoading, data, error, className = '' } = props;
    const { t } = useTranslation(['profile', 'translation']);

    return (
        <div className={cn(s.outer, {}, [className])}>
            {isLoading && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<ProfileCardRedesignedSkeleton />}
                    off={<PreloaderDeprecated />}
                />
            )}
            {!isLoading && data && !error && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<ProfileCardRedesigned {...props} />}
                    off={<ProfileCardDeprecated {...props} />}
                />
            )}
            {(error || !data) && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Informer
                            title={t('Ошибка_при_загрузке_пользователя')}
                            text={t('translation:Попробуйте_обновить_страницу')}
                        />
                    }
                    off={
                        <InformerDeprecated
                            title={t('Ошибка_при_загрузке_пользователя')}
                            text={t('translation:Попробуйте_обновить_страницу')}
                        />
                    }
                />
            )}
        </div>
    );
};
