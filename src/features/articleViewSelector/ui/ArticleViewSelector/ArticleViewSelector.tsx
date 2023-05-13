import React, { memo } from 'react';
import GridList from '@/shared/assets/icons/GridLine.svg';
import ListLine from '@/shared/assets/icons/ListLine.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ArticleView } from '../../../../entities/Article/model/consts/consts';
import s from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
    className?: string;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: GridList,
    },
    {
        view: ArticleView.LIST,
        icon: ListLine,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { view, onViewClick, className = '' } = props;

    const onViewClickHandler = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={cn(s.outer, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
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
    );
});
