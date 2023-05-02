import { StateSchema } from '@/app/providers/StoreProvider';

import { ArticleBlockType, ArticleType } from '../consts/consts';

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';

describe('getArticleDetailsData.test', () => {
    test('should return article data', () => {
        const data = {
            id: '1',
            title: 'Title',
            subtitle: 'Subtitle',
            image: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/727/f54/666/727f54666075840f2c6a6d521f39e8f1.jpeg',
            views: 123,
            createdAt: '20.03.2023',
            type: [ArticleType.IT, ArticleType.ECONOMIC],
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockType.TEXT,
                    paragraphs: [
                        'Когда я начал изучать JavaScript, то первым делом составил список приемов, '
                        + 'которые помогали мне экономить время. Я подсмотрел их у&nbsp;других программистов, '
                        + 'на&nbsp;разных сайтах и&nbsp;в&nbsp;мануалах.',
                        'В&nbsp;этой статье я покажу 12&nbsp;отличных способов улучшить и&nbsp;ускорить '
                        + 'свой JavaScript-код. В&nbsp;большинстве случаев они универсальны.',
                    ],
                },
                {
                    id: '4',
                    type: ArticleBlockType.CODE,
                    code: 'const array = [1, 1, 2, 3, 5, 5, 1]\nconst uniqueArray = '
                        + '[...new Set(array)];\n \nconsole.log(uniqueArray); // Result: [1, 2, 3, 5]',
                },
            ],
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateSchema))
            .toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(null);
    });
});

describe('getArticleDetailsIsLoading.test', () => {
    test('should return article isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});

describe('getArticleDetailsError.test', () => {
    test('should return article error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'Error',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('Error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsError(state as StateSchema)).toEqual('');
    });
});
