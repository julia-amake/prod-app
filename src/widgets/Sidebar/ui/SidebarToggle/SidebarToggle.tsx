import React, { Dispatch, memo, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowLeft from '@/shared/assets/icons/ArrowLeftSimpleLine.svg';
import ArrowRight from '@/shared/assets/icons/ArrowRightSimpleLine.svg';
import ArrowLeftRedesigned from '@/shared/assets/icons/redesigned/ArrowLeft.svg';
import ArrowRightRedesigned from '@/shared/assets/icons/redesigned/ArrowRight.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonShape,
    ButtonSize,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import s from './SidebarToggle.module.scss';

interface SidebarToggleProps {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const SidebarToggle = memo((props: SidebarToggleProps) => {
    const { collapsed, setCollapsed } = props;

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    className={cn(s.sidebarToggleRedesigned, {
                        [s.collapsedRedesigned]: collapsed,
                    })}
                    variant="clear"
                    size="l"
                    icon={{
                        element: collapsed
                            ? ArrowRightRedesigned
                            : ArrowLeftRedesigned,
                        className: s.iconRedesigned,
                    }}
                    onClick={onToggle}
                    data-testid="sidebar-toggle"
                />
            }
            off={
                <ButtonDeprecated
                    className={cn(s.sidebarToggle, {
                        [s.collapsed]: collapsed,
                    })}
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
            }
        />
    );
});

export default SidebarToggle;
