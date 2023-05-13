import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import EyeLine from '@/shared/assets/icons/EyeLine.svg';
import { getRouteArticleDetails } from '@/shared/consts/router';
import { cn } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonSize } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextMargin, TextSize } from '@/shared/ui/Text';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import s from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    article: Article;
    view?: ArticleView;
    className?: string;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { article, view = ArticleView.GRID, className = '' } = props;

    const views = useMemo(
        () => (
            <div className={s.views}>
                <EyeLine className={s.views_icon} />
                <Text
                    size={TextSize.XS}
                    margin={TextMargin.NONE}
                    content={article.views.toString()}
                />
            </div>
        ),
        [article.views],
    );

    const categories = useMemo(() => {
        const list =
            view === ArticleView.GRID ? article.type.slice(0, 2) : article.type;

        return (
            <ul className={s.categories}>
                {list.map((type, idx, arr) => (
                    <Text
                        as="li"
                        key={type}
                        className={cn(s.category, {
                            [s.category_last]:
                                article.type.length === arr.length &&
                                idx === arr.length - 1,
                        })}
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

    const image = useMemo(
        () => (
            <AppImage
                src={article.image}
                alt={article.title}
                className={s.pic}
                fallback={<Skeleton className={s.pic} />}
                errorFallback={
                    <img src="/img/NoImageH.svg" alt="" className={s.pic} />
                }
            />
        ),
        [article.image, article.title],
    );

    if (view === ArticleView.GRID) {
        return (
            <Card
                as={Link}
                to={getRouteArticleDetails(article.id)}
                className={cn(s.outer, {}, [className, s.outer_grid, s.card])}
                data-testid="ArticleListItem"
            >
                <div className={s.pic_outer}>
                    {image}
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
                </div>
            </Card>
        );
    }

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (a) => a.type === ArticleBlockType.TEXT,
        );

        return (
            <Card
                className={cn(s.outer, {}, [className, s.outer_list, s.card])}
                data-testid="ArticleListItem"
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
                <div className={s.pic_outer}>{image}</div>
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
                        <AppLink to={getRouteArticleDetails(article.id)}>
                            <Button
                                size={ButtonSize.M}
                                label="Читать далее..."
                            />
                        </AppLink>
                        {views}
                    </div>
                </div>
            </Card>
        );
    }

    return null;
});
