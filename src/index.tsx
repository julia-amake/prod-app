import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import 'normalize.css';
import '@/app/styles/index.scss';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import App from './app/App';
import '@/shared/config/i18n/i18n';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден. Не удалось вмонтировать react-приложение');
}

const root = createRoot(container);
root.render((
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
));
export { Theme } from '@/shared/consts/theme';
