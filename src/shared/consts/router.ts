export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/article/create';
export const getRouteArticleEdit = (id: string) => `/articles/edit/${id}`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';

export const getRoute = (pathName: AppRoutes, id?: string) => {
    switch (pathName) {
        case AppRoutes.MAIN:
            return '/';
        case AppRoutes.PROFILE:
        case AppRoutes.ARTICLE_DETAILS:
        case AppRoutes.ARTICLE_EDIT:
            return `/${pathName}/${id}`;
        case AppRoutes.NOT_FOUND:
            return '*';
        default:
            return `/${pathName}`;
    }
};
