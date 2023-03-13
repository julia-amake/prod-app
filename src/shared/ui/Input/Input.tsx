import React, { InputHTMLAttributes, memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'placeholder' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string | number;
    label?: string;
    placeholder?: string;
    readOnly?: boolean;
    autofocus?: boolean;
    onChange?: (value: string) => void;
}

const Input = memo((props: InputProps) => {
    const {
        type = 'text',
        label,
        placeholder = '',
        value,
        name,
        readOnly = false,
        autoFocus = false,
        onChange,
        className = '',
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cn(s.wrapper, {}, [className])}>
            {label && (
                <div
                    className={s.label}
                >
                    {label}
                </div>
            )}
            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChangeHandler}
                className={cn(s.field, { [s.readonly]: readOnly }, [])}
                readOnly={readOnly}
                {...(autoFocus ? { autoFocus: true } : {})}
                {...otherProps}
            />
        </div>
    );
});

export default Input;
