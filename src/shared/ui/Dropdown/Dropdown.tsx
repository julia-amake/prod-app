import React, {
    ElementType, Fragment, memo, ReactNode,
} from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { ItemIcon } from 'shared/types';
import { Link } from 'react-router-dom';
import { Float } from '@headlessui-float/react';
import Heading from '../Heading/Heading';
import s from './Dropdown.module.scss';

interface DropdownItem {
    title: string,
    icon?: ItemIcon;
    onClick?: () => void;
    to?: string;
    disabled?: boolean;
}

type DropdownWidth = 'auto' | 'full' | 'fix' | 'minFix';

interface DropdownProps {
    trigger: ReactNode;
    title?: string;
    items: DropdownItem[];
    width?: DropdownWidth;
    className?: string;
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        trigger,
        items,
        title,
        width = 'minFix',
        className = '',
    } = props;

    return (
        <Menu as="div" className={cn(s.outer, {}, [s[`outer_width_${width}`], className])}>
            <Float
                as="div"
                floatingAs={Fragment}
                offset={8}
                flip={8}
                className={s.float}
            >
                <Menu.Button className={s.btn}>{trigger}</Menu.Button>
                <Menu.Items className={s.items}>
                    {title && <Heading content={title} className={s.title} />}
                    {items.map((item, idx, arr) => {
                        const ItemTag: ElementType = item.to ? Link : 'button';
                        const Icon = item.icon?.element;
                        return (
                            <Menu.Item as={Fragment}>
                                {({ active, disabled }) => (
                                    <ItemTag
                                        {...item.to ? { to: item.to } : { onClick: item.onClick }}
                                        className={cn(
                                            s.item,
                                            {
                                                [s.item_active]: active,
                                                [s.item_disabled]: disabled,
                                                [s.item_last]: idx === arr.length - 1,
                                            },
                                        )}
                                    >
                                        {Icon && <Icon className={s.icon} />}
                                        <span className={s.link}>{item.title}</span>
                                    </ItemTag>
                                )}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>
            </Float>
        </Menu>
    );
});
