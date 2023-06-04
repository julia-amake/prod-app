import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MOBILE_LARGE } from '@/shared/consts/devices';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import useWindowDimensions from '@/shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import {
    Heading as HeadingDeprecated,
    HeadingPosition,
    HeadingSize,
} from '@/shared/ui/deprecated/Heading';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating as StarRatingDeprecated } from '@/shared/ui/deprecated/StarRating';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Heading } from '@/shared/ui/redesigned/Heading';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';
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

    const modalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Feedback isOpen={isModalOpen} onClose={cancelHandler} lazy>
                    <VStack fullWidth gap="16">
                        <Heading
                            content={feedbackTitle}
                            className={s.modalTitle}
                        />
                        <Text
                            content={t(
                                'Ваше мнение очень важно, ' +
                                    'именно ваша обратная связь помогает становиться лучше!',
                            )}
                            margin="none"
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
                        <HStack gap="8">
                            <Button
                                className={s.redesigned_feedback_button}
                                label={t('Закрыть')}
                                variant="red_outlined"
                                onClick={cancelHandler}
                                data-testid="RatingCard.Close"
                            />
                            <Button
                                className={s.redesigned_feedback_button}
                                label={t('Отправить')}
                                variant="green_outlined"
                                onClick={acceptHandler}
                                data-testid="RatingCard.Send"
                            />
                        </HStack>
                    </VStack>
                </Feedback>
            }
            off={
                <Feedback isOpen={isModalOpen} onClose={cancelHandler} lazy>
                    <VStack fullWidth gap="32">
                        <HeadingDeprecated
                            content={feedbackTitle}
                            size={HeadingSize.S}
                            className={s.modalTitle}
                        />
                        <TextDeprecated
                            content={t(
                                'Ваше мнение очень важно, ' +
                                    'именно ваша обратная связь помогает становиться лучше!',
                            )}
                            className={s.modalSubTitle}
                        />
                        <InputDeprecated
                            type="textarea"
                            placeholder={t('Ваш отзыв')}
                            value={feedback}
                            onChange={setFeedback}
                            className={s.textarea}
                            data-testid="RatingCard.Input"
                        />
                        <VStack gap="8">
                            <ButtonDeprecated
                                theme={ButtonTheme.OUTLINED}
                                label={t('Закрыть')}
                                onClick={cancelHandler}
                                data-testid="RatingCard.Close"
                            />
                            <ButtonDeprecated
                                label={t('Отправить')}
                                onClick={acceptHandler}
                                data-testid="RatingCard.Send"
                            />
                        </VStack>
                    </VStack>
                </Feedback>
            }
        />
    );

    const ratingContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack align="center" gap="8">
                    <Heading
                        content={
                            starsCount
                                ? t('Спасибо за оценку!')
                                : title || t('Вам понравилось?')
                        }
                        position="center"
                        isBold={false}
                        size="s"
                    />
                    <StarRating
                        selectedStarsCount={starsCount}
                        size="l"
                        onSelect={onSelectStars}
                    />
                </VStack>
            }
            off={
                <VStack align="center" gap="16">
                    <HeadingDeprecated
                        content={
                            starsCount
                                ? t('Спасибо за оценку!')
                                : title || t('Вам понравилось?')
                        }
                        position={HeadingPosition.CENTER}
                    />
                    <StarRatingDeprecated
                        selectedStarsCount={starsCount}
                        size={24}
                        onSelect={onSelectStars}
                    />
                </VStack>
            }
        />
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div
                    className={cn(s.redesigned_outer, {}, [className])}
                    data-testid="RatingCard"
                >
                    {ratingContent}
                    {modalContent}
                </div>
            }
            off={
                <div
                    className={cn(s.outer, {}, [className])}
                    data-testid="RatingCard"
                >
                    {ratingContent}
                    {modalContent}
                </div>
            }
        />
    );
});
