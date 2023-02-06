import React, {ButtonHTMLAttributes} from 'react';
import {cn} from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

const Button: React.FC<ButtonProps> = (props) => {
    const {
        theme = ThemeButton.CLEAR,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(s.button, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
