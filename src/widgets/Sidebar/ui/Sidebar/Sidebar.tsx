import React, {useState} from 'react';
import {cn} from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import s from './Sidebar.module.scss';
import ArrowLeftLong from 'shared/assets/icons/ArrowLeftLong.svg';

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const {
        className,
    } = props;

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={cn(s.sidebar, {[s.collapsed]: collapsed}, [className])}>
            <Button
                className={s.collapseBtn}
                onClick={onToggle}
                title={'Развернуть/свернуть'}
            >
                Toggle
            </Button>
        </div>
    );
};

export default Sidebar;
