import React, { InputHTMLAttributes, memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string;
    inputClassName?: string;
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
        inputClassName = '',
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    const renderField = (type: string) => {
        switch (type) {
        case 'textarea':
            return (
                <textarea
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    className={cn(
                        s.field,
                        { [s.readonly]: readOnly },
                        [inputClassName, s.block],
                    )}
                    readOnly={readOnly}
                    {...(autoFocus ? { autoFocus: true } : {})}
                    {...otherProps}
                />
            );
        default:
            return (
                <input
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    className={cn(
                        s.field,
                        { [s.readonly]: readOnly },
                        [inputClassName],
                    )}
                    readOnly={readOnly}
                    {...(autoFocus ? { autoFocus: true } : {})}
                    {...otherProps}
                />
            );
        }
    };

    return (
        <div className={cn(s.wrapper, {}, [className])}>
            {label && (
                <div className={s.label}>
                    {label}
                </div>
            )}
            {renderField(type)}
        </div>
    );
});

export default Input;
