import React, { memo } from 'react';
import { getRouteProfile } from '@/shared/consts/router';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import {
    Text as TextDeprecated,
    TextMargin,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Comment } from '../../model/types/comment';
import s from './CommentCard.module.scss';
// import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface CommentCardProps {
    comment?: Comment;
    className?: string;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { comment, isLoading, className = '' } = props;

    if (isLoading) {
        return (
            <div
                data-testid="CommentCard.Loading"
                className={cn(s.outer, {}, [className, s.skeleton])}
            >
                <div className={s.header}>
                    <SkeletonDeprecated
                        className={s.avatar}
                        width={40}
                        height={40}
                        borderRadius="50%"
                        inline
                    />
                    <SkeletonDeprecated width={180} height={18} inline />
                </div>
                <SkeletonDeprecated width={400} height={14} marginBottom={16} />
                <SkeletonDeprecated width={330} height={14} />
            </div>
        );
    }

    if (!comment) return null;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack
                    fullWidth
                    gap="8"
                    data-testid="CommentCard.Content"
                    className={className}
                >
                    <AppLink
                        to={getRouteProfile(comment.user.id)}
                        variant="clear"
                    >
                        <Avatar
                            size={32}
                            src={comment.user.avatar}
                            userName={comment.user.username}
                        />
                    </AppLink>
                    <Text content={comment.text} margin="none" />
                </VStack>
            }
            off={
                <div
                    data-testid="CommentCard.Content"
                    className={cn(s.outer, {}, [className])}
                >
                    <AppLinkDeprecated
                        to={getRouteProfile(comment.user.id)}
                        className={s.header}
                    >
                        <AvatarDeprecated
                            size={40}
                            src={comment.user.avatar}
                            className={s.avatar}
                        />
                        <TextDeprecated
                            content={comment.user.username}
                            size={TextSize.S}
                            isBold
                            margin={TextMargin.NONE}
                        />
                    </AppLinkDeprecated>
                    <TextDeprecated
                        content={comment.text}
                        margin={TextMargin.NONE}
                        size={TextSize.S}
                    />
                </div>
            }
        />
    );
});
