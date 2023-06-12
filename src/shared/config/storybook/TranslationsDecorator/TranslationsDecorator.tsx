import { Story } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';
import i18nForTests from '../../i18n/i18nForTests';

export const TranslationsDecorator = (StoryComponent: Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
    return (
        <I18nextProvider i18n={i18nForTests}>
            <StoryComponent />
        </I18nextProvider>
    );
};
