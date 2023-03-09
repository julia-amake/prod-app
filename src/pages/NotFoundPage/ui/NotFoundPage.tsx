import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import s from './NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={cn('main-content', {}, [s.page])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage;
