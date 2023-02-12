import React, { useEffect, useState } from 'react';
import ButtonThrow from 'shared/ui/Button/Button';

// Component for testing ErrorBoundary
const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <ButtonThrow onClick={onThrow}>
            Throw Error
        </ButtonThrow>
    );
};

export default BugButton;
