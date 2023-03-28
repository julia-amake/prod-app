import React, { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { cn } from 'shared/lib/classNames/classNames';
import { article } from 'entities/Article/mocks/data';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const {
        className = '',
    } = props;

    return (
        <div className={cn('main-content', {}, [className])}>
            <div className="inner-content--large">
                <ArticleList
                    articles={
                        Array.from(Array(30), (_, idx) => (
                            { ...article, id: idx.toString() }
                        ))
                    }
                    view={ArticleView.GRID}
                />
            </div>
        </div>
    );
});

export default ArticlesPage;
