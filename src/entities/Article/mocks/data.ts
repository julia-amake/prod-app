import { Article, ArticleType } from '../model/types/article';

export const article = {
    id: '1',
    title: '12 приемов работы с&nbsp;JavaScript',
    subtitle: 'Приемы, которых нет в&nbsp;большинстве туториалов',
    image: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/727/f54/666/727f54666075840f2c6a6d521f39e8f1.jpeg',
    views: 1052,
    createdAt: '16.03.2023',
    user: {
        id: '1',
        username: 'Yulia Starchenko',
        avatar: 'https://avatars.githubusercontent.com/u/11091224',
    },
    type: [
        'IT',
        'SCIENCE',
        ArticleType.ECONOMIC,
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            paragraphs: [
                'Когда я начал изучать JavaScript, то первым делом составил список приемов, которые помогали мне '
                + 'экономить время. Я подсмотрел их у&nbsp;других программистов, на&nbsp;разных сайтах и&nbsp;в&nbsp;мануалах.',
                'В&nbsp;этой статье я покажу 12&nbsp;отличных способов улучшить и&nbsp;ускорить свой JavaScript-код. '
                + 'В&nbsp;большинстве случаев они универсальны.',
            ],
        },
        {
            id: '3',
            type: 'TEXT',
            title: 'Фильтрация уникальных значений',
            paragraphs: [
                'Тип объекта Set был введен в ES6, вместе с ..., spread-оператором, мы можем использовать его для создания '
                + 'нового массива, в котором содержатся лишь уникальные значения.',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: 'const array = [1, 1, 2, 3, 5, 5, 1]\nconst uniqueArray = [...new Set(array)];\n \nconsole.log(uniqueArray); '
                + '// Result: [1, 2, 3, 5]',
        },
        {
            id: '5',
            type: 'TEXT',
            paragraphs: [
                'В обычной ситуации для выполнения той же операции нужно гораздо больше кода.',
                'Этот прием работает для массивов, содержащих примитивные типы: undefined, null, boolean, string '
                + 'и number. Если вы работаете с массивом, содержащим объекты, функции или дополнительные массивы, '
                + 'вам понадобится другой подход.',
            ],
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Длина кэш-массива в циклах',
            paragraphs: [
                'Когда вы изучаете for для циклов, то следуете стандартной процедуре:',
            ],
        },
        {
            id: '8',
            type: 'CODE',
            code: 'for (let i = 0; i < array.length; i++){\n  console.log(i);\n}',
        },
        {
            id: '9',
            type: 'TEXT',
            paragraphs: [
                'Тем не менее, при таком синтаксисе цикл for повторно проверяет длину массива при каждой итерации.',
                'Иногда это может быть полезно, но в большинстве случаев эффективнее кэшировать длину массива, '
                + 'что потребует одного обращения к нему. Мы можем сделать это путем определения переменной длины, '
                + 'где задать переменную i, например, так:',
            ],
        },
        {
            id: '10',
            type: 'CODE',
            code: 'for (let i = 0, length = array.length; i < length; i++){\n  console.log(i);\n}',
        },
        {
            id: '11',
            type: 'TEXT',
            paragraphs: [
                'В принципе, почти то же самое, что и выше, но при увеличении размера цикла мы получим '
                + 'значительную экономию времени.',
            ],
        },
        {
            id: '2',
            type: 'DIVIDER',
        },
        {
            id: '6',
            type: 'IMAGE',
            title: 'Чуваки из Силиконовой Долины',
            src: 'https://furyosa.com/wp-content/uploads/2018/10/Silicon-Valley-furyosa-main.jpg',
        },
    ],
} as Article;

export const articles = Array.from(Array(7), (_, idx) => (
    { ...article, id: idx.toString() }
));
