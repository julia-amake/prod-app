import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

/**
 * Deprecated – use components from the Redesigned folder
 * @deprecated
 */

export const Portal: React.FC<PortalProps> = (props) => {
    const {
        children,
        element = document.getElementById('root') ?? document.body,
    } = props;

    return createPortal(children, element);
};
