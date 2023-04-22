import { useEffect, useState } from 'react';
import isHighDensity from '../utils/isHightDensity';

const useIsHighResolution = (): boolean => {
    const [isHighResolution, setIsHighResolution] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        setIsHighResolution(isHighDensity());
    }, []);

    return isHighResolution;
};

export default useIsHighResolution;
