import { FC, ButtonHTMLAttributes } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        theme,
        className = '',
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(
                s.button,
                { [s.clear]: theme === ThemeButton.CLEAR },
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
