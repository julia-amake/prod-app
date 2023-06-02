import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarLine from '@/shared/assets/icons/CalendarLine.svg';
import EyeLine from '@/shared/assets/icons/EyeLine.svg';
import { cn } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    ReducersList,
    useDynamicModuleLoader,
} from '@/shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Heading, HeadingSize } from '@/shared/ui/deprecated/Heading';
import { ContentImage } from '@/shared/ui/deprecated/Image';
import { Informer } from '@/shared/ui/deprecated/Informer';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text, TextMargin, TextSize } from '@/shared/ui/deprecated/Text';
import {
    getArticleDetailsData,
    getArticleDetailsError,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import renderBlock from './renderBlock';
import s from './ArticleDetails.module.scss';

const reducers: ReducersList = {
    articleDetails: ArticleDetailsReducer,
};

interface ArticleDetailsProps {
    id: string;
    isLoading?: boolean;
    className?: string;
}

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
                    <Skeleton
                        width="70%"
                        height={48}
                        marginBottom={20}
                        borderRadius={16}
                    />
                    <Skeleton width="50%" height={18} marginBottom={10} />
                    <Skeleton width="40%" height={18} marginBottom={16} />
                    <Skeleton
                        width={86}
                        height={16}
                        marginBottom={24}
                        marginRight={10}
                        inline
                    />
                    <Skeleton width={86} height={16} marginBottom={24} inline />
                    <Skeleton width="100%" height={360} marginBottom={24} />
                    <Skeleton width="90%" height={18} marginBottom={10} />
                    <Skeleton width="90%" height={18} marginBottom={10} />
                    <Skeleton width="70%" height={18} />
                </>
            );
        }
        if (error || !data) {
            return (
                <Informer
                    title={t('Произошла ошибка при загрузке статьи')}
                    isCentered
                />
            );
        }
        return (
            <>
                <Heading
                    className={s.title}
                    size={HeadingSize.L}
                    content={data?.title}
                    data-testid="ArticleDetails.Header"
                />
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
                <ContentImage src={data.image} alt="" />
                {data.blocks.map((block) => renderBlock(block, data?.blocks))}
            </>
        );
    }, [isLoading, error, data, t]);

    return <div className={cn(s.outer, {}, [className])}>{content}</div>;
});
