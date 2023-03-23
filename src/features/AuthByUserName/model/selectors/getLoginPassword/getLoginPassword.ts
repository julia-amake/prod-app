import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from 'features/AuthByUserName/model/slice/loginSlice';

export const getLoginPassword = (state: StateSchema) => state.loginForm?.password || initialState.password;
