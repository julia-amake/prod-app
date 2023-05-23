import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { HStack } from '@/shared/ui/deprecated/Stack';
import {
    Text as TextDeprecated,
    TextMargin as TextMarginDeprecated,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { Heading } from '@/shared/ui/redesigned/Heading';
import { Text } from '@/shared/ui/redesigned/Text';
import ArrowRight from '../../../../shared/assets/icons/ArrowRightSimpleLine.svg';
import { Notification } from '../../model/types/notifications';
import s from './NotificationsItem.module.scss';

interface NotificationsItemProps {
    data?: Notification;
    className?: string;
    isLoading: boolean;
}

export const NotificationsItem = memo((props: NotificationsItemProps) => {
    const { data, isLoading = false, className = '' } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <HStack
                justify="between"
                align="center"
                gap="24"
                className={cn(s.outer, {}, [className])}
                fullWidth
            >
                <Skeleton
                    width={56}
                    height={56}
                    borderRadius={14}
                    className={s.pic}
                />
                <div className={s.info}>
                    <Skeleton width="80%" height={20} marginBottom={10} />
                    <Skeleton width="100%" height={12} />
                </div>
                <Skeleton width={14} height={14} />
            </HStack>
        );
    }
    if (!data) return null;
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <HStack
                    justify="between"
                    align="center"
                    gap="24"
                    className={cn(s.outerRedesigned, {}, [className])}
                    fullWidth
                    {...(data.href ? { as: Link, to: data.href } : {})}
                >
                    <div className={s.info}>
                        <Heading
                            content={data.title}
                            size="s"
                            className={s.titleRedesigned}
                        />
                        <Text content={data.description} margin="none" />
                    </div>
                </HStack>
            }
            off={
                <HStack
                    justify="between"
                    align="center"
                    gap="24"
                    className={cn(s.outer, {}, [className])}
                    fullWidth
                    {...(data.href ? { as: Link, to: data.href } : {})}
                >
                    <div
                        className={cn(s.pic, { [s.pic_default]: !data.image })}
                    >
                        {data.image && (
                            <img src={data.image} className={s.image} alt="" />
                        )}
                    </div>
                    <div className={s.info}>
                        <TextDeprecated
                            isBold
                            margin={TextMarginDeprecated.NONE}
                            content={data.title}
                            className={s.title}
                        />
                        <TextDeprecated
                            className={s.desc}
                            size={TextSize.XS}
                            content={data.description}
                            margin={TextMarginDeprecated.NONE}
                        />
                    </div>
                    <div className={s.status}>
                        {t('Не прочитано')}
                        {data.href && (
                            <Icon svg={ArrowRight} className={s.more} />
                        )}
                    </div>
                </HStack>
            }
        />
    );
});
