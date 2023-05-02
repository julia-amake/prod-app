import { StateSchema } from '@/app/providers/StoreProvider';

import { profileInitialState } from '../../consts/consts';

export const getProfileFormData = (state: StateSchema) => state.profile?.formData || profileInitialState.formData;
