import React, {
    ButtonHTMLAttributes, memo, useEffect, useMemo, useState,
} from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
}

export enum ButtonShape {
    ROUND = 'shape_rounded',
    SQUARE = 'shape_square'
}

export enum IconPosition {
    LEFT = 'position_left',
    RIGHT = 'position_right'
}

export enum ButtonSize {
    S= 'size_s',
    M= 'size_m',
    L= 'size_l'
}

interface ButtonIcon {
    element: React.VFC<React.SVGProps<SVGSVGElement>>;
    position?: IconPosition;
    size?: ButtonSize;
    className?: string;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    shape?: ButtonShape;
    size?: ButtonSize;
    disabled?: boolean;
    isLoading?: boolean;
    label?: string;
    icon?: ButtonIcon;
    children?: never;
}

const Button = memo((props: ButtonProps) => {
    const {
        theme = ButtonTheme.PRIMARY,
        shape = ButtonShape.ROUND,
        size = ButtonSize.L,
        className = '',
        label = '',
        icon,
        disabled = false,
        isLoading = false,
        ...otherProps
    } = props;

    const [currIcon, setCurrIcon] = useState<ButtonIcon | null>(null);

    useEffect(() => {
        if (!icon) return;

        setCurrIcon({
            element: icon.element,
            size: icon.size || size,
            position: (!icon.position && label) ? IconPosition.RIGHT : icon.position,
            className: icon.className || '',
        });
    }, [label, icon, size]);

    const Icon = useMemo(() => currIcon?.element, [currIcon]);

    return (
        <button
            className={cn(
                s.button,
                {
                    // todo разобраться с as boolean
                    [s.iconOnly]: (Icon && !label) as boolean,
                    [s.button_disabled]: isLoading || disabled,
                    [s.button_reverse]: icon?.position === IconPosition.LEFT,
                },
                [className, s[theme], s[shape], s[size]],
            )}
            type="button"
            disabled={disabled || isLoading}
            {...otherProps}
        >
            {label && <span>{label}</span>}
            {Icon && (
                <Icon className={cn(
                    s.icon,
                    { [s[`icon_${currIcon?.position}`]]: label },
                    [s[`icon_${currIcon?.size}`], currIcon?.className],
                )}
                />
            )}
        </button>
    );
});

export default Button;
