import { useDispatch, useStore } from 'react-redux';
import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { ReducerStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = { [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>; };

export const useDynamicModuleLoader = (
    reducers: ReducersList,
    removeAfterUnmount: boolean = true,
) => {
    const store = useStore() as ReducerStoreWithManager;
    const dispatch = useDispatch();
    const mountedReducers = store.reducerManager?.getReducerMap();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers ? mountedReducers[name as StateSchemaKey] : null;
            if (!mounted) {
                store.reducerManager?.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager?.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
};
