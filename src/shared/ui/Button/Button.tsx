import React, {
    ButtonHTMLAttributes, memo, useEffect, useMemo, useState,
} from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
    RED_OUTLINED = 'red_outlined',
}

export enum ButtonShape {
    ROUND = 'shape_rounded',
    SQUARE = 'shape_square',
    CIRCLE = 'shape_circle'
}

export enum IconPosition {
    LEFT = 'position_left',
    RIGHT = 'position_right'
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l'
}

interface ButtonIcon {
    element: React.VFC<React.SVGProps<SVGSVGElement>>;
    position?: IconPosition;
    size?: ButtonSize;
    className?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    shape?: ButtonShape;
    size?: ButtonSize;
    disabled?: boolean;
    isLoading?: boolean;
    label?: string;
    icon?: ButtonIcon;
    hoverUnderlined?: boolean;
    children?: never;
    onClick?: (value?: any) => void;
}

const Button = memo((props: ButtonProps) => {
    const {
        theme = ButtonTheme.PRIMARY,
        shape = ButtonShape.ROUND,
        size = ButtonSize.L,
        className = '',
        label = '',
        icon,
        hoverUnderlined = false,
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

    const mods = useMemo(() => {
        const iconOnly = !!(Icon && !label);

        return {
            [s[shape]]: iconOnly ? ButtonShape.CIRCLE : shape,
            [s.iconOnly]: iconOnly,
            [s.iconOnly_clear]: iconOnly && theme === ButtonTheme.CLEAR,
            [s.button_disabled]: isLoading || disabled,
            [s.button_reverse]: icon?.position === IconPosition.LEFT,
            [s.hover_underlined]: hoverUnderlined,
        };
    }, [Icon, label, shape, theme, isLoading, disabled, icon?.position, hoverUnderlined]);

    return (
        <button
            className={cn(
                s.button,
                mods,
                [className, s[theme], s[size]],
            )}
            type="button"
            disabled={disabled || isLoading}
            {...otherProps}
        >
            {label && (Icon ? <span>{label}</span> : label)}
            {Icon && (
                <Icon className={cn(
                    s.icon,
                    {
                        [s[`icon_${currIcon?.position}`]]: label,
                    },
                    [s[`icon_${theme}`], s[`icon_${currIcon?.size}`], currIcon?.className],
                )}
                />
            )}
        </button>
    );
});

export default Button;
