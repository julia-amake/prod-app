import React, { memo } from 'react';
import { getRouteProfile } from '@/shared/consts/router';
import { cn } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text, TextMargin, TextSize } from '@/shared/ui/deprecated/Text';
import { Comment } from '../../model/types/comment';
import s from './CommentCard.module.scss';

interface CommentCardProps {
    comment?: Comment;
    className?: string;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { comment, isLoading, className = '' } = props;

    if (isLoading) {
        return (
            <div data-testid="CommentCard.Loading" className={cn(s.outer, {}, [className, s.skeleton])}>
                <div className={s.header}>
                    <Skeleton className={s.avatar} width={40} height={40} borderRadius="50%" inline />
                    <Skeleton width={180} height={18} inline />
                </div>
                <Skeleton width={400} height={14} marginBottom={16} />
                <Skeleton width={330} height={14} />
            </div>
        );
    }

    if (!comment) return null;

    return (
        <div data-testid="CommentCard.Content" className={cn(s.outer, {}, [className])}>
            <AppLink to={getRouteProfile(comment.user.id)} className={s.header}>
                <Avatar size={40} src={comment.user.avatar} className={s.avatar} />
                <Text content={comment.user.username} size={TextSize.S} isBold margin={TextMargin.NONE} />
            </AppLink>
            <Text content={comment.text} margin={TextMargin.NONE} size={TextSize.S} />
        </div>
    );
});
