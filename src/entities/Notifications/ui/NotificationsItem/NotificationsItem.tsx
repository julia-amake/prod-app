import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextMargin, TextSize } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';
import { Link } from 'react-router-dom';
import Icon from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Notification } from '../../model/types/notifications';
import ArrowRight from '../../../../shared/assets/icons/ArrowRightSimpleLine.svg';
import s from './NotificationsItem.module.scss';

interface NotificationsItemProps {
    data?: Notification;
    className?: string;
    isLoading: boolean;
}

export const NotificationsItem = memo((props: NotificationsItemProps) => {
    const {
        data,
        isLoading = false,
        className = '',
    } = props;

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
                    <Skeleton
                        width="80%"
                        height={20}
                        marginBottom={10}
                    />
                    <Skeleton
                        width="100%"
                        height={12}
                    />
                </div>
                <Skeleton
                    width={14}
                    height={14}
                />
            </HStack>
        );
    }
    if (!data) return null;
    return (
        <HStack
            justify="between"
            align="center"
            gap="24"
            className={cn(s.outer, {}, [className])}
            fullWidth
            {...data.href ? { as: Link, to: data.href } : {}}
        >
            <div className={cn(s.pic, { [s.pic_default]: !data.image })}>
                {data.image && (
                    <img
                        src={data.image}
                        className={s.image}
                        alt=""
                    />
                )}
            </div>
            <div className={s.info}>
                <Text
                    isBold
                    margin={TextMargin.NONE}
                    content={data.title}
                    className={s.title}
                />
                <Text
                    className={s.desc}
                    size={TextSize.XS}
                    content={data.description}
                    margin={TextMargin.NONE}
                />
            </div>
            <div className={s.status}>
                {t('Не прочитано')}
                {data.href && <Icon svg={ArrowRight} className={s.more} />}
            </div>
        </HStack>
    );
});
