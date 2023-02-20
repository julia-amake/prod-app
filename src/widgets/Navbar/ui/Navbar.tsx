import React, { useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import Button, { ButtonSize } from 'shared/ui/Button/Button';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn(s.navbar, {}, [className])}>
            <Button
                size={ButtonSize.M}
                onClick={() => setIsOpen(true)}
                type="button"
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <h1>{t('Модалка')}</h1>
                <p>{t('Ура!')}</p>
            </Modal>
        </div>
    );
};

export default Navbar;
