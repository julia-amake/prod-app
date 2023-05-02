import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { ArticleBlockType, ArticleType } from '../../consts/consts';

import { fetchArticleById } from './fetchArticleById';

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

describe('fetchArticleById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk(data.id);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk(data.id);

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
