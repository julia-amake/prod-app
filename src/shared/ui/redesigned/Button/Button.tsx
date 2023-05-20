import React, {
    ButtonHTMLAttributes,
    memo,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Button.module.scss';

type ButtonVariant = 'clear' | 'primary' | 'outlined' | 'red_outlined';

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export enum ButtonShape {
    ROUND = 'shape_rounded',
    SQUARE = 'shape_square',
    CIRCLE = 'shape_circle',
}

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export enum IconPosition {
    LEFT = 'position_left',
    RIGHT = 'position_right',
}

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ButtonIcon {
    element: React.VFC<React.SVGProps<SVGSVGElement>>;
    position?: IconPosition;
    size?: ButtonSize;
    className?: string;
}

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
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

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export const Button = memo((props: ButtonProps) => {
    const {
        variant = 'primary',
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
            position:
                !icon.position && label ? IconPosition.RIGHT : icon.position,
            className: icon.className || '',
        });
    }, [label, icon, size]);

    const Icon = useMemo(() => currIcon?.element, [currIcon]);

    const mods = useMemo(() => {
        const iconOnly = !!(Icon && !label);

        return {
            [s[shape]]: iconOnly ? ButtonShape.CIRCLE : shape,
            [s.iconOnly]: iconOnly,
            [s.iconOnly_clear]: iconOnly && variant === 'clear',
            [s.button_disabled]: isLoading || disabled,
            [s.button_reverse]: icon?.position === IconPosition.LEFT,
            [s.hover_underlined]: hoverUnderlined,
        };
    }, [
        Icon,
        label,
        shape,
        variant,
        isLoading,
        disabled,
        icon?.position,
        hoverUnderlined,
    ]);

    return (
        <button
            className={cn(s.button, mods, [className, s[variant], s[size]])}
            type="button"
            disabled={disabled || isLoading}
            {...otherProps}
        >
            {label && (Icon ? <span>{label}</span> : label)}
            {Icon && (
                <Icon
                    className={cn(
                        s.icon,
                        {
                            [s[`icon_${currIcon?.position}`]]: label,
                        },
                        [
                            s[`icon_${variant}`],
                            s[`icon_${currIcon?.size}`],
                            currIcon?.className,
                        ],
                    )}
                />
            )}
        </button>
    );
});
