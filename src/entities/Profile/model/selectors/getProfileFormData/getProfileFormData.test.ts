import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/avatar.jpeg';
import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData.test', () => {
    test('should return profile form data', () => {
        const data = {
            name: 'Name',
            lastname: 'Lastname',
            age: 30,
            currency: Currency.EUR,
            country: Country.ARMENIA,
            city: 'City',
            username: 'admin',
            avatar,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                formData: data,
            },
        };

        expect(getProfileFormData(state as StateSchema))
            .toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileFormData(state as StateSchema)).toEqual(null);
    });
});
