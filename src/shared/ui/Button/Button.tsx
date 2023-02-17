import { FC, ButtonHTMLAttributes } from 'react';
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
    size?: ButtonSize,
    iconOnly?: boolean,
}

const Button: FC<ButtonProps> = (props) => {
    const {
        theme = ButtonTheme.PRIMARY,
        shape = ButtonShape.ROUND,
        size = ButtonSize.L,
        iconOnly = false,
        className = '',
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(
                s.button,
                { [s.iconOnly]: iconOnly },
                [className, s[theme], s[shape], s[size]],
            )}
            type="button"
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
