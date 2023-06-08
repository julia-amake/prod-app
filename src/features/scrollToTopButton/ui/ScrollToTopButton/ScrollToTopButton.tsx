import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowTopCircle from '@/shared/assets/icons/redesigned/ArrowTopCircle.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import s from './ScrollToTopButton.module.scss';

interface scrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: scrollToTopButtonProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();

    const onClickHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button
            className={cn(s.outer, {}, [className])}
            title={t('Наверх')}
            icon={{ element: ArrowTopCircle, className: s.icon }}
            variant="clear"
            onClick={onClickHandler}
        />
    );
});
