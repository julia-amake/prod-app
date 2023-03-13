import {
    ChangeEvent, FC, memo, SelectHTMLAttributes, useMemo,
} from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import s from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>

interface SelectProps extends HTMLSelectProps {
    label?: string;
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    readOnly?: boolean;
}

const Select: FC<SelectProps> = memo((props) => {
    const {
        label = '',
        options,
        value,
        onChange,
        className = '',
        readOnly = false,
    } = props;

    const optionsList = useMemo(() => (
        options.map((opt: SelectOption) => (
            <option
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    ), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
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
                className={cn(s.select, { [s.disabled]: readOnly })}
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
