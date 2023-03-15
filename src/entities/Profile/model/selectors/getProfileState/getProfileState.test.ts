import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { AVATAR } from 'shared/consts/tests';
import { getProfileState } from './getProfileState';

describe('getProfileState.test', () => {
    test('should return profile state', () => {
        const profileData = {
            name: 'Name',
            lastname: 'Lastname',
            age: 30,
            currency: Currency.EUR,
            country: Country.ARMENIA,
            city: 'City',
            username: 'admin',
            avatar: AVATAR,
        };

        const profileState = {
            data: profileData,
            formData: profileData,
            isLoading: false,
            error: '',
            readonly: false,
            validateErrors: [],
        };

        const state: DeepPartial<StateSchema> = {
            profile: profileState,
        };

        expect(getProfileState(state as StateSchema))
            .toEqual(profileState);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileState(state as StateSchema)).toEqual({
            readonly: true,
            isLoading: false,
            error: '',
            data: null,
            formData: null,
            validateErrors: [],
        });
    });
});
