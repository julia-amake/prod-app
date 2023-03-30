import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from 'features/UI';

export const initialState: UISchema = {
    scroll: {},
};

export const uiSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{path: string, position: number}>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
