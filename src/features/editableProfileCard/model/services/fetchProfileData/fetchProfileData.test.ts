import { AVATAR } from '@/shared/consts/tests';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
