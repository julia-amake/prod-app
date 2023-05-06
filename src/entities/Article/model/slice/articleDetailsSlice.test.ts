import { ArticleBlockType, ArticleType } from '../consts/consts';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { ArticleDetailsReducer } from './articleDetailsSlice';

const data:Article = {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    user: {
        id: '1',
        username: 'Name',
    },
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

describe('articleDetailsSlice.test', () => {
    test('fetchArticleById service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: '',
        };
        expect(ArticleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        ))
            .toEqual({
                isLoading: true,
                error: '',
            });
    });

    test('fetchArticleById service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: null,
        };
        expect(ArticleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data, data.id, ''),
        ))
            .toEqual({
                isLoading: false,
                data,
            });
    });
});
