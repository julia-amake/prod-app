import React, {
    memo, useCallback, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import Notes from '@/shared/assets/icons/Notes.svg';
import { NotificationsList } from '@/entities/Notifications';
import { Popover } from '@/shared/ui/Popups/ui';
import { Drawer } from '@/shared/ui/Drawer';
import useWindowDimensions from '@/shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import { MOBILE_LARGE } from '@/shared/consts/devices';
import s from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();
    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);

    const isMobile = useMemo(() => width <= MOBILE_LARGE, [width]);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = useMemo(() => (
        <HStack
            className={s.trigger}
            align="center"
            justify="center"
            customProps={{ onClick: onOpenDrawer }}
        >
            <Icon
                svg={Notes}
                className={s.trigger_icon}
            />
            <div className={cn(s.status, {}, [s.status_new])}>
                {t('Есть новые уведомления')}
            </div>
        </HStack>
    ), [onOpenDrawer, t]);

    if (isMobile) {
        return (
            <>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationsList isShort={false} />
                </Drawer>
            </>
        );
    }

    return (

        <Popover
            className={cn(s.outer, {}, [className])}
            trigger={trigger}
        >
            <NotificationsList className={s.list} />
        </Popover>
    );
});
