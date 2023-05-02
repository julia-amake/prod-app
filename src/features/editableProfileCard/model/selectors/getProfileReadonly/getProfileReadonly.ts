import { StateSchema } from '@/app/providers/StoreProvider';

import { profileInitialState } from '../../consts/consts';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly ?? profileInitialState.readonly;
