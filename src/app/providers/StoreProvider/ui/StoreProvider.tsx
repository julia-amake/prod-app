import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children: ReactNode,
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>;
}

const StoreProvider: React.FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const navigate = useNavigate();

    const store = createReduxStore(initialState, asyncReducers, navigate);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
