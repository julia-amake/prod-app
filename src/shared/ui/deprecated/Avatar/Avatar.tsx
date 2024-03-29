import React, { CSSProperties, FC, useMemo } from 'react';
import ProfileDefault from '../../../assets/icons/ProfileDefault.svg';
import { cn } from '../../../lib/classNames/classNames';
import { AppImage } from '../../redesigned/AppImage';
import { Skeleton } from '../Skeleton';
import s from './Avatar.module.scss';

interface AvatarProps {
    src?: string;
    alt?: string;
    className?: string;
    size?: number;
}

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export const Avatar: FC<AvatarProps> = (props) => {
    const { src = '', alt = '', className = '', size = 96 } = props;

    // todo: сделать нормальные варианты размеров
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    return (
        <AppImage
            className={cn(s.avatar, {}, [className])}
            src={src}
            alt={alt}
            fallback={<Skeleton width={size} height={size} />}
            errorFallback={
                <ProfileDefault
                    style={styles}
                    className={cn(s.avatar, {}, [className])}
                />
            }
            style={styles}
        />
    );
};
