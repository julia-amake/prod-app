import React, { ReactNode } from 'react';
import { Heading } from '../Heading';
import { VStack } from '../Stack';

interface PageSectionProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export const PageSection = (props: PageSectionProps) => {
    const { title, children, className = '', ...otherProps } = props;

    return (
        <VStack className={className} {...otherProps} gap="16">
            {title && <Heading content={title} />}
            {children}
        </VStack>
    );
};
