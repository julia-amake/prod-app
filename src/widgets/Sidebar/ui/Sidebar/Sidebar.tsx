import React, { useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import SidebarToggle from 'widgets/Sidebar/ui/Sidebar/SidebarToggle/SidebarToggle';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const {
        className,
    } = props;

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
            <div className={s.actions}>
                <ThemeSwitcher className={s.themeSwitcher} />
                <LangSwitcher isShort={collapsed} />
            </div>
            <SidebarToggle collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
    );
};

export default Sidebar;
