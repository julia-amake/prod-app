import React, { memo } from 'react';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { MainLayout } from '../MainLayout/MainLayout';
import s from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = memo(() => (
    <MainLayout
        header={<Skeleton height={48} width={48} borderRadius="50%" />}
        content={
            <VStack className={s.content} gap="16">
                <Skeleton width="70%" height={32} borderRadius="20px" />
                <Skeleton width="40%" height={20} borderRadius="20px" />
                <Skeleton width="50%" height={20} borderRadius="20px" />
                <Skeleton width="30%" height={32} borderRadius="20px" />
                <Skeleton width="80%" height="40%" borderRadius="20px" />
                <Skeleton width="80%" height="40%" borderRadius="20px" />
            </VStack>
        }
        sidebar={<Skeleton width={220} height="100%" borderRadius={32} />}
    />
));
