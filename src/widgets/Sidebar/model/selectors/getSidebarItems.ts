import { createSelector } from '@reduxjs/toolkit';
import ArticleLine from '@/shared/assets/icons/ArticleLine.svg';
import HomeLine from '@/shared/assets/icons/HomeLine.svg';
import InfoLine from '@/shared/assets/icons/InfoLine.svg';
import ProfileLine from '@/shared/assets/icons/ProfileLine.svg';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/consts/router';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            title: 'Главная',
            Icon: HomeLine,
        },
        {
            path: getRouteAbout(),
            title: 'О сайте',
            Icon: InfoLine,
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                title: 'Профиль',
                Icon: ProfileLine,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                title: 'Статьи',
                Icon: ArticleLine,
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
