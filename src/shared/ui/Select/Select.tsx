import {
    ChangeEvent, SelectHTMLAttributes, useMemo,
} from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { typedMemo } from '@/shared/lib/utils/typedMemo';
import s from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

type SelectSize = 'M' | 'S';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'size'>

interface SelectProps<T extends string> extends HTMLSelectProps {
    label?: string;
    options: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    className?: string;
    readOnly?: boolean;
    size?: SelectSize;
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
    const {
        label = '',
        options,
        value,
        onChange,
        className = '',
        readOnly = false,
        size = 'M',
    } = props;

    const optionsList = useMemo(() => (
        options.map((opt: SelectOption<T>) => (
            <option
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    ), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={cn(s.outer, {}, [className])}>
            {label && (
                <div
                    className={s.label}
                >
                    {label}
                </div>
            )}
            <select
                className={cn(s.select, { [s.disabled]: readOnly }, [s[`select_size_${size}`]])}
                {...(value ? { value } : {})}
                onChange={onChangeHandler}
                disabled={readOnly}
            >
                {optionsList}
            </select>
        </div>
    );
});

export default Select;
