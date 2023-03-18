import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import s from './Paragraph.module.scss';

export enum ParagraphSize {
    L = 'size_l',
    M = 'size_m',
    S = 'size_s',
    XS = 'size_xs',
}

export enum ParagraphMargin {
    NONE = 'margin_none',
    ALL = 'margin_all',
    TOP_ONLY = 'margin_top_only',
    BOTTOM_ONLY = 'margin_bottom_only',
}

interface ParagraphProps {
    content: string;
    size?: ParagraphSize;
    isBold?: boolean;
    margin?: ParagraphMargin;
    className?: string;
}

export const Paragraph = memo((props: ParagraphProps) => {
    const {
        content,
        size = ParagraphSize.M,
        isBold = false,
        margin = ParagraphMargin.ALL,
        className = '',
    } = props;

    return (
        <p className={cn(
            s.outer,
            { [s.bold]: isBold },
            [s[size], s[margin], className],
        )}
        >
            {content}
        </p>
    );
});
