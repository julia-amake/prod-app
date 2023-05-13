import { ReducersMapObject } from '@reduxjs/toolkit';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: ReducersMapObject<StateSchema>;
}

const StoreProvider: React.FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducers } = props;

    // const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        // navigate
    );

    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
