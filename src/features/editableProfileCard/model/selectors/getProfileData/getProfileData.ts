import { StateSchema } from '@/app/providers/StoreProvider';
import { profileInitialState } from '../../consts/consts';

export const getProfileData = (state: StateSchema) =>
    state.profile?.data || profileInitialState.data;
