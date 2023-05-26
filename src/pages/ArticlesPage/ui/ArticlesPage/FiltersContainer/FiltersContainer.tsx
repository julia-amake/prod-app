import React, { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import useArticlesFilters from '../../../lib/hooks/useArticlesFilters/useArticlesFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className = '' } = props;
    const {
        type,
        onChangeType,
        onChangeSearch,
        onChangeOrder,
        onChangeSort,
        search,
        order,
        sort,
        isLoading,
    } = useArticlesFilters();

    return (
        <ArticlesFilters
            className={className}
            searchValue={search}
            searchOnChange={onChangeSearch}
            onChangeType={onChangeType}
            typeValue={type}
            typeIsLoading={isLoading}
            sort={sort}
            onChangeSort={onChangeSort}
            order={order}
            onChangeOrder={onChangeOrder}
        />
    );
});
