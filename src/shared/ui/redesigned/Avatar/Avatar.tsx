import React, { CSSProperties, FC, useMemo } from 'react';
import ProfileDefault from '../../../assets/icons/ProfileDefault.svg';
import { cn } from '../../../lib/classNames/classNames';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import { HStack } from '../Stack';
import { Text } from '../Text';
import s from './Avatar.module.scss';

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: number;
    userName?: string;
    gap?: '8' | '16';
    className?: string;
    imageClassName?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        src = '',
        alt = '',
        userName,
        size = 96,
        className = '',
        gap = '8',
        imageClassName = '',
    } = props;

    // todo: сделать нормальные варианты размеров
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    return (
        <HStack
            className={cn(s.outer, {}, [className])}
            align="center"
            gap={gap}
        >
            <AppImage
                className={cn(s.avatar, {}, [imageClassName])}
                src={src}
                alt={alt}
                fallback={<Skeleton width={size} height={size} />}
                errorFallback={
                    <ProfileDefault
                        style={styles}
                        className={cn(s.avatar, {}, [imageClassName])}
                    />
                }
                style={styles}
            />
            {userName && <Text content={userName} margin="none" isBold />}
        </HStack>
    );
};
