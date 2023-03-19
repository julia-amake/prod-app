import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/profileSlice';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly ?? initialState.readonly;
