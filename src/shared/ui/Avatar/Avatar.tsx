import React, { CSSProperties, FC, useMemo } from 'react';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './Avatar.module.scss';

interface AvatarProps {
    src?: string;
    alt?: string;
    className?: string;
    size?: number;
}

const Avatar: FC<AvatarProps> = (props) => {
    const {
        src = '',
        alt = '',
        className = '',
        size = 96,
    } = props;

    // todo: сделать нормальные варианты размеров
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        src ? (
            <img
                className={cn(s.avatar, {}, [className])}
                src={src}
                alt={alt}
                style={styles}
            />
        ) : <div style={styles} className={cn(s.avatar, {}, [className])} />
    );
};

export default Avatar;
