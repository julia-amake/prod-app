import React, { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './AppLink.module.scss';

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    CLEAR = 'clear',
}

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export const AppLink = memo((props: AppLinkProps) => {
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
