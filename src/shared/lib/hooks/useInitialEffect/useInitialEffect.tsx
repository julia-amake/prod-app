import { useEffect } from 'react';

export function useInitialEffect(callback: () => void, deps: unknown[] = []) {
    useEffect(() => {
        if (__PROJECT__ === 'storybook') return;
        callback();
        // eslint-disable-next-line
    }, deps);
}
