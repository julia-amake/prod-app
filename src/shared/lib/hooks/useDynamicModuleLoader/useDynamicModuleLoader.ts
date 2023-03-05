import { useDispatch, useStore } from 'react-redux';
import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { ReducerStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';

export type ReducersList = { [name in StateSchemaKey]?: Reducer; };
type ReducersListEntry = [StateSchemaKey, Reducer];

export const useDynamicModuleLoader = (
    reducers: ReducersList,
    removeAfterUnmount?: boolean,
) => {
    const store = useStore() as ReducerStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
};
