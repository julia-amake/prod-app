import React from 'react';
import { Flex, FlexProps } from '../Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStackReverse = (props: HStackProps) => {
    const { children, ...other } = props;

    return (
        <Flex direction="rowReverse" {...other}>
            {children}
        </Flex>
    );
};
