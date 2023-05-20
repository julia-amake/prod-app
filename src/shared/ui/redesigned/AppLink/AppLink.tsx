import React, { memo, ReactNode } from 'react';
import { Link, LinkProps, NavLink } from 'react-router-dom';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'danger' | 'clear';

export interface AppLinkProps extends LinkProps {
    className?: string;
    activeClassName?: string;
    variant?: AppLinkVariant;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        activeClassName,
        variant = 'primary',
        children,
        ...otherProps
    } = props;

    return activeClassName ? (
        <NavLink
            to={to}
            className={({ isActive }) =>
                cn(s.link, { [activeClassName]: isActive }, [
                    s[variant],
                    className,
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    ) : (
        <Link
            to={to}
            className={cn(s.link, {}, [s[variant], className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
