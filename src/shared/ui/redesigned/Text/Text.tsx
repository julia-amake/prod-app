import React, { ElementType, memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { getDangerouslySetInnerHTML } from '@/shared/lib/utils/getDangerouslySetInnerHTML';
import s from './Text.module.scss';

type TextSize = 'xs' | 's' | 'm' | 'l';
type TextMargin = 'none' | 'all' | 'top_only' | 'bottom_only';

interface ParagraphProps {
    as?: ElementType;
    content: string;
    size?: TextSize;
    isBold?: boolean;
    margin?: TextMargin;
    className?: string;
}

export const Text = memo((props: ParagraphProps) => {
    const {
        as: Tag = 'p',
        content,
        size = 'm',
        isBold = false,
        margin = 'all',
        className = '',
    } = props;

    return (
        <Tag
            {...getDangerouslySetInnerHTML(content)}
            className={cn(s.outer, { [s.bold]: isBold }, [
                s[`size_${size}`],
                s[`margin_${margin}`],
                className,
            ])}
        />
    );
});
