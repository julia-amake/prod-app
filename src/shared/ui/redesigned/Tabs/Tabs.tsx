import React, { memo, useCallback } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { Button } from '../Button';
import s from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: string;
}

type TabsDirection = 'row' | 'column';

interface TabsProps {
    tabs: TabItem[];
    value: string;
    direction?: TabsDirection;
    disabled?: boolean;
    onTabClick: (tab: TabItem) => void;
    className?: string;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        tabs,
        value,
        direction = 'row',
        disabled = false,
        onTabClick,
        className = '',
    } = props;

    const clickHandler = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div
            className={cn(s.outer, {}, [
                s[`outer_direction_${direction}`],
                className,
            ])}
        >
            {tabs.map((tab) => (
                <Button
                    label={tab.content}
                    {...(value !== tab.value
                        ? { onClick: clickHandler(tab) }
                        : {})}
                    size="m"
                    key={tab.value}
                    disabled={disabled}
                    variant={
                        value === tab.value ? 'primary' : 'clearWithPaddings'
                    }
                />
            ))}
        </div>
    );
});
