import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('should return profile readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };

        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
});
