import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/profileSlice';

export const getProfileError = (state: StateSchema) => state.profile?.error || initialState.error;
