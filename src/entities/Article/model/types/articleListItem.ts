import { ArticleView } from '../consts/consts';
import { Article } from './article';

export interface ArticleListItemProps {
    article: Article;
    view?: ArticleView;
    className?: string;
}
