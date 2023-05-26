import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleFeatures } from '@/shared/lib/features';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { ArticleType } from '../../../../entities/Article/model/consts/consts';

interface ArticleTypeTabsProps {
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
    isLoading?: boolean;
    className?: string;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { value, onChangeType, isLoading = false, className = '' } = props;

    const { t } = useTranslation();

    const tabsList: TabItem[] = useMemo(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleType.IT,
                content: t('Айти'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
            {
                value: ArticleType.ECONOMIC,
                content: t('Экономика'),
            },
            {
                value: ArticleType.PEOPLE,
                content: t('Люди'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    tabs={tabsList}
                    value={value}
                    direction="column"
                    onTabClick={onTabClick}
                    disabled={isLoading}
                    className={className}
                />
            }
            off={
                <TabsDeprecated
                    tabs={tabsList}
                    value={value}
                    onTabClick={onTabClick}
                    disabled={isLoading}
                    className={className}
                />
            }
        />
    );
});
