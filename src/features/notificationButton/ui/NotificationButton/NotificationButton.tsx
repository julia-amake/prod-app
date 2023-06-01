import React, { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Notes from '@/shared/assets/icons/Notes.svg';
import NotesRedesigned from '@/shared/assets/icons/redesigned/Notes.svg';
import { MOBILE_LARGE } from '@/shared/consts/devices';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import useWindowDimensions from '@/shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups/ui';
import { Button } from '@/shared/ui/redesigned/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Popover } from '@/shared/ui/redesigned/Popups/ui';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationsList } from '@/entities/Notifications';
import s from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className = '' } = props;

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

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    icon={{ element: NotesRedesigned }}
                    className={s.triggerRedesigned}
                    onClick={onOpenDrawer}
                    variant="clear"
                />
            }
            off={
                <HStack
                    className={s.trigger}
                    align="center"
                    justify="center"
                    customProps={{ onClick: onOpenDrawer }}
                >
                    <IconDeprecated svg={Notes} className={s.trigger_icon} />
                    <div className={cn(s.status, {}, [s.status_new])}>
                        {t('Есть новые уведомления')}
                    </div>
                </HStack>
            }
        />
    );

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Popover
                    className={cn(s.outer, {}, [className])}
                    trigger={trigger}
                >
                    <NotificationsList className={s.list} />
                </Popover>
            }
            off={
                <PopoverDeprecated className={className} trigger={trigger}>
                    <NotificationsList className={s.list} />
                </PopoverDeprecated>
            }
        />
    );
});
