import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import Heading, { HeadingSize } from 'shared/ui/Heading/Heading';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import s from './CommentList.module.scss';

interface CommentListProps {
    isLoading?: boolean;
    comments: Comment[];
    className?: string;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        comments,
        isLoading,
        className = '',
    } = props;

    const { t } = useTranslation();

    return (
        <div className={cn(s.outer, {}, [className])}>
            <Heading
                content={t('Комментарии')}
                className={s.title}
                size={HeadingSize.S}
            />
            {comments.length
                ? comments.map((comment, idx) => (
                    <CommentCard
                        className={cn(
                            s.comment,
                            { [s.comment_last]: idx === comments.length - 1 },
                        )}
                        isLoading={isLoading}
                        comment={comment}
                        key={comment.id}
                    />
                ))
                : <Text content={t('Пока нет комментариев')} />}
        </div>
    );
});
