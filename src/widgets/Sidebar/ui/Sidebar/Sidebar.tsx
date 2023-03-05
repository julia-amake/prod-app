import React, { memo, useState } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import SidebarToggle from '../SidebarToggle/SidebarToggle';
import { SidebarItemsList } from '../../model/items';
import SidebarItem from '../SidebarItem/SidebarItem';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
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
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                ))}
            </div>
            <div className={s.actions}>
                <ThemeSwitcher className={s.themeSwitcher} />
                <LangSwitcher isShort={collapsed} />
            </div>
            <SidebarToggle collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
    );
});

export default Sidebar;
