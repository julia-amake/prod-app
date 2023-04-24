import React, {
    ElementType, Fragment, memo, ReactNode,
} from 'react';
import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Float } from '@headlessui-float/react';
import { ItemIcon } from '@/shared/types';
import { cn } from '@/shared/lib/classNames/classNames';
import { PopoverWidth } from '../../types/popover';
import Heading from '../../../Heading/Heading';
import sPopup from '../../styles/popup.module.scss';
import s from './Dropdown.module.scss';

interface DropdownItem {
    title: string,
    icon?: ItemIcon;
    onClick?: () => void;
    to?: string;
    disabled?: boolean;
}

interface DropdownProps {
    trigger: ReactNode;
    title?: string;
    items: DropdownItem[];
    width?: PopoverWidth;
    className?: string;
    disabled?: boolean;
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        trigger,
        items,
        title,
        width = 'minFix',
        disabled = true,
        className = '',
    } = props;

    return (
        <Menu as="div" className={cn(sPopup.outer, {}, [sPopup[`outer_width_${width}`], className])}>
            <Float
                as="div"
                floatingAs={Fragment}
                offset={8}
                flip={8}
                className={s.float}
            >
                <Menu.Button className={cn(s.btn, { [sPopup.btn_disabled]: disabled }, [sPopup.btn])}>{trigger}</Menu.Button>
                <Menu.Items className={cn(s.items, {}, [sPopup.items])}>
                    {title && <Heading content={title} className={sPopup.title} />}
                    {items.map((item, idx, arr) => {
                        const ItemTag: ElementType = item.to ? Link : 'button';
                        const Icon = item.icon?.element;
                        return (
                            <Menu.Item as={Fragment} key={item.title}>
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
