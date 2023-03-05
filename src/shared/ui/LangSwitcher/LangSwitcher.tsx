import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    isShort: boolean;
    className?: string;
}

const LangSwitcher = memo((props: LangSwitcherProps) => {
    const {
        isShort,
        className,
    } = props;

    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={cn(s.langSwitcher, {}, [className])}
            onClick={toggleLang}
        >
            {t(isShort ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});

export default LangSwitcher;
