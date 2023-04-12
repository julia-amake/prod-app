import React from 'react';

export type SortOrder = 'asc' | 'desc';

export interface ItemIcon {
    element: React.VFC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

type ItemIconHPosition = 'left' | 'right' | 'center';

export interface ItemIconWithHPosition extends ItemIcon {
    position: ItemIconHPosition
}
