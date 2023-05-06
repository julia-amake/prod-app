import React from 'react';
import { Flex, FlexProps } from '../Flex';

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
    const { children, ...other } = props;

    return (
        <Flex direction="row" {...other}>
            {children}
        </Flex>
    );
};
