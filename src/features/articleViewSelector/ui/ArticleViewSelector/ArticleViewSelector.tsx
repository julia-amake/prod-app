import React, { memo } from 'react';
import GridList from '@/shared/assets/icons/GridLine.svg';
import ListLine from '@/shared/assets/icons/ListLine.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { ArticleView } from '../../../../entities/Article/model/consts/consts';
import s from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
    className?: string;
}

const viewTypes = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => [
        {
            view: ArticleView.LIST,
            icon: ListLine,
        },
        {
            view: ArticleView.GRID,
            icon: GridList,
        },
    ],
    off: () => [
        {
            view: ArticleView.GRID,
            icon: GridList,
        },
        {
            view: ArticleView.LIST,
            icon: ListLine,
        },
    ],
});

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { view, onViewClick, className = '' } = props;

    const onViewClickHandler = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div className={cn(s.outerRedesigned, {}, [className])}>
                    {viewTypes.map((viewType) => (
                        <Button
                            key={viewType.view}
                            variant="clear"
                            icon={{
                                element: viewType.icon,
                                className: cn(s.iconRedesigned, {
                                    [s.iconRedesigned_active]:
                                        viewType.view === view,
                                }),
                            }}
                            onClick={onViewClickHandler(viewType.view)}
                            className={cn(s.btnRedesigned, {
                                [s.btnRedesigned_active]:
                                    viewType.view === view,
                            })}
                        />
                    ))}
                </div>
            }
            off={
                <div className={cn(s.outer, {}, [className])}>
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            theme={ButtonTheme.CLEAR}
                            icon={{
                                element: viewType.icon,
                                className: cn(s.icon, {
                                    [s.icon_active]: viewType.view === view,
                                }),
                            }}
                            onClick={onViewClickHandler(viewType.view)}
                            className={s.btn}
                        />
                    ))}
                </div>
            }
        />
    );
});
