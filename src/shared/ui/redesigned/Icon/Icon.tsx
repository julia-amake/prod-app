import React, { memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Icon.module.scss';

export type IconSize = 's' | 'm' | 'l';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    size?: IconSize;
    className?: string;
}

export const Icon = memo((props: IconProps) => {
    const { svg, size = 'm', className = '', ...otherProps } = props;

    const Svg = svg;

    return (
        <Svg
            className={cn(s.icon, {}, [className, s[`icon_size_${size}`]])}
            {...otherProps}
        />
    );
});
