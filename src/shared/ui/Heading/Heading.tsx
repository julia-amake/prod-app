import React, { ElementType, ReactNode } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import s from './Heading.module.scss';

export enum HeadingSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum HeadingPosition {
    LEFT = 'position_left',
    CENTER = 'position_center',
}

interface HeadingProps {
    as?: ElementType;
    children: ReactNode;
    size?: HeadingSize;
    position?: HeadingPosition;
    className?: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
    const {
        as: Tag = 'p',
        children,
        size = HeadingSize.M,
        position = HeadingPosition.LEFT,
        className,
    } = props;

    return (
        <Tag className={cn(s.heading, {}, [s[size], s[position], className])}>
            {children}
        </Tag>
    );
};

export default Heading;
