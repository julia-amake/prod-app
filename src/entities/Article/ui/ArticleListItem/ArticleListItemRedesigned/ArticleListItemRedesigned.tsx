import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import EyeLine from '@/shared/assets/icons/EyeLine.svg';
import { getRouteArticleDetails } from '@/shared/consts/router';
import { cn } from '@/shared/lib/classNames/classNames';
import { truncateString } from '@/shared/lib/utils/truncateString';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Heading } from '@/shared/ui/redesigned/Heading';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleListItemProps } from '../../../model/types/articleListItem';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import s from './ArticleListItemRedesigned.module.scss';

const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { article, view = ArticleView.GRID, className = '' } = props;

    const user = useMemo(
        () => (
            <HStack className={s.user} align="center" gap="8">
                <Avatar
                    size={view === ArticleView.LIST ? 32 : 28}
                    src={article.user.avatar}
                    userName={article.user.username}
                />
            </HStack>
        ),
        [article.user.avatar, article.user.username, view],
    );

    const views = useMemo(
        () => (
            <div className={s.views}>
                <Icon className={s.views_icon} svg={EyeLine} />
                <Text
                    margin="none"
                    content={article.views.toString()}
                    size={view === ArticleView.GRID ? 's' : 'm'}
                />
            </div>
        ),
        [article.views, view],
    );

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
                paddings="none"
                className={cn(s.outer, {}, [className, s.outer_grid, s.card])}
                data-testid="ArticleListItem"
            >
                <div className={s.pic_outer}>{image}</div>
                <VStack className={s.info}>
                    <Heading
                        className={s.title}
                        as="h3"
                        content={truncateString(article.title, 60)}
                        size="xs"
                        isBold
                    />
                    <div className={s.additional}>
                        <HStack justify="between" fullWidth>
                            <Text
                                content={article.createdAt}
                                margin="none"
                                size="s"
                            />
                            {views}
                        </HStack>
                        {user}
                    </div>
                </VStack>
            </Card>
        );
    }

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (a) => a.type === ArticleBlockType.TEXT,
        );

        return (
            <Card
                className={cn(s.outer, {}, [className, s.outer_list])}
                data-testid="ArticleListItem"
            >
                <HStack className={s.header} align="center" gap="8">
                    {user}
                    <Text
                        className={s.date}
                        content={article.createdAt}
                        margin="none"
                        size="s"
                    />
                </HStack>
                <Heading as="h3" content={article.title} isBold />
                <Text content={article.subtitle} size="l" />
                <div className={s.pic_outer}>{image}</div>
                {textBlock && (
                    <ArticleTextBlockComponent
                        block={textBlock as ArticleTextBlock}
                        className={s.content}
                    />
                )}
                <HStack justify="between" align="center">
                    <Button
                        as={Link}
                        size="m"
                        variant="outlined"
                        shape="square"
                        label="Читать далее..."
                        to={getRouteArticleDetails(article.id)}
                    />
                    {views}
                </HStack>
            </Card>
        );
    }

    return null;
});

export default ArticleListItemRedesigned;
