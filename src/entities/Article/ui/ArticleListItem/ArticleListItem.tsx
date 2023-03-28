import React, { memo, useCallback, useMemo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import EyeLine from 'shared/assets/icons/EyeLine.svg';
import { Text, TextMargin, TextSize } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import Avatar from 'shared/ui/Avatar/Avatar';
import Button, { ButtonSize } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import s from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    article: Article;
    isExtra?: boolean;
    view?: ArticleView;
    className?: string;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        article,
        isExtra = false,
        view = ArticleView.GRID,
        className = '',
    } = props;

    const navigate = useNavigate();

    const views = useMemo(() => (
        <div className={s.views}>
            <EyeLine className={s.views_icon} />
            <Text
                size={TextSize.XS}
                margin={TextMargin.NONE}
                content={article.views.toString()}
            />
        </div>
    ), [article.views]);

    const categories = useMemo(() => {
        const list = view === ArticleView.GRID
            ? article.type.slice(0, 2)
            : article.type;

        return (
            <ul className={s.categories}>
                {list.map((type, idx, arr) => (
                    <Text
                        as="li"
                        key={type}
                        className={cn(
                            s.category,
                            {
                                [s.category_last]: article.type.length === arr.length
                                    && idx === arr.length - 1,
                            },
                        )}
                        content={type}
                        margin={TextMargin.NONE}
                        size={TextSize.XS}
                    />
                ))}
                {view === ArticleView.GRID && article.type.length > 2 ? (
                    <Text
                        as="li"
                        className={cn(s.category, {}, [s.category_last])}
                        content={` и еще ${article.type.length - 2}`}
                        margin={TextMargin.NONE}
                        size={TextSize.XS}
                    />
                ) : null}
            </ul>
        );
    }, [article.type, view]);

    const onOpenArticle = useCallback(
        () => {
            navigate(RoutePath.article_details + article.id);
        },
        [article.id, navigate],
    );

    if (view === ArticleView.GRID) {
        return (
            <Card
                className={cn(s.outer, { [s.outer_grid_extra]: isExtra }, [className, s.outer_grid, s.card])}
                onClick={onOpenArticle}
            >
                <div className={s.pic_outer}>
                    <img
                        src={article.image}
                        alt={article.title}
                        className={s.pic}
                    />
                    <Text
                        className={s.date}
                        content={article.createdAt}
                        margin={TextMargin.NONE}
                        size={TextSize.XS}
                        isBold
                    />
                </div>
                <div className={s.info}>
                    <div className={s.additional}>
                        {categories}
                        {views}
                    </div>
                    <Text
                        as="h3"
                        content={article.title}
                        className={s.title}
                        margin={TextMargin.NONE}
                    />
                    {isExtra && article.subtitle && (
                        <Text
                            content={article.subtitle}
                            className={s.subtitle}
                            margin={TextMargin.NONE}
                            size={TextSize.XS}
                        />
                    )}
                </div>
            </Card>
        );
    }

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find((a) => a.type === ArticleBlockType.TEXT);

        return (
            <Card
                className={cn(s.outer, {}, [className, s.outer_list, s.card])}
                onClick={onOpenArticle}
            >
                <div className={s.header}>
                    <div className={s.additional}>
                        <div className={s.user}>
                            <Avatar
                                size={30}
                                src={article.user.avatar}
                                className={s.avatar}
                            />
                            <Text
                                content={article.user.username}
                                margin={TextMargin.NONE}
                                size={TextSize.XS}
                                isBold
                            />
                        </div>
                        <Text
                            className={s.date}
                            content={article.createdAt}
                            margin={TextMargin.NONE}
                            size={TextSize.XS}
                        />
                    </div>
                    <Text
                        as="h3"
                        content={article.title}
                        className={s.title}
                        margin={TextMargin.NONE}
                    />
                    {categories}
                </div>
                <div className={s.pic_outer}>
                    <img
                        src={article.image}
                        alt={article.title}
                        className={s.pic}
                    />
                </div>
                <div className={s.footer}>
                    {textBlock && (
                        <div className={s.content}>

                            <ArticleTextBlockComponent
                                block={textBlock as ArticleTextBlock}
                                className={s.content}
                            />

                        </div>
                    )}
                    <div className={s.actions}>
                        <Button
                            size={ButtonSize.M}
                            label="Читать далее..."
                        />
                        {views}
                    </div>
                </div>
            </Card>
        );
    }

    return null;
});