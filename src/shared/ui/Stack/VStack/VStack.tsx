import React from 'react';

import { Flex, FlexProps } from '../Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { children, ...other } = props;

    return (
        <Flex direction="col" {...other}>
            {children}
        </Flex>
    );
};
