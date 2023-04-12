import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import Informer from 'shared/ui/Informer/Informer';
import { CommentList } from 'entities/Comment';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Page } from 'widgets/Page/Page';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { PageSection } from 'shared/ui/PageSection/PageSection';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducers } from '../../model/slice';
import {
    fetchArticleRecommendations,
} from '../../model/services/FetchArticleRecommendations/FetchArticleRecommendations';
import { fetchCommentsBrArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducersList:ReducersList = {
    articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const { className = '' } = props;

    const { t } = useTranslation('article');
    const { id } = useParams();
    const dispatch = useAppDispatch();

    useDynamicModuleLoader(reducersList, true);

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsBrArticleId(id));
        dispatch(fetchArticleRecommendations());
    }, [id]);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    if (!id) {
        return (
            <Page className={className}>
                <Informer title={t('Статья не найдена')} />
            </Page>
        );
    }

    return (
        <Page
            header={<ArticleDetailsPageHeader />}
            className={className}
        >
            <ArticleDetails id={id} isLoading={isLoading} />
            {!commentsError && (
                <PageSection
                    title={t('Комментарии')}
                >
                    <AddCommentForm
                        onSendComment={onSendComment}
                        className={s.comments_form}
                        isLoading={commentsIsLoading || isLoading}
                    />
                    <CommentList
                        comments={comments}
                        isLoading={commentsIsLoading || isLoading}
                    />
                </PageSection>
            )}
            <ArticleRecommendationsList />
        </Page>
    );
});

export default ArticleDetailsPage;
