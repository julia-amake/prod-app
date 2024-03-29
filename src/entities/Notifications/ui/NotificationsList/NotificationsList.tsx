import React, { memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Heading, HeadingSize } from '@/shared/ui/deprecated/Heading';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { useGetNotificationsList } from '../../api/notificationsApi';
import { Notification } from '../../model/types/notifications';
import { NotificationsItem } from '../NotificationsItem/NotificationsItem';
import s from './NotificationsList.module.scss';

interface NotificationsListProps {
    isShort?: boolean;
    className?: string;
}

export const NotificationsList = memo((props: NotificationsListProps) => {
    const { isShort = true, className = '' } = props;

    const { t } = useTranslation();
    const { data, isLoading } = useGetNotificationsList(null, {
        pollingInterval: 5000,
    });
    const [notifications, setNotifications] = useState<Notification[] | null>(
        null,
    );
    const [shownAll, setShownAll] = useState(false);

    const setNotificationsItems = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => () => {
            if (!data || !data.length) return;
            setNotifications(data);
        },
        off: () => () => {
            if (!data || !data.length) return;
            if (shownAll || !isShort) {
                setNotifications(data);
                return;
            }
            setNotifications(data.slice(0, 4));
        },
    });

    useEffect(
        () => setNotificationsItems(),
        [isShort, shownAll, data, setNotificationsItems],
    );

    const listClassName = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => s.listRedesigned,
        off: () => s.list,
    });

    const moreClickHandler = () => {
        setShownAll(true);
    };

    const content = useMemo(() => {
        if (isLoading) {
            return (
                <div className={listClassName}>
                    <NotificationsItem isLoading={isLoading} />
                    <NotificationsItem isLoading={isLoading} />
                    <NotificationsItem isLoading={isLoading} />
                    <NotificationsItem isLoading={isLoading} />
                </div>
            );
        }
        if (notifications && notifications.length) {
            return (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <div className={listClassName}>
                            {notifications.map((n) => (
                                <NotificationsItem
                                    key={n.id}
                                    data={n}
                                    isLoading={isLoading}
                                />
                            ))}
                        </div>
                    }
                    off={
                        <div
                            className={cn(listClassName, {
                                [s.list_withScroll]: shownAll,
                            })}
                        >
                            {notifications.map((n) => (
                                <NotificationsItem
                                    key={n.id}
                                    data={n}
                                    isLoading={isLoading}
                                />
                            ))}
                        </div>
                    }
                />
            );
        }
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Text
                        className={s.empty}
                        content={t('Нет новых уведомлений')}
                        size="s"
                    />
                }
                off={
                    <TextDeprecated
                        className={s.empty}
                        content={t('Нет новых уведомлений')}
                        size={TextSize.S}
                    />
                }
            />
        );
    }, [isLoading, listClassName, notifications, shownAll, t]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<div className={cn(s.outer, {}, [className])}>{content}</div>}
            off={
                <div className={cn(s.outer, {}, [className])}>
                    <Heading
                        className={s.title}
                        size={HeadingSize.S}
                        content={t('Уведомления')}
                    />
                    {content}
                    {isShort && !shownAll && data && data?.length > 5 && (
                        <ButtonDeprecated
                            className={s.more}
                            label={t('Показать все')}
                            onClick={moreClickHandler}
                        />
                    )}
                </div>
            }
        />
    );
});
