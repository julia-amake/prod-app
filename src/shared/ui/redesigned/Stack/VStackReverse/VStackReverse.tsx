import React from 'react';
import { Flex, FlexProps } from '../Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const VStackReverse = (props: HStackProps) => {
    const { children, ...other } = props;

    return (
        <Flex direction="colReverse" {...other}>
            {children}
        </Flex>
    );
};
