import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from 'features/AuthByUserName/model/slice/loginSlice';

export const getLoginIsLoading = (state: StateSchema) => state.loginForm?.isLoading || initialState.isLoading;
