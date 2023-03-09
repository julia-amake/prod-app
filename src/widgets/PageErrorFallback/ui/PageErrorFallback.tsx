import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import s from './PageErrorFallback.module.scss';

interface PageErrorFallbackProps {
    className?: string;
}

const PageErrorFallback: React.FC<PageErrorFallbackProps> = (props) => {
    const { className = '' } = props;
    const { t } = useTranslation();

    const onReloadPage = () => window.location.reload();

    return (
        <div className={cn(s.outer, {}, [className])}>
            <h1 className={s.title}>{t('Что-то пошло не так')}</h1>
            <Button
                label={t('Обновить страницу')}
                onClick={onReloadPage}
            />
        </div>
    );
};

export default PageErrorFallback;
