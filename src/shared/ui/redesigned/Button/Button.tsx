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
type ButtonShape = 'rounded' | 'partial_rounded';
type ButtonSize = 's' | 'm' | 'l';

export enum IconPosition {
    LEFT = 'position_left',
    RIGHT = 'position_right',
}

type ButtonWidth = 'content' | 'full';

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
    width?: ButtonWidth;
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
        as: ButtonElement = 'button',
        to,
        variant = 'primary',
        shape = 'rounded',
        size = 'm',
        width = 'content',
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
        if (!icon) {
            setCurrIcon(null);
            return;
        }

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
                s[`width_${width}`],
            ])}
            disabled={disabled || isLoading}
            {...(to ? { to } : {})}
            {...(ButtonElement === 'button' ? { type: 'button' } : {})}
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
