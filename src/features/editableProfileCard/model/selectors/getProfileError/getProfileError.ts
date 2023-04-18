import { StateSchema } from 'app/providers/StoreProvider';
import { profileInitialState } from '../../consts/consts';

export const getProfileError = (state: StateSchema) => state.profile?.error || profileInitialState.error;
