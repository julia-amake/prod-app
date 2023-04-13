import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/profileSlice';

export const getProfileData = (state: StateSchema) => state.profile?.data || initialState.data;
