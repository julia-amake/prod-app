// На реальном проекте использовать аккуратно или не использовать вообще)
// опасная штука, может вызывать неявные ошибки, например, все перерендерит, а какие-то мемоизированные части нет

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

const ForceUpdateContext = createContext({
    value: true,
    forceUpdate: () => {},
});

export const useForceUpdate = () => {
    const { forceUpdate } = useContext(ForceUpdateContext);
    return forceUpdate;
};

export function ForceUpdateProvider({ children }: { children: ReactNode }) {
    const [value, setValue] = useState(true);

    const forceUpdate = () => {
        setValue((prev) => !prev);
        setTimeout(() => {
            setValue((prev) => !prev);
        }, 0);
    };

    const valueOptions = useMemo(() => ({ value, forceUpdate }), [value]);

    if (!value) return null;
    return (
        <ForceUpdateContext.Provider value={valueOptions}>
            {children}
        </ForceUpdateContext.Provider>
    );
}
