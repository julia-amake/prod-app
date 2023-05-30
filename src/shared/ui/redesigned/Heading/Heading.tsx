import React, { ElementType, memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { getDangerouslySetInnerHTML } from '@/shared/lib/utils/getDangerouslySetInnerHTML';
import s from './Heading.module.scss';

type HeadingSize = 'xs' | 's' | 'm';
type HeadingPosition = 'left' | 'center';

interface HeadingProps {
    as?: ElementType;
    content: string;
    size?: HeadingSize;
    isBold?: boolean;
    position?: HeadingPosition;
    className?: string;
}

export const Heading = memo((props: HeadingProps) => {
    const {
        as: Tag = 'p',
        content,
        size = 'm',
        isBold = false,
        position = 'left',
        className,
        ...otherProps
    } = props;

    return (
        <Tag
            {...getDangerouslySetInnerHTML(content)}
            className={cn(s.heading, { [s.bold]: isBold }, [
                s[`size_${size}`],
                s[`position_${position}`],
                className,
            ])}
            {...otherProps}
        />
    );
});
