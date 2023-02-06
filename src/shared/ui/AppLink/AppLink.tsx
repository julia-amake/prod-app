import React from 'react';
import {cn} from 'shared/lib/classNames/classNames';
import s from './AppLink.module.scss';
import {Link, LinkProps} from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={cn(s.link, {}, [s[theme], className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
