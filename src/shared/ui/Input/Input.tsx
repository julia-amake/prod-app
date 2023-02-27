import React, {
    FC, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { cn } from 'shared/lib/classNames/classNames';
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

const Input: FC<InputProps> = memo((props) => {
    const {
        type = 'text',
        label,
        placeholder,
        value,
        name,
        autofocus = false,
        onChange,
        className,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) ref.current?.focus();
    }, [autofocus]);

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
                ref={ref}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChangeHandler}
                className={s.field}
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...otherProps}
            />
        </div>
    );
});

export default Input;
