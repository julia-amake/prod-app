import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { AVATAR } from 'shared/consts/tests';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return profile data', () => {
        const data = {
            name: 'Name',
            lastname: 'Lastname',
            age: 30,
            currency: Currency.EUR,
            country: Country.ARMENIA,
            city: 'City',
            username: 'admin',
            avatar: AVATAR,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };

        expect(getProfileData(state as StateSchema))
            .toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(null);
    });
});
