import React, { InputHTMLAttributes, memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'placeholder' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    label?: string;
    placeholder?: string;
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
        autoFocus = false,
        onChange,
        className = '',
        ...otherProps
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cn(s.wrapper, {}, [className])}>
            {label && (
                <div
                    className={s.label}
                >
                    {t(label)}
                </div>
            )}
            <input
                name={name}
                type={type}
                value={value}
                placeholder={t(placeholder)}
                onChange={onChangeHandler}
                className={s.field}
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...(autoFocus ? { autoFocus: true } : {})}
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...otherProps}
            />
        </div>
    );
});

export default Input;
