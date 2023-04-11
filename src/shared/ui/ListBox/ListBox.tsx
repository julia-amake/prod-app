import React, { Fragment } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { cn } from 'shared/lib/classNames/classNames';
import { Float } from '@headlessui-float/react';
import s from './ListBox.module.scss';

interface ListBoxItemIcon {
    element: React.VFC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

export interface ListBoxOption {
    value: string,
    title: string,
    icon?: ListBoxItemIcon
    disabled?: boolean
}

type ListBoxWidth = 'full' | 'fixed' | 'minFixed' | 'auto';

interface ListBoxProps {
    label?: string,
    options?: ListBoxOption[];
    value?: string;
    defaultValue?: string;
    className?: string;
    width?: ListBoxWidth;
    readonly?: boolean;
    onChange: (value: string) => void;
}

export const ListBox = (props: ListBoxProps) => {
    const {
        label,
        options,
        value,
        defaultValue,
        width = 'full',
        readonly = false,
        className = '',
        onChange,
    } = props;

    return (
        <div className={cn(s.outer, {}, [className, s[`outer_width_${width}`]])}>
            {label && (
                <div className={s.label}>
                    {label}
                </div>
            )}
            <HListBox
                as="div"
                value={value}
                onChange={onChange}
                className={s.select}
                disabled={readonly || !options || !options.length}
            >
                <Float
                    as="div"
                    floatingAs={Fragment}
                    offset={12}
                    flip={8}
                >
                    <HListBox.Button
                        className={cn(s.btn, { [s.btn_disabled]: readonly })}
                    >
                        {value ?? defaultValue}
                    </HListBox.Button>
                    <HListBox.Options
                        className={s.options}
                    >
                        {options?.map((item) => (
                            <HListBox.Option
                                key={item.value}
                                value={item.value}
                                disabled={item.disabled}
                                as={Fragment}
                            >
                                {({ active, selected, disabled }) => (
                                    <li className={cn(s.option, {
                                        [s.option_active]: active,
                                        [s.option_selected]: selected,
                                        [s.option_disabled]: disabled,
                                    })}
                                    >
                                        {item.title}
                                    </li>
                                )}
                            </HListBox.Option>
                        ))}
                    </HListBox.Options>
                </Float>
            </HListBox>
        </div>
    );
};
