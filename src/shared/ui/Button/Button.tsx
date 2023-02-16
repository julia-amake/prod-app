import { FC, ButtonHTMLAttributes } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINED = 'outlined'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        theme = ThemeButton.PRIMARY,
        className = '',
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(
                s.button,
                { [s[theme]]: true },
                [className],
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
