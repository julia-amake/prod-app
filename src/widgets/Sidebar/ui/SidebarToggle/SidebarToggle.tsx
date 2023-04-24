import React, {
    Dispatch, memo, SetStateAction,
} from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonShape, ButtonSize } from '@/shared/ui/Button/Button';
import ArrowRight from '@/shared/assets/icons/ArrowRightSimpleLine.svg';
import ArrowLeft from '@/shared/assets/icons/ArrowLeftSimpleLine.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import s from './SidebarToggle.module.scss';

interface SidebarToggleProps {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const SidebarToggle = memo((props: SidebarToggleProps) => {
    const {
        collapsed,
        setCollapsed,
    } = props;

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <Button
            className={cn(s.sidebarToggle, { [s.collapsed]: collapsed })}
            title={t(collapsed ? 'Развернуть' : 'Свернуть')}
            shape={ButtonShape.SQUARE}
            size={ButtonSize.L}
            icon={{
                element: collapsed ? ArrowRight : ArrowLeft,
                className: s.icon,
            }}
            onClick={onToggle}
            data-testid="sidebar-toggle"
        />
    );
});

export default SidebarToggle;
