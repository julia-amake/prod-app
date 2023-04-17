import StoreProvider from './ui/StoreProvider';

export type { AppDispatch } from './config/store';

export { createReduxStore } from './config/store';

export type {
    StateSchema,
    ReducerStoreWithManager,
    StateSchemaKey,
    ThunkExtraArg,
    ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
};
