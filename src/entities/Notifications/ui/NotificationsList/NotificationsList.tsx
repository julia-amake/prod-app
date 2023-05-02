import React, {
    memo, useEffect, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Heading, HeadingSize } from '@/shared/ui/Heading';
import { Text, TextSize } from '@/shared/ui/Text';

import { useGetNotificationsList } from '../../api/notificationsApi';
import { Notification } from '../../model/types/notifications';
import { NotificationsItem } from '../NotificationsItem/NotificationsItem';

import s from './NotificationsList.module.scss';

interface NotificationsListProps {
    isShort?: boolean;
    className?: string;
}

export const NotificationsList = memo((props: NotificationsListProps) => {
    const {
        isShort = true,
        className = '',
    } = props;

    const { t } = useTranslation();
    const { data, isLoading, error } = useGetNotificationsList(null, {
        pollingInterval: 5000,
    });
    const [notifications, setNotifications] = useState<Notification[] | null>(null);
    const [shownAll, setShownAll] = useState(false);

    useEffect(() => {
        if (!data || !data.length) return;
        if (shownAll || !isShort) {
            setNotifications(data);
            return;
        }
        setNotifications(data.slice(0, 4));
    }, [isShort, shownAll, data]);

    const moreClickHandler = () => {
        setShownAll(true);
    };

    const content = useMemo(() => {
        if (isLoading) {
            return (
                <div className={cn(s.list)}>
                    <NotificationsItem isLoading={isLoading} />
                    <NotificationsItem isLoading={isLoading} />
                    <NotificationsItem isLoading={isLoading} />
                    <NotificationsItem isLoading={isLoading} />
                </div>
            );
        }
        if (notifications && notifications.length) {
            return (
                <div className={cn(s.list, { [s.list_withScroll]: shownAll })}>
                    {notifications.map((n) => (
                        <NotificationsItem
                            key={n.id}
                            data={n}
                            isLoading={isLoading}
                        />
                    ))}
                </div>
            );
        }
        return (
            <Text
                className={s.empty}
                content={t('Нет новых уведомлений')}
                size={TextSize.S}
            />
        );
    }, [isLoading, notifications, shownAll, t]);

    return (
        <div className={cn(s.outer, {}, [className])}>
            <Heading
                className={s.title}
                size={HeadingSize.S}
                content={t('Уведомления')}
            />
            {content}
            {isShort && !shownAll && (data && data?.length > 5) && (
                <Button
                    className={s.more}
                    label={t('Показать все')}
                    onClick={moreClickHandler}
                />
            )}
        </div>
    );
});
