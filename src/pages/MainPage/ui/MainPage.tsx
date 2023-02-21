import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div className="main-content">
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;
