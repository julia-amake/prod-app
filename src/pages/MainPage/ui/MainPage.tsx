import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div className="main-content">
            {t('Главная страница')}
            <Input
                value={value}
                label={t('Лэйбл')}
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;
