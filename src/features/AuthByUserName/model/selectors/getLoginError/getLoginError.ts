import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from 'features/AuthByUserName/model/slice/loginSlice';

export const getLoginError = (state: StateSchema) => state.loginForm?.error || initialState.error;
