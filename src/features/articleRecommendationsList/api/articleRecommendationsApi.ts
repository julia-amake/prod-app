import { rtkApi } from '@/shared/api/rtkApi';

import { Article } from '@/entities/Article';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], {limit: number, excluded: string}>({
            query: ({ limit, excluded }) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                    id_ne: excluded,
                },
            }),
        }),
    }),
});

export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;
