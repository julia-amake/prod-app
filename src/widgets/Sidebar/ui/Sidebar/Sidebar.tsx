import React, { useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import SidebarToggle from 'widgets/Sidebar/ui/Sidebar/SidebarToggle/SidebarToggle';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import HomeLine from 'shared/assets/icons/HomeLine.svg';
import InfoLine from 'shared/assets/icons/InfoLine.svg';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            className={cn(
                s.sidebar,
                { [s.collapsed]: collapsed },
                [className],
            )}
            data-testid="sidebar"
        >
            <div className={s.menu}>
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={s.link}
                >
                    <HomeLine className={`${s.linkIcon} ${s.linkIconHome}`} />
                    <span className={s.linkTitle}>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLinkTheme.SECONDARY}
                    className={s.link}
                >
                    <InfoLine className={s.linkIcon} />
                    <span className={s.linkTitle}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={s.actions}>
                <ThemeSwitcher className={s.themeSwitcher} />
                <LangSwitcher isShort={collapsed} />
            </div>
            <SidebarToggle collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
    );
};

export default Sidebar;
