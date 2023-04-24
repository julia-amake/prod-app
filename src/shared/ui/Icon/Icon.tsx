import React, { memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Icon.module.scss';

interface IconProps {
    svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

const Icon = memo((props: IconProps) => {
    const {
        svg,
        className = '',
    } = props;

    const Svg = svg;

    return (
        <Svg className={cn(s.icon, {}, [className])} />
    );
});

export default Icon;
