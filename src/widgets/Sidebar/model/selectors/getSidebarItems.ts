import { createSelector } from '@reduxjs/toolkit';
import ArticleLine from '@/shared/assets/icons/ArticleLine.svg';
import HomeLine from '@/shared/assets/icons/HomeLine.svg';
import InfoLine from '@/shared/assets/icons/InfoLine.svg';
import ProfileLine from '@/shared/assets/icons/ProfileLine.svg';
import Home from '@/shared/assets/icons/redesigned/Home.svg';
import About from '@/shared/assets/icons/redesigned/Info.svg';
import Posts from '@/shared/assets/icons/redesigned/Posts.svg';
import Profile from '@/shared/assets/icons/redesigned/Profile.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/consts/router';
import { toggleFeatures } from '@/shared/lib/features';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            title: 'Главная',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => Home,
                off: () => HomeLine,
            }),
        },
        {
            path: getRouteAbout(),
            title: 'О сайте',
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => About,
                off: () => InfoLine,
            }),
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                title: 'Профиль',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => Profile,
                    off: () => ProfileLine,
                }),
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                title: 'Статьи',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => Posts,
                    off: () => ArticleLine,
                }),
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
