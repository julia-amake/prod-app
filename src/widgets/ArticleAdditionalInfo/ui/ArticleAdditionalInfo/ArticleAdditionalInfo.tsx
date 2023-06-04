import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import EditLine from '@/shared/assets/icons/EditLine.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import s from './ArticleAdditionalInfo.module.scss';

interface ArticleAdditionalInfoProps {
    views: number;
    canEdit: boolean;
    onEditArticle: () => void;
    className?: string;
}

export const ArticleAdditionalInfo = memo(
    (props: ArticleAdditionalInfoProps) => {
        const { views, canEdit, onEditArticle, className = '' } = props;
        const { t } = useTranslation('article');

        return (
            <VStack gap="32" className={cn(s.outer, {}, [className])}>
                {canEdit && (
                    <Button
                        label={t('Редактировать')}
                        variant="outlined"
                        size="m"
                        icon={{ element: EditLine }}
                        onClick={onEditArticle}
                    />
                )}
                <HStack align="center" justify="between">
                    <Text
                        margin="none"
                        content={t('Просмотров', { count: views })}
                    />
                </HStack>
            </VStack>
        );
    },
);
