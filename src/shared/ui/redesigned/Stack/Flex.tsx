import React, { ElementType, ReactNode } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Flex.module.scss';

export type FlexJustify =
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch';
export type FlexAlign = 'start' | 'end' | 'center' | 'stretch';
export type FlexDirection = 'row' | 'col' | 'rowReverse' | 'colReverse';
export type FlexGap = '4' | '8' | '16' | '24' | '32' | '40' | 'none';

const justifyClasses: Record<FlexJustify, string> = {
    start: s.justify_start,
    end: s.justify_end,
    center: s.justify_center,
    between: s.justify_between,
    around: s.justify_around,
    evenly: s.justify_evenly,
    stretch: s.justify_stretch,
};

const alignClasses: Record<FlexAlign, string> = {
    start: s.align_start,
    end: s.align_end,
    center: s.align_center,
    stretch: s.align_stretch,
};

const directionClasses: Record<FlexDirection, string> = {
    row: s.direction_row,
    col: s.direction_col,
    rowReverse: s.direction_rowReverse,
    colReverse: s.direction_colReverse,
};

const gapClasses: Record<FlexGap, string> = {
    4: s.gap_4,
    8: s.gap_8,
    16: s.gap_16,
    24: s.gap_24,
    32: s.gap_32,
    40: s.gap_40,
    none: s.gap_none,
};

export interface FlexProps {
    className?: string;
    as?: ElementType;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    wrap?: boolean;
    gap?: FlexGap;
    fullWidth?: boolean;
    customProps?: object;
}

export const Flex = (props: FlexProps) => {
    const {
        className = '',
        as = 'div',
        children,
        justify = 'start',
        align = 'stretch',
        direction = 'row',
        wrap = false,
        gap = 'none',
        fullWidth = false,
        customProps,
        ...otherProps
    } = props;

    const Tag = as;

    return (
        <Tag
            className={cn(
                s.flex,
                { [s.fullWidth]: fullWidth, [s.wrap]: wrap, [s.nowrap]: !wrap },
                [
                    className,
                    justifyClasses[justify],
                    alignClasses[align],
                    directionClasses[direction],
                    gapClasses[gap],
                ],
            )}
            {...customProps}
            {...otherProps}
        >
            {children}
        </Tag>
    );
};
