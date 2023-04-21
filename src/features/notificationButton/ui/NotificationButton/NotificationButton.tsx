import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import Icon from 'shared/ui/Icon/Icon';
import Notes from 'shared/assets/icons/Notes.svg';
import { NotificationsList } from 'entities/Notifications';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import s from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();

    return (
        <Popover
            className={cn(s.outer, {}, [className])}
            trigger={(
                <HStack
                    className={s.trigger}
                    align="center"
                    justify="center"
                >
                    <Icon
                        svg={Notes}
                        className={s.trigger_icon}
                    />
                    <div className={cn(s.status, {}, [s.status_new])}>
                        {t('Есть новые уведомления')}
                    </div>
                </HStack>
            )}
        >
            <NotificationsList />
        </Popover>
    );
});
