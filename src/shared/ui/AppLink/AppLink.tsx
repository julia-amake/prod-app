import React, { memo, ReactNode } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

const AppLink = memo((props: AppLinkProps) => {
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
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...otherProps}
        >
            {children}
        </Link>
    );
});

export default AppLink;
