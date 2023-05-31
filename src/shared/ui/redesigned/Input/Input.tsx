import React, { InputHTMLAttributes, memo, useMemo, useState } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon';
import { HStack, HStackReverse, VStack } from '../Stack';
import s from './Input.module.scss';

export interface InputIcon {
    element: React.VFC<React.SVGProps<SVGSVGElement>>;
    position?: 'left' | 'right';
}

type InputLabelPosition = 'top' | 'left';
type InputSize = 's' | 'm' | 'l';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    'onChange' | 'size'
>;
interface InputProps extends HTMLInputProps {
    className?: string;
    inputClassName?: string;
    type?: string;
    value?: string | number;
    size?: InputSize;
    label?: string;
    labelPosition?: InputLabelPosition;
    placeholder?: string;
    readOnly?: boolean;
    autofocus?: boolean;
    onChange?: (value: string) => void;
    icon?: InputIcon;
}

export const Input = memo((props: InputProps) => {
    const {
        type = 'text',
        size = 'm',
        label,
        labelPosition = 'left',
        placeholder = '',
        icon,
        value,
        name,
        readOnly = false,
        autoFocus = false,
        onChange,
        className = '',
        inputClassName = '',
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const isIconLeft = useMemo(() => icon?.position === 'left', [icon]);
    const isRow = useMemo(() => labelPosition === 'left', [labelPosition]);

    const onChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
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
                        className={cn(s.field, { [s.readonly]: readOnly }, [
                            inputClassName,
                            s.block,
                        ])}
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
                        className={cn(s.field, { [s.readonly]: readOnly }, [
                            inputClassName,
                        ])}
                        readOnly={readOnly}
                        {...(autoFocus ? { autoFocus: true } : {})}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        {...otherProps}
                    />
                );
        }
    };
    const WrapperStack = isRow ? HStack : VStack;
    const InnerStack = isIconLeft ? HStack : HStackReverse;

    return (
        <WrapperStack
            className={cn(s.wrapper, {}, [className])}
            align={isRow ? 'center' : 'start'}
            gap="8"
        >
            {label && <div className={s.label}>{label}</div>}
            <InnerStack
                align="center"
                justify={isIconLeft ? 'between' : 'start'}
                className={cn(
                    s.inner,
                    {
                        [s.inner_icon_left]: !!icon?.position && isIconLeft,
                        [s.inner_icon_right]: !!icon?.position && !isIconLeft,
                        [s.inner_focused]: isFocused && !readOnly,
                    },
                    [s[`inner_size_${size}`]],
                )}
            >
                {icon && (
                    <Icon svg={icon.element} size="s" className={s.icon} />
                )}
                {renderField(type)}
            </InnerStack>
        </WrapperStack>
    );
});
