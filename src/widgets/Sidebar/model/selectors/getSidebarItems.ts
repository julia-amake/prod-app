import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeLine from 'shared/assets/icons/HomeLine.svg';
import InfoLine from 'shared/assets/icons/InfoLine.svg';
import ProfileLine from 'shared/assets/icons/ProfileLine.svg';
import ArticleLine from 'shared/assets/icons/ArticleLine.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                title: 'Главная',
                Icon: HomeLine,
            },
            {
                path: RoutePath.about,
                title: 'О сайте',
                Icon: InfoLine,
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    title: 'Профиль',
                    Icon: ProfileLine,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    title: 'Статьи',
                    Icon: ArticleLine,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
