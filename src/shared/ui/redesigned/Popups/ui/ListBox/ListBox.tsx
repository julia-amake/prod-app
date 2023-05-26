import { Listbox as HListBox } from '@headlessui/react';
import { Float } from '@headlessui-float/react';
import React, { Fragment, useMemo } from 'react';
import ArrowIcon from '@/shared/assets/icons/redesigned/ArrowDown.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { ItemIcon } from '@/shared/types';
import sPopup from '../../styles/popup.module.scss';
import { PopoverWidth } from '../../types/popover';
import s from './ListBox.module.scss';

export interface ListBoxOption<T extends string> {
    value: T;
    title: string;
    icon?: ItemIcon;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    label?: string;
    options?: ListBoxOption<T>[];
    value?: T;
    defaultValue?: string;
    className?: string;
    width?: PopoverWidth;
    readonly?: boolean;
    onChange: (value: T) => void;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
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

    const selectedOption = useMemo(
        () => options?.find((opt) => opt.value === value),
        [options, value],
    );

    const onChangeHandler = (selectedValue: T) => {
        if (selectedValue === value) return;
        onChange(selectedValue);
    };

    return (
        <div
            className={cn(sPopup.outer, {}, [
                className,
                sPopup[`outer_width_${width}`],
            ])}
        >
            {label && <div className={s.label}>{label}</div>}
            <HListBox
                as="div"
                value={value}
                onChange={onChangeHandler}
                className={s.select}
                disabled={readonly || !options || !options.length}
            >
                <Float as="div" floatingAs={Fragment} offset={8} flip={8}>
                    <HListBox.Button
                        className={cn(
                            s.btn,
                            { [sPopup.btn_disabled]: readonly },
                            [sPopup.btn],
                        )}
                    >
                        <span>{selectedOption?.title ?? defaultValue}</span>
                        <ArrowIcon className={s.arrow} />
                    </HListBox.Button>
                    <HListBox.Options
                        className={cn(s.options, {}, [sPopup.items])}
                    >
                        {options?.map((item) => (
                            <HListBox.Option
                                key={item.value}
                                value={item.value}
                                disabled={item.disabled}
                                as={Fragment}
                            >
                                {({ active, selected, disabled }) => (
                                    <li
                                        className={cn(s.option, {
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
