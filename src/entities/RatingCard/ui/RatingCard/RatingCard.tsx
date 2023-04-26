import React, {
    memo, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { VStack } from '@/shared/ui/Stack';
import Heading, { HeadingSize } from '@/shared/ui/Heading/Heading';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import Modal from '@/shared/ui/Modal/Modal';
import Input from '@/shared/ui/Input/Input';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import useWindowDimensions from '@/shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import { MOBILE_LARGE } from '@/shared/consts/devices';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Text } from '@/shared/ui/Text/Text';
import s from './RatingCard.module.scss';

interface RatingProps {
    title?: string;
    hasFeedback?: boolean;
    feedbackTitle?: string;
    onCancel?: ((starsCount: number) => void);
    onAccept?: ((starsCount: number, feedback?: string) => void);
    className?: string;
}

export const RatingCard = memo((props: RatingProps) => {
    const { t } = useTranslation();

    const {
        title = t('Вам понравилось?'),
        hasFeedback = false,
        feedbackTitle = t('Оставьте отзыв'),
        onCancel,
        onAccept,
        className = '',
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');
    const { width } = useWindowDimensions();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(width <= MOBILE_LARGE);
    }, [width]);

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

    const cancelHandler = useCallback(
        () => {
            onCancel?.(starsCount);
            setIsModalOpen(false);
        },
        [onCancel, starsCount],
    );

    const acceptHandler = useCallback(
        () => {
            onAccept?.(starsCount, feedback);
            setIsModalOpen(false);
        },
        [feedback, onAccept, starsCount],
    );

    const Feedback = useMemo(() => (isMobile ? Drawer : Modal), [isMobile]);

    return (
        <Card className={cn(s.outer, {}, [className])}>
            <VStack>
                <Heading content={title} />
                <StarRating size={24} onSelect={onSelectStars} />
            </VStack>

            <Feedback
                isOpen={isModalOpen}
                onClose={cancelHandler}
                lazy
            >
                <VStack fullWidth gap="32">
                    <Heading content={feedbackTitle} size={HeadingSize.S} className={s.modalTitle} />
                    <Text
                        content={t('Ваше мнение очень важно, '
                                + 'именно ваша обратная связь помогает становиться лучше!')}
                        className={s.modalSubTitle}
                    />
                    <Input
                        type="textarea"
                        placeholder={t('Ваш отзыв')}
                        value={feedback}
                        onChange={setFeedback}
                        className={s.textarea}
                    />
                    <VStack
                        gap="8"
                    >
                        <Button
                            theme={ButtonTheme.OUTLINED}
                            label={t('Закрыть')}
                            onClick={cancelHandler}
                        />
                        <Button
                            label={t('Отправить')}
                            onClick={acceptHandler}
                        />
                    </VStack>
                </VStack>
            </Feedback>

        </Card>
    );
});
