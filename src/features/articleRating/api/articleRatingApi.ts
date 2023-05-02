import { rtkApi } from '@/shared/api/rtkApi';

import { Rating } from '@/entities/Rating';

interface ArticleRatingArgs {
    userId: string;
    articleId: string;
}

interface RateArticleArgs extends ArticleRatingArgs {
    rate: number;
    feedback?: string;
}

const articleRatingApiWithTag = rtkApi.enhanceEndpoints({ addTagTypes: ['ArticleRating'] });

const articleRatingApi = articleRatingApiWithTag.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], ArticleRatingArgs>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
            providesTags: ['ArticleRating'],
        }),
        rateArticle: build.mutation<void, RateArticleArgs>({
            query: (args) => ({
                url: '/article-ratings',
                method: 'POST',
                body: args,
            }),
            invalidatesTags: ['ArticleRating'],
        }),
    }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
