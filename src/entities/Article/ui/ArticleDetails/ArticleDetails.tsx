import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarLine from '@/shared/assets/icons/CalendarLine.svg';
import EyeLine from '@/shared/assets/icons/EyeLine.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    Heading as HeadingDeprecated,
    HeadingSize,
} from '@/shared/ui/deprecated/Heading';
import { ContentImage as ContentImageDeprecated } from '@/shared/ui/deprecated/Image';
import { Informer as InformerDeprecated } from '@/shared/ui/deprecated/Informer';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import {
    Text as TextDeprecated,
    TextMargin,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Heading } from '@/shared/ui/redesigned/Heading';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import {
    getArticleDetailsData,
    getArticleDetailsError,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import renderArticleBlock from './renderBlock';
import s from './ArticleDetails.module.scss';

const reducers: ReducersList = {
    articleDetails: ArticleDetailsReducer,
};

interface ArticleDetailsProps {
    id: string;
    isLoading?: boolean;
    className?: string;
}

const ContentRedesigned = () => {
    const data = useSelector(getArticleDetailsData);

    if (!data) return null;

    return (
        <>
            <HStack className={s.redesigned_author} align="center" gap="8">
                <Avatar
                    src={data.user.avatar}
                    userName={data.user.username}
                    size={32}
                />
                <Text content={data.createdAt} size="s" margin="none" />
            </HStack>
            <VStack className={s.redesigned_content} gap="16">
                <Heading
                    as="h1"
                    content={data?.title}
                    data-testid="ArticleDetails.Header"
                />
                <Heading size="s" content={data.subtitle} isBold={false} />
                <AppImage
                    src={data.image}
                    alt=""
                    className={s.redesigned_image}
                />
                <VStack gap="24">
                    {data.blocks.map((block) => renderArticleBlock(block))}
                </VStack>
            </VStack>
        </>
    );
};
const ContentDeprecated = () => {
    const data = useSelector(getArticleDetailsData);

    if (!data) return null;

    return (
        <>
            <HeadingDeprecated
                className={s.title}
                size={HeadingSize.L}
                content={data?.title}
                data-testid="ArticleDetails.Header"
            />
            <TextDeprecated content={data.subtitle} className={s.subtitle} />
            <div className={s.stats}>
                <div className={s.stat}>
                    <CalendarLine className={s.stat_icon} />
                    <TextDeprecated
                        size={TextSize.XS}
                        margin={TextMargin.NONE}
                        content={data.createdAt}
                    />
                </div>
                <div className={cn(s.stat, {}, [s.stat_last])}>
                    <EyeLine className={s.stat_icon} />
                    <TextDeprecated
                        size={TextSize.XS}
                        margin={TextMargin.NONE}
                        content={data.views.toString()}
                    />
                </div>
            </div>
            <ContentImageDeprecated src={data.image} alt="" />
            {data.blocks.map((block) => renderArticleBlock(block))}
        </>
    );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { id, isLoading, className = '' } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const data = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useDynamicModuleLoader(reducers, true);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    }, [id]);

    const content = useMemo(() => {
        if (isLoading) {
            return (
                <>
                    <SkeletonDeprecated
                        width="70%"
                        height={48}
                        marginBottom={20}
                        borderRadius={16}
                    />
                    <SkeletonDeprecated
                        width="50%"
                        height={18}
                        marginBottom={10}
                    />
                    <SkeletonDeprecated
                        width="40%"
                        height={18}
                        marginBottom={16}
                    />
                    <SkeletonDeprecated
                        width={86}
                        height={16}
                        marginBottom={24}
                        marginRight={10}
                        inline
                    />
                    <SkeletonDeprecated
                        width={86}
                        height={16}
                        marginBottom={24}
                        inline
                    />
                    <SkeletonDeprecated
                        width="100%"
                        height={360}
                        marginBottom={24}
                    />
                    <SkeletonDeprecated
                        width="90%"
                        height={18}
                        marginBottom={10}
                    />
                    <SkeletonDeprecated
                        width="90%"
                        height={18}
                        marginBottom={10}
                    />
                    <SkeletonDeprecated width="70%" height={18} />
                </>
            );
        }
        if (error || !data) {
            return (
                <InformerDeprecated
                    title={t('Произошла ошибка при загрузке статьи')}
                    isCentered
                />
            );
        }
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ContentRedesigned />}
                off={<ContentDeprecated />}
            />
        );
    }, [isLoading, error, data, t]);
    const outerClassNames = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => s.redesigned_outer,
        off: () => s.outer,
    });

    return (
        <div className={cn(outerClassNames, {}, [className])}>{content}</div>
    );
});
