import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import Informer from 'shared/ui/Informer/Informer';
import { CommentList } from 'entities/Comment';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetails';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import Heading, { HeadingSize } from 'shared/ui/Heading/Heading';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { fetchCommentsBrArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../model/selectors/comments';
import s from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducersList:ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation('article');
    const { id } = useParams();
    const dispatch = useAppDispatch();

    useDynamicModuleLoader(reducersList, true);

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    const navigate = useNavigate();

    useInitialEffect(() => {
        dispatch(fetchCommentsBrArticleId(id));
    });

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    const onBackToList = useCallback(
        () => {
            navigate(RoutePath.articles);
        },
        [navigate],
    );

    const content = useMemo(() => {
        if (!id) return <Informer title={t('Статья не найдена')} />;
        return (
            <div className="inner-content">
                <Button
                    label={t('К списку статей')}
                    theme={ButtonTheme.OUTLINED}
                    size={ButtonSize.S}
                    onClick={onBackToList}
                    className={s.backBtn}
                />
                <ArticleDetails id={id} isLoading={isLoading} />
                {!error && (
                    <div className={s.comments}>
                        <Heading
                            content={t('Комментарии')}
                            className={s.comments_title}
                            size={HeadingSize.S}
                        />
                        <AddCommentForm
                            onSendComment={onSendComment}
                            className={s.comments_form}
                            isLoading={commentsIsLoading || isLoading}
                        />
                        <CommentList
                            comments={comments}
                            isLoading={commentsIsLoading || isLoading}
                        />
                    </div>
                )}
            </div>
        );
    }, [id, t, onBackToList, isLoading, error, onSendComment, commentsIsLoading, comments]);

    return (
        <Page className={className}>
            {content}
        </Page>
    );
});

export default ArticleDetailsPage;
