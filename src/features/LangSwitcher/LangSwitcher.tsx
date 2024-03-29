import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    isShort: boolean;
    className?: string;
}

const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { isShort, className = '' } = props;

    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    label={t('Короткий язык на английском')}
                    variant="clear"
                    className={cn(s.langSwitcherRedesigned, {}, [className])}
                    onClick={toggleLang}
                />
            }
            off={
                <ButtonDeprecated
                    label={t(isShort ? 'Короткий язык' : 'Язык')}
                    theme={ButtonTheme.CLEAR}
                    className={cn(s.langSwitcher, {}, [className])}
                    onClick={toggleLang}
                />
            }
        />
    );
});

export default LangSwitcher;
