import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArrowLeftLongLine from '@/shared/assets/icons/ArrowLeftLongLine.svg';
import EditLine from '@/shared/assets/icons/EditLine.svg';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/consts/router';
import {
    Button, ButtonSize, ButtonTheme, IconPosition,
} from '@/shared/ui/Button';
import { PageHeader } from '@/shared/ui/Page';
import { HStack } from '@/shared/ui/Stack';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader:FC<ArticleDetailsPageHeaderProps> = memo((props: ArticleDetailsPageHeaderProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(
        () => {
            navigate(getRouteArticles());
        },
        [navigate],
    );

    const onEditArticle = useCallback(
        () => {
            if (!article) return;
            navigate(getRouteArticleEdit(article.id));
        },
        [article, navigate],
    );

    return (
        <PageHeader className={className}>
            <HStack
                align="center"
                justify="between"
            >
                <Button
                    label={t('К списку статей')}
                    theme={ButtonTheme.CLEAR}
                    icon={{ element: ArrowLeftLongLine, position: IconPosition.LEFT }}
                    size={ButtonSize.M}
                    onClick={onBackToList}
                    hoverUnderlined
                />
                {canEdit && (
                    <Button
                        label={t('Редактировать')}
                        theme={ButtonTheme.OUTLINED}
                        size={ButtonSize.M}
                        icon={{ element: EditLine }}
                        onClick={onEditArticle}
                    />
                )}
            </HStack>
        </PageHeader>
    );
});
