import { useCallback, useEffect, useState } from 'react';

interface useWindowDimensionsResult {
    width: number;
    height: number;
}

const useWindowDimensions = (): useWindowDimensionsResult => {
    const [width, setWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0,
    );
    const [height, setHeight] = useState(
        typeof window !== 'undefined' ? window.innerHeight : 0,
    );

    const updateWidthAndHeight = useCallback(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', updateWidthAndHeight);
        return () => window.removeEventListener('resize', updateWidthAndHeight);
    });

    return {
        width,
        height,
    };
};

export default useWindowDimensions;
