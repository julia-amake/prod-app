import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
}

export enum ButtonShape {
    ROUND = 'shape-rounded',
    SQUARE = 'shape-square'
}

export enum ButtonSize {
    S= 'size-s',
    M= 'size-m',
    L= 'size-l'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    shape?: ButtonShape;
    size?: ButtonSize;
    iconOnly?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    children: ReactNode;
}

const Button = memo((props: ButtonProps) => {
    const {
        theme = ButtonTheme.PRIMARY,
        shape = ButtonShape.ROUND,
        size = ButtonSize.L,
        iconOnly = false,
        className = '',
        children,
        disabled = false,
        isLoading = false,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(
                s.button,
                {
                    [s.iconOnly]: iconOnly,
                    [s.button_disabled]: isLoading || disabled,
                },
                [className, s[theme], s[shape], s[size]],
            )}
            type="button"
            disabled={disabled || isLoading}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...otherProps}
        >
            {children}
        </button>
    );
});

export default Button;
