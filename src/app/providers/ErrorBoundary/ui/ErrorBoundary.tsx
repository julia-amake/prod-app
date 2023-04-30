import React, {
    Component, ErrorInfo, ReactNode, Suspense,
} from 'react';
import { ContentLoader } from '@/shared/ui';
import { PageErrorFallback } from '@/widgets/PageErrorFallback';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(error:Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        // eslint-disable-next-line no-console
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        return (
            <Suspense fallback={<ContentLoader />}>
                {hasError ? <PageErrorFallback /> : children}
            </Suspense>
        );
    }
}

export default ErrorBoundary;
