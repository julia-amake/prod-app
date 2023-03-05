import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeLine from 'shared/assets/icons/HomeLine.svg';
import InfoLine from 'shared/assets/icons/InfoLine.svg';
import ProfileLine from 'shared/assets/icons/ProfileLine.svg';

export interface SidebarItemType {
    path: string;
    title: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        path: RoutePath.profile,
        title: 'Профиль',
        Icon: ProfileLine,
    },
];
