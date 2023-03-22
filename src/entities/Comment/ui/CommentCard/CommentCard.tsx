import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Text, TextMargin, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';
import s from './CommentCard.module.scss';

interface CommentCardProps {
    comment: Comment;
    className?: string;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        comment,
        isLoading,
        className = '',
    } = props;

    if (isLoading) {
        return (
            <div className={cn(s.outer, {}, [className, s.skeleton])}>
                <div className={s.header}>
                    <Skeleton
                        className={s.avatar}
                        width={40}
                        height={40}
                        borderRadius="50%"
                        inline
                    />
                    <Skeleton
                        width={180}
                        height={18}
                        inline
                    />
                </div>
                <Skeleton
                    width={400}
                    height={14}
                    marginBottom={16}
                />
                <Skeleton
                    width={330}
                    height={14}
                />
            </div>
        );
    }

    return (
        <div className={cn(s.outer, {}, [className])}>
            <div className={s.header}>
                <Avatar
                    size={40}
                    src={comment.user.avatar}
                    className={s.avatar}
                />
                <Text
                    content={comment.user.username}
                    size={TextSize.S}
                    isBold
                    margin={TextMargin.NONE}
                />
            </div>
            <Text
                content={comment.text}
                margin={TextMargin.NONE}
                size={TextSize.S}
            />
        </div>
    );
});
