import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { PageSection as PageSectionDeprecated } from '@/shared/ui/deprecated/Page';
import { PageSection } from '@/shared/ui/redesigned/PageSection';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsBrArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import s from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
    id: string;
    className?: string;
    isLoading: boolean;
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { id, isLoading, className = '' } = props;

        const { t } = useTranslation();
        const dispatch = useAppDispatch();

        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
        const error = useSelector(getArticleCommentsError);

        useInitialEffect(() => {
            dispatch(fetchCommentsBrArticleId(id));
        }, [id]);

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        if (error) return null;

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        as={PageSection}
                        className={className}
                        customProps={{ title: t('Комментарии') }}
                    >
                        <AddCommentForm
                            onSendComment={onSendComment}
                            isLoading={commentsIsLoading || isLoading}
                        />
                        <CommentList
                            comments={comments}
                            isLoading={commentsIsLoading || isLoading}
                        />
                    </VStack>
                }
                off={
                    <PageSectionDeprecated
                        className={className}
                        title={t('Комментарии')}
                    >
                        <AddCommentForm
                            onSendComment={onSendComment}
                            className={s.form}
                            isLoading={commentsIsLoading || isLoading}
                        />
                        <CommentList
                            comments={comments}
                            isLoading={commentsIsLoading || isLoading}
                        />
                    </PageSectionDeprecated>
                }
            />
        );
    },
);
