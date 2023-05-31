import React, { memo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import s from './Overlay.module.scss';

interface OverlayProps {
    onClick?: () => void;
    className?: string;
}

export const Overlay = memo((props: OverlayProps) => {
    const { onClick, className = '' } = props;

    const overlayClassName = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => s.overlayRedesigned,
        off: () => s.overlay,
    });

    return (
        <div
            className={cn(overlayClassName, {}, [className])}
            onClick={onClick}
        />
    );
});
