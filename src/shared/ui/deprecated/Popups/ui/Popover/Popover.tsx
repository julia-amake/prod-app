import { Popover as HPopover } from '@headlessui/react';
import { Float } from '@headlessui-float/react';
import React, { Fragment, memo, ReactNode } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import sPopup from '../../styles/popup.module.scss';
import { PopoverWidth } from '../../types/popover';
import s from './Popover.module.scss';

interface PopoverProps {
    trigger: ReactNode;
    className?: string;
    width?: PopoverWidth;
    disabled?: boolean;
    children: ReactNode;
}

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export const Popover = memo((props: PopoverProps) => {
    const { trigger, width = 'minFix', disabled = false, children, className = '' } = props;

    return (
        <HPopover as="div" className={cn(sPopup.outer, {}, [sPopup[`outer_width_${width}`]])}>
            <Float as="div" floatingAs={Fragment} offset={8} flip={8} className={s.float}>
                <HPopover.Button className={cn(s.btn, { [sPopup.btn_disabled]: disabled }, [sPopup.btn])}>
                    {trigger}
                </HPopover.Button>
                <HPopover.Panel className={cn(s.panel, {}, [sPopup.items, className])}>
                    {children}
                </HPopover.Panel>
            </Float>
        </HPopover>
    );
});
