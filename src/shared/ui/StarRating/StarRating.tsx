import React, {
    memo, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import StarFilled from '@/shared/assets/icons/StarFilled.svg';
import StarLine from '@/shared/assets/icons/StarLine.svg';
import { cn } from '@/shared/lib/classNames/classNames';

import { Icon } from '../Icon/Icon';
import { HStack } from '../Stack/HStack/HStack';

import s from './StarRating.module.scss';

const stars = [1, 2, 3, 4, 5];

interface StarRatingProps {
    className?: string;
    selectedStarsCount?: number;
    onSelect?: (starsCount: number) => void;
    size?: number;
}

export const StarRating = memo((props: StarRatingProps) => {
    const {
        selectedStarsCount = 0,
        size = 24,
        onSelect,
        className = '',
    } = props;

    const { t } = useTranslation();
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [currStarsCount, setCurrStarsCount] = useState<number>(0);
    const [hoveredStarsCount, setHoveredStarsCount] = useState(0);

    useEffect(() => {
        setIsSelected(!!selectedStarsCount);
        setCurrStarsCount(selectedStarsCount);
    }, [selectedStarsCount]);

    const StarIcon = (isSelected: boolean) => (isSelected ? StarFilled : StarLine);

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
        <HStack
            align="center"
            className={cn(s.outer, {}, [className])}
        >
            {
                stars.map((starNumber) => (
                    <div
                        className={cn(s.star, { [s.star_hovered]: !isSelected && hoveredStarsCount >= starNumber })}
                        key={starNumber}
                        onMouseEnter={onStarEnter(starNumber)}
                        onMouseLeave={onStarLeave}
                        onClick={onStarClick(starNumber)}
                    >
                        <Icon
                            svg={StarIcon(hoveredStarsCount >= starNumber || currStarsCount >= starNumber)}
                            width={size}
                            height={size}
                            className={cn(s.icon, {
                                [s.icon_hovered]: !isSelected && hoveredStarsCount >= starNumber,
                            })}
                        />
                        {starNumber === 1 && <div className={s.text}>{t('Плохо')}</div>}
                        {starNumber === 5 && <div className={s.text}>{t('Отлично')}</div>}
                    </div>
                ))
            }
        </HStack>
    );
});
