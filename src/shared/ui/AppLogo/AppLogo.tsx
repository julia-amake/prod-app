import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { getRouteMain } from '@/shared/consts/router';
import { cn } from '@/shared/lib/classNames/classNames';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import Logo from '../../assets/icons/LogoGirl2.svg';
import s from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className = '' } = props;
    const { isHover, bindHover } = useHover();

    return (
        <div className={cn(s.outer, { [s.outerHovered]: isHover }, [className])}>
            <Link to={getRouteMain()} className={s.logo} {...bindHover}>
                <Logo />
            </Link>
        </div>
    );
});
