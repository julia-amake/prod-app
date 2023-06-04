import React, { memo, useEffect, useState } from 'react';
import StarFilled from '@/shared/assets/icons/redesigned/StarFilled.svg';
import StarOutlined from '@/shared/assets/icons/redesigned/StarOutlined.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { Icon, IconSize } from '../Icon/Icon';
import { HStack } from '../Stack/HStack/HStack';
import s from './StarRating.module.scss';

const stars = [1, 2, 3, 4, 5];

interface StarRatingProps {
    className?: string;
    selectedStarsCount?: number;
    onSelect?: (starsCount: number) => void;
    size?: IconSize;
}

export const StarRating = memo((props: StarRatingProps) => {
    const {
        selectedStarsCount = 0,
        size = 'm',
        onSelect,
        className = '',
    } = props;

    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [currStarsCount, setCurrStarsCount] = useState<number>(0);
    const [hoveredStarsCount, setHoveredStarsCount] = useState(0);

    useEffect(() => {
        setIsSelected(!!selectedStarsCount);
        setCurrStarsCount(selectedStarsCount);
    }, [selectedStarsCount]);

    const StarIcon = (isSelected: boolean) =>
        isSelected ? StarFilled : StarOutlined;

    const onStarEnter = (starsCount: number) => () => {
        if (isSelected) return;
        setHoveredStarsCount(starsCount);
    };

    const onStarLeave = () => {
        if (isSelected || !hoveredStarsCount) return;
        setHoveredStarsCount(0);
    };

    const onStarClick = (starsCount: number) => () => {
        if (isSelected) return;
        onSelect?.(starsCount);
        setIsSelected(true);
        setCurrStarsCount(starsCount);
        setHoveredStarsCount(0);
    };

    return (
        <HStack align="center" className={cn(s.outer, {}, [className])} gap="8">
            {stars.map((starNumber) => (
                <div
                    className={cn(s.star, {
                        [s.star_hovered]:
                            !isSelected && hoveredStarsCount >= starNumber,
                    })}
                    key={starNumber}
                    onMouseEnter={onStarEnter(starNumber)}
                    onMouseLeave={onStarLeave}
                    onClick={onStarClick(starNumber)}
                    data-testid={`StarRating.Star-${starNumber}`}
                    data-selected={isSelected && currStarsCount >= starNumber}
                >
                    <Icon
                        svg={StarIcon(
                            hoveredStarsCount >= starNumber ||
                                currStarsCount >= starNumber,
                        )}
                        size={size}
                    />
                </div>
            ))}
        </HStack>
    );
});
