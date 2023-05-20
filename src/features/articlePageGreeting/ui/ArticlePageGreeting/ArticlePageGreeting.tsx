import { memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MOBILE_LARGE } from '@/shared/consts/devices';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import useWindowDimensions from '@/shared/lib/hooks/useWindowDimensions/useWindowDimensions';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Heading } from '@/shared/ui/deprecated/Heading';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { wasArticlesPageOpen } = useJsonSettings();
    const dispatch = useAppDispatch();
    const { width } = useWindowDimensions();
    const isMobile = useMemo(() => width <= MOBILE_LARGE, [width]);

    useEffect(() => {
        if (!wasArticlesPageOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ wasArticlesPageOpen: true }));
        }
    }, [dispatch, isOpen, wasArticlesPageOpen]);

    const onClose = () => {
        setIsOpen(false);
    };

    const Element = isMobile ? Drawer : Modal;

    return (
        <Element isOpen={isOpen} onClose={onClose}>
            <Heading content={t('Добро пожаловать на страницу статей')} />
            <Text
                content={t(
                    'Здесь вы можете найти и прочитать статьи на разные темы',
                )}
            />
        </Element>
    );
});
