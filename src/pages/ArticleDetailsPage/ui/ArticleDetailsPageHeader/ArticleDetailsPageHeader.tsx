import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button, { ButtonSize, ButtonTheme, IconPosition } from '@/shared/ui/Button/Button';
import ArrowLeftLongLine from '@/shared/assets/icons/ArrowLeftLongLine.svg';
import EditLine from '@/shared/assets/icons/EditLine.svg';
import { PageHeader } from '@/shared/ui/Page';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article/article';
import { getArticleDetailsData } from '@/entities/Article';
import { RoutePath } from '@/shared/consts/router';

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
            navigate(RoutePath.articles);
        },
        [navigate],
    );

    const onEditArticle = useCallback(
        () => {
            if (!article) return;
            navigate(`${RoutePath.articles}/edit/${article.id}`);
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
