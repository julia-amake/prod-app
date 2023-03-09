import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/ProfileSlice';

export const getProfileState = (state: StateSchema) => state.profile || initialState;
