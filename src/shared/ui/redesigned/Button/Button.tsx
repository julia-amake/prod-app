import React, {
    ButtonHTMLAttributes,
    ElementType,
    memo,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Button.module.scss';

type ButtonVariant =
    | 'clear'
    | 'clearWithPaddings'
    | 'primary'
    | 'outlined'
    | 'red_outlined'
    | 'green_outlined';
type ButtonShape = 'rounded' | 'square' | 'circle';
type ButtonSize = 's' | 'm' | 'l';

export enum IconPosition {
    LEFT = 'position_left',
    RIGHT = 'position_right',
}

interface ButtonIcon {
    element: React.VFC<React.SVGProps<SVGSVGElement>>;
    position?: IconPosition;
    size?: ButtonSize;
    className?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    as?: ElementType;
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
    to?: string;
}

export const Button = memo((props: ButtonProps) => {
    const {
        as = 'button',
        variant = 'primary',
        shape = 'rounded',
        size = 'm',
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

    const ButtonElement = as;
    const Icon = useMemo(() => currIcon?.element, [currIcon]);

    const mods = useMemo(() => {
        const iconOnly = !!(Icon && !label);

        return {
            [s[`shape_${shape}`]]: !iconOnly,
            [s.shape_circle]: iconOnly,
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
        <ButtonElement
            className={cn(s.button, mods, [
                className,
                s[variant],
                s[`size_${size}`],
            ])}
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
                            s[`icon_size_${currIcon?.size}`],
                            currIcon?.className,
                        ],
                    )}
                />
            )}
        </ButtonElement>
    );
});
