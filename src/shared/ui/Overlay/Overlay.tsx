import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import s from './Overlay.module.scss';

interface OverlayProps {
    onClick?: () => void;
    className?: string;
}

export const Overlay = memo((props: OverlayProps) => {
    const {
        onClick,
        className = '',
    } = props;

    return (
        <div
            className={cn(s.overlay, {}, [className])}
            onClick={onClick}
        />
    );
});
