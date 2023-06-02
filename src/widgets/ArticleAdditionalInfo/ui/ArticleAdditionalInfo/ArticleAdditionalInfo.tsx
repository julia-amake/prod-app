import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import EditLine from '@/shared/assets/icons/EditLine.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { User } from '@/entities/User';
import s from './ArticleAdditionalInfo.module.scss';

interface ArticleAdditionalInfoProps {
    author: User;
    createdAt: string;
    views: number;
    canEdit: boolean;
    onEditArticle: () => void;
    className?: string;
}

export const ArticleAdditionalInfo = memo(
    (props: ArticleAdditionalInfoProps) => {
        const {
            author,
            createdAt,
            views,
            canEdit,
            onEditArticle,
            className = '',
        } = props;
        const { t } = useTranslation('article');

        return (
            <VStack gap="32" className={cn(s.outer, {}, [className])}>
                <HStack align="center" gap="8">
                    <Avatar
                        src={author.avatar}
                        userName={author.username}
                        size={32}
                    />
                    <Text content={createdAt} size="s" margin="none" />
                </HStack>
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
