import React, { ElementType, memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { getDangerouslySetInnerHTML } from '@/shared/lib/utils/getDangerouslySetInnerHTML';

import s from './Text.module.scss';

export enum TextSize {
    L = 'size_l',
    M = 'size_m',
    S = 'size_s',
    XS = 'size_xs',
}

export enum TextMargin {
    NONE = 'margin_none',
    ALL = 'margin_all',
    TOP_ONLY = 'margin_top_only',
    BOTTOM_ONLY = 'margin_bottom_only',
}

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
        size = TextSize.M,
        isBold = false,
        margin = TextMargin.ALL,
        className = '',
    } = props;

    return (
        <Tag
            {...getDangerouslySetInnerHTML(content)}
            className={cn(
                s.outer,
                { [s.bold]: isBold },
                [s[size], s[margin], className],
            )}
        />
    );
});
