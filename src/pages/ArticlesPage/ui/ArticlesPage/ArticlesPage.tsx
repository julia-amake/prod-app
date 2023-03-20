import React, { memo } from 'react';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
    const {
        className = '',
    } = props;

    return (
        <div className={className}>
            ...
        </div>
    );
});

export default ArticlesPage;
