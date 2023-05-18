import React, { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';

// Component for testing ErrorBoundary
const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button label="Throw Error" onClick={onThrow} />;
};

export default BugButton;
