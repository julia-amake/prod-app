import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { getRouteMain } from '@/shared/consts/router';
import { cn } from '@/shared/lib/classNames/classNames';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import Logo from '../../../assets/icons/LogoGirl.svg';
import LogoText from '../../../assets/icons/LogoText.svg';
import s from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    size?: number;
    withText?: boolean;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { size, withText = true, className = '' } = props;
    const { isHover, bindHover } = useHover();

    return (
        <div
            className={cn(s.outer, { [s.outerHovered]: isHover }, [className])}
            {...(size ? { style: { width: `${size}px` } } : {})}
        >
            <Link to={getRouteMain()} className={s.logo} {...bindHover}>
                <Logo className={cn(s.pic, { [s.picFull]: !withText })} />
                {withText && <LogoText className={s.text} />}
            </Link>
        </div>
    );
});
