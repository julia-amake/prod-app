import { StateSchema } from '@/app/providers/StoreProvider';
import { profileInitialState } from '../../consts/consts';

export const getProfileValidateErrors = (state: StateSchema) =>
    state.profile?.validateErrors || profileInitialState.validateErrors;
