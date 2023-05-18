import React, { memo, useCallback } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize } from '../Button/Button';
import s from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: string;
}

interface TabsProps {
    tabs: TabItem[];
    value: string;
    disabled?: boolean;
    onTabClick: (tab: TabItem) => void;
    className?: string;
}

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export const Tabs = memo((props: TabsProps) => {
    const { tabs, value, disabled = false, onTabClick, className = '' } = props;

    const btnMods = (tabValue: string) => ({
        [s.btn_active]: value === tabValue,
        [s.btn_notActive]: value !== tabValue,
    });

    const clickHandler = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={cn(s.outer, {}, [className])}>
            {tabs.map((tab) => (
                <Button
                    label={tab.content}
                    onClick={clickHandler(tab)}
                    size={ButtonSize.S}
                    key={tab.value}
                    className={cn(s.btn, btnMods(tab.value))}
                    disabled={disabled}
                />
            ))}
        </div>
    );
});
