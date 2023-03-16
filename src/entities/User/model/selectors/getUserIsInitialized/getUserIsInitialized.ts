import { StateSchema } from 'app/providers/StoreProvider';

export const getUserIsInitialized = (state: StateSchema) => state.user._isInitialized;
