import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return login state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'login',
                password: '111',
                isLoading: false,
                error: '',
            },
        };

        expect(getLoginState(state as StateSchema))
            .toEqual({
                username: 'login',
                password: '111',
                isLoading: false,
                error: '',
            });
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginState(state as StateSchema)).toEqual({
            username: '',
            password: '',
            isLoading: false,
            error: '',
        });
    });
});
