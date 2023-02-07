import React, {useState} from 'react';
import {cn} from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import s from './Sidebar.module.scss';
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher';
import {useTranslation} from 'react-i18next';

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const {
        className,
    } = props;

    const {t} = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={cn(s.sidebar, {[s.collapsed]: collapsed}, [className])}>
            <Button
                className={s.collapseBtn}
                onClick={onToggle}
                title={t(collapsed ? 'Развернуть' : 'Свернуть')}
            >
                {t(collapsed ? 'Развернуть' : 'Свернуть')}
            </Button>
            <LangSwitcher/>
        </div>
    );
};

export default Sidebar;
