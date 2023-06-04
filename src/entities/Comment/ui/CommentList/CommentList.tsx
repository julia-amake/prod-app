import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import s from './CommentList.module.scss';

interface CommentListProps {
    isLoading?: boolean;
    comments: Comment[];
    className?: string;
}

export const CommentList = memo((props: CommentListProps) => {
    const { comments, isLoading, className = '' } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={cn(s.outer, {}, [className])}>
                <CommentCard className={cn(s.comment)} isLoading={isLoading} />
                <CommentCard className={cn(s.comment)} isLoading={isLoading} />
                <CommentCard
                    className={cn(s.comment, {}, [s.comment_last])}
                    isLoading={isLoading}
                />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack className={className} fullWidth gap="24">
                    {comments.length ? (
                        comments.map((comment) => (
                            <CommentCard
                                isLoading={isLoading}
                                comment={comment}
                                key={comment.id}
                            />
                        ))
                    ) : (
                        <Text content={t('Пока нет комментариев')} />
                    )}
                </VStack>
            }
            off={
                <div className={cn(s.outer, {}, [className])}>
                    {comments.length ? (
                        comments.map((comment, idx) => (
                            <CommentCard
                                className={cn(s.comment, {
                                    [s.comment_last]:
                                        idx === comments.length - 1,
                                })}
                                isLoading={isLoading}
                                comment={comment}
                                key={comment.id}
                            />
                        ))
                    ) : (
                        <TextDeprecated content={t('Пока нет комментариев')} />
                    )}
                </div>
            }
        />
    );
});
