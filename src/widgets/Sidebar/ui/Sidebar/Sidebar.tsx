import React, { useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import ArrowLeftLong from 'shared/assets/icons/ArrowLeftLong.svg';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={cn(
                s.sidebar,
                { [s.collapsed]: collapsed },
                [className],
            )}
            data-testid="sidebar"
        >
            <Button
                theme={ThemeButton.CLEAR}
                className={s.collapseBtn}
                onClick={onToggle}
                title={t(collapsed ? 'Развернуть' : 'Свернуть')}
                data-testid="sidebar-toggle"
            >
                {t(collapsed ? 'Развернуть' : 'Свернуть')}
            </Button>
            <LangSwitcher />
            <ArrowLeftLong />
        </div>
    );
};

export default Sidebar;
