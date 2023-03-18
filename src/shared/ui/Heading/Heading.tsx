import React, {
    ElementType, memo,
} from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { getDangerouslySetInnerHTML } from 'shared/lib/utils/getDangerouslySetInnerHTML';
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
    content: string;
    size?: HeadingSize;
    position?: HeadingPosition;
    className?: string;
}

const Heading = memo((props: HeadingProps) => {
    const {
        as: Tag = 'p',
        content,
        size = HeadingSize.M,
        position = HeadingPosition.LEFT,
        className,
    } = props;

    return (
        <Tag
            {...getDangerouslySetInnerHTML(content)}
            className={cn(s.heading, {}, [s[size], s[position], className])}
        />
    );
});

export default Heading;
