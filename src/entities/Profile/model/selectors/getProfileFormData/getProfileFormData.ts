import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../../slice/profileSlice';

export const getProfileFormData = (state: StateSchema) => state.profile?.formData || initialState.formData;
