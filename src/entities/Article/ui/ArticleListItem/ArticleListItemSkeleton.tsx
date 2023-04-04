import { cn } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import s from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    view?: ArticleView;
    className?: string;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const {
        view = ArticleView.GRID,
        className = '',
    } = props;

    if (view === ArticleView.GRID) {
        return (
            <Card
                className={cn(s.outer, {}, [className, s.outer_grid, s.card])}
            >
                <div className={cn(s.pic_outer, {}, [s.pic_outer_skeleton])}>
                    <Skeleton
                        width="100%"
                        height="100%"
                        borderRadius={16}
                        className={s.pic}
                    />
                </div>
                <div className={s.info}>
                    <div className={s.additional}>
                        <ul className={s.categories}>
                            {[1, 2, 3].map((item) => (
                                <Skeleton
                                    key={item}
                                    inline
                                    width={48}
                                    height={16}
                                    marginRight={8}
                                    marginBottom={12}
                                />
                            ))}
                        </ul>
                        <div className={s.views}>
                            <Skeleton
                                width={48}
                                height={16}
                                marginBottom={4}
                            />
                        </div>
                    </div>
                    <Skeleton
                        width="90%"
                        height={22}
                        marginBottom={10}
                    />
                    <Skeleton
                        width="70%"
                        height={20}
                    />
                </div>
            </Card>
        );
    }

    if (view === ArticleView.LIST) {
        return (
            <Card
                className={cn(s.outer, { }, [className, s.outer_list, s.card])}
            >
                <div className={s.header}>
                    <div className={s.additional}>
                        <div className={s.user}>
                            <Skeleton
                                width={30}
                                height={30}
                                borderRadius="50%"
                                className={s.avatar}
                                marginRight={10}
                            />
                            <Skeleton
                                width={120}
                                height={16}
                            />
                        </div>
                        <Skeleton
                            className={s.date}
                            width={56}
                            height={16}
                        />
                    </div>
                    <Skeleton
                        width="80%"
                        height={22}
                        marginBottom={10}
                    />
                    <Skeleton
                        width="60%"
                        height={20}
                        marginBottom={24}
                    />
                    <ul className={s.categories}>
                        {[1, 2, 3].map((item) => (
                            <Skeleton
                                key={item}
                                inline
                                width={72}
                                height={16}
                                marginRight={8}
                                marginBottom={12}
                            />
                        ))}
                    </ul>
                </div>
                <div className={cn(s.pic_outer, {}, [s.pic_outer_skeleton])}>
                    <Skeleton
                        width="100%"
                        height="100%"
                        borderRadius={16}
                        className={s.pic}
                    />
                </div>
                <div className={s.footer}>
                    <div className={s.content}>
                        <Skeleton
                            width="100%"
                            height={14}
                            marginBottom={12}
                        />
                        <Skeleton
                            width="100%"
                            height={14}
                            marginBottom={12}
                        />
                        <Skeleton
                            width="80%"
                            height={14}
                        />

                    </div>
                    <div className={s.actions}>
                        <Skeleton
                            width={130}
                            height={40}
                            borderRadius={90}
                        />
                        <div className={s.views}>
                            <Skeleton
                                width={80}
                                height={16}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        );
    }

    return null;
};
