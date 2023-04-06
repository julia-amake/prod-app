import React, { FC, memo, useCallback } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonSize, ButtonTheme, IconPosition } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import ArrowLeftLongLine from 'shared/assets/icons/ArrowLeftLongLine.svg';
import EditLine from 'shared/assets/icons/EditLine.svg';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getCanEditArticle } from '../../model/selectors/article/article';
import s from './ArticleDetailsPageHeader.module.scss';

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
        <div className={cn(s.outer, {}, [className])}>
            <Button
                label={t('К списку статей')}
                theme={ButtonTheme.CLEAR}
                icon={{ element: ArrowLeftLongLine, position: IconPosition.LEFT }}
                size={ButtonSize.M}
                onClick={onBackToList}
                className={s.backBtn}
                hoverUnderlined
            />
            {canEdit && (
                <Button
                    label={t('Редактировать')}
                    theme={ButtonTheme.OUTLINED}
                    size={ButtonSize.M}
                    icon={{ element: EditLine }}
                    className={s.btn}
                    onClick={onEditArticle}
                />
            )}
        </div>
    );
});

// 194
