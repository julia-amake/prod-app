import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MOBILE_LARGE } from '@/shared/consts/devices';
import { cn } from '@/shared/lib/classNames/classNames';
import useWindowDimensions from '@/shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import {
    Heading,
    HeadingPosition,
    HeadingSize,
} from '@/shared/ui/deprecated/Heading';
import { Input } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import s from './RatingCard.module.scss';

interface RatingProps {
    rate?: number;
    title?: string;
    hasFeedback?: boolean;
    feedbackTitle?: string;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    className?: string;
}

export const RatingCard = memo((props: RatingProps) => {
    const { t } = useTranslation();

    const {
        rate = 0,
        title,
        hasFeedback = false,
        feedbackTitle = t('Оставьте отзыв'),
        onCancel,
        onAccept,
        className = '',
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState<number>(rate);
    const [feedback, setFeedback] = useState('');
    const { width } = useWindowDimensions();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(width <= MOBILE_LARGE);
    }, [width]);

    useEffect(() => {
        setStarsCount(rate);
    }, [rate]);

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const cancelHandler = useCallback(() => {
        onCancel?.(starsCount);
        setIsModalOpen(false);
    }, [onCancel, starsCount]);

    const acceptHandler = useCallback(() => {
        onAccept?.(starsCount, feedback);
        setIsModalOpen(false);
    }, [feedback, onAccept, starsCount]);

    const Feedback = useMemo(() => (isMobile ? Drawer : Modal), [isMobile]);

    return (
        <div className={cn(s.outer, {}, [className])} data-testid="RatingCard">
            <VStack align="center" gap="16">
                <Heading
                    content={
                        starsCount
                            ? t('Спасибо за оценку!')
                            : title || t('Вам понравилось?')
                    }
                    position={HeadingPosition.CENTER}
                />
                <StarRating
                    selectedStarsCount={starsCount}
                    size={24}
                    onSelect={onSelectStars}
                />
            </VStack>

            <Feedback isOpen={isModalOpen} onClose={cancelHandler} lazy>
                <VStack fullWidth gap="32">
                    <Heading
                        content={feedbackTitle}
                        size={HeadingSize.S}
                        className={s.modalTitle}
                    />
                    <Text
                        content={t(
                            'Ваше мнение очень важно, ' +
                                'именно ваша обратная связь помогает становиться лучше!',
                        )}
                        className={s.modalSubTitle}
                    />
                    <Input
                        type="textarea"
                        placeholder={t('Ваш отзыв')}
                        value={feedback}
                        onChange={setFeedback}
                        className={s.textarea}
                        data-testid="RatingCard.Input"
                    />
                    <VStack gap="8">
                        <Button
                            theme={ButtonTheme.OUTLINED}
                            label={t('Закрыть')}
                            onClick={cancelHandler}
                            data-testid="RatingCard.Close"
                        />
                        <Button
                            label={t('Отправить')}
                            onClick={acceptHandler}
                            data-testid="RatingCard.Send"
                        />
                    </VStack>
                </VStack>
            </Feedback>
        </div>
    );
});
