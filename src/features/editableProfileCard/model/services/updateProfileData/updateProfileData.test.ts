import { AVATAR } from '@/shared/consts/tests';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../../consts/validate';
import { updateProfileData } from './updateProfileData';

const profileData = {
    id: '1',
    name: 'Name',
    lastname: 'Lastname',
    age: 30,
    currency: Currency.EUR,
    country: Country.ARMENIA,
    city: 'City',
    username: 'admin',
    avatar: AVATAR,
};

describe('updateProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: profileData,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: profileData,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: { ...profileData, name: '' },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
