import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from 'features/AuthByUserName/model/slice/loginSlice';

export const getLoginUsername = (state: StateSchema) => state.loginForm?.username || initialState.username;
