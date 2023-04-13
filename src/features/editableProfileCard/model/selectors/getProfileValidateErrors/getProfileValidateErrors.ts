import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/profileSlice';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors || initialState.validateErrors;
