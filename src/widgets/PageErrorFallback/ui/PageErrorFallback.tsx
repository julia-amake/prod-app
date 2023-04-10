import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import { VStack } from 'shared/ui/Stack';
import Heading, { HeadingPosition, HeadingSize } from 'shared/ui/Heading/Heading';
import { Page } from 'widgets/Page/Page';

interface PageErrorFallbackProps {
    className?: string;
}

const PageErrorFallback: React.FC<PageErrorFallbackProps> = (props) => {
    const { className = '' } = props;
    const { t } = useTranslation();

    const onReloadPage = () => window.location.reload();

    return (
        <Page>
            <VStack
                className={className}
                align="center"
                justify="center"
                gap="24"
                fullWidth
            >
                <Heading position={HeadingPosition.CENTER} content={t('Что-то пошло не так')} size={HeadingSize.M} />
                <Button
                    label={t('Обновить страницу')}
                    onClick={onReloadPage}
                />
            </VStack>
        </Page>
    );
};

export default PageErrorFallback;
