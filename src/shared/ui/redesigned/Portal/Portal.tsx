import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement | null;
}

export const Portal: React.FC<PortalProps> = (props) => {
    const { children, element } = props;

    return createPortal(
        children,
        element || (document.getElementById('root') ?? document.body),
    );
};
