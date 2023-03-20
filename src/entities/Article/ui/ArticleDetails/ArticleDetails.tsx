import React, {
    memo, useCallback, useEffect, useMemo,
} from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import Informer from 'shared/ui/Informer/Informer';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import Heading, { HeadingSize } from 'shared/ui/Heading/Heading';
import { Text, TextMargin, TextSize } from 'shared/ui/Text/Text';
import EyeLine from 'shared/assets/icons/EyeLine.svg';
import CalendarLine from 'shared/assets/icons/CalendarLine.svg';
import { Image } from 'shared/ui/Image/Image';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    ArticleDividerBlockComponent,
} from '../ArticleDividerBlockComponent/ArticleDividerBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import s from './ArticleDetails.module.scss';

const reducers: ReducersList = {
    articleDetails: ArticleDetailsReducer,
};

interface ArticleDetailsProps {
    id: string;
    className?: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        id,
        className = '',
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const data = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useDynamicModuleLoader(reducers, true);

    const renderBlock = useCallback(
        (block: ArticleBlock) => {
            const mods = { [s.block_last]: data?.blocks[data.blocks.length - 1] === block };

            switch (block.type) {
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        block={block}
                        key={block.id}
                        className={cn(s.block, mods)}
                    />
                );
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        block={block}
                        key={block.id}
                        className={cn(s.block, mods)}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        block={block}
                        key={block.id}
                        className={cn(s.block, mods)}
                    />
                );
            case ArticleBlockType.DIVIDER:
                return (
                    <ArticleDividerBlockComponent
                        key={block.id}
                        className={cn(s.block, mods)}
                    />
                );
            default:
                return null;
            }
        },
        [data],
    );

    useEffect(() => {
        if (__PROJECT__ === 'storybook') return;
        dispatch(fetchArticleById(id));
    }, [id, dispatch]);

    const content = useMemo(() => {
        if (isLoading) {
            return (
                <div className="inner-content">
                    <Skeleton
                        width="70%"
                        height={48}
                        marginBottom={20}
                        borderRadius={16}
                    />
                    <Skeleton
                        width="50%"
                        height={18}
                        marginBottom={10}
                    />
                    <Skeleton
                        width="40%"
                        height={18}
                        marginBottom={16}
                    />
                    <Skeleton
                        width={86}
                        height={16}
                        marginBottom={24}
                        marginRight={10}
                        inline
                    />
                    <Skeleton
                        width={86}
                        height={16}
                        marginBottom={24}
                        inline
                    />
                    <Skeleton
                        width="100%"
                        height={360}
                        marginBottom={24}
                    />
                    <Skeleton
                        width="90%"
                        height={18}
                        marginBottom={10}
                    />
                    <Skeleton
                        width="90%"
                        height={18}
                        marginBottom={10}
                    />
                    <Skeleton
                        width="70%"
                        height={18}
                    />
                </div>
            );
        }
        if (error || !data) {
            return (
                <div className="inner-content">
                    <Informer
                        title={t('Произошла ошибка при загрузке статьи')}
                        isCentered
                    />
                </div>
            );
        }
        return (
            <div className="inner-content">
                <Heading className={s.title} size={HeadingSize.L} content={data?.title} />
                <Text content={data.subtitle} className={s.subtitle} />
                <div className={s.stats}>
                    <div className={s.stat}>
                        <CalendarLine className={s.stat_icon} />
                        <Text
                            size={TextSize.XS}
                            margin={TextMargin.NONE}
                            content={data.createdAt}
                        />
                    </div>
                    <div className={cn(s.stat, {}, [s.stat_last])}>
                        <EyeLine className={s.stat_icon} />
                        <Text
                            size={TextSize.XS}
                            margin={TextMargin.NONE}
                            content={data.views.toString()}
                        />
                    </div>
                </div>
                <Image src={data.image} alt="" />
                {data.blocks.map((block) => renderBlock(block))}
            </div>
        );
    }, [renderBlock, isLoading, error, data, t]);

    return (
        <div className={cn(s.outer, {}, [className])}>
            {content}
        </div>
    );
});
