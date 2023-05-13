import { StateSchema } from '@/app/providers/StoreProvider';
import { profileInitialState } from '../../consts/consts';

export const getProfileIsLoading = (state: StateSchema) =>
    state.profile?.isLoading || profileInitialState.isLoading;
