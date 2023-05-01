import React, { memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

export const Icon = memo((props: IconProps) => {
    const {
        svg,
        className = '',
        ...otherProps
    } = props;

    const Svg = svg;

    return (
        <Svg
            className={cn(s.icon, {}, [className])}
            {...otherProps}
        />
    );
});
