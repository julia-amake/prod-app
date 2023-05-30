import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Heading } from '@/shared/ui/redesigned/Heading';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { Page } from '@/widgets/Page';

const SettingsPage = memo(() => {
    const { t } = useTranslation('settings');

    return (
        <Page dataTestid="SettingsPage">
            <VStack gap="24">
                <Heading as="h1" content={t('Настройки')} isBold />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
