import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { AVATAR } from '@/shared/consts/tests';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(profileData);

        expect(result).toEqual([]);
    });

    test('empty name and lastname', async () => {
        const result = validateProfileData({
            ...profileData,
            name: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('empty name', async () => {
        const result = validateProfileData({
            ...profileData,
            name: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('empty lastname', async () => {
        const result = validateProfileData({
            ...profileData,
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age value 0', async () => {
        const result = validateProfileData({
            ...profileData,
            age: 0,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect age value undefined', async () => {
        const result = validateProfileData({
            ...profileData,
            age: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('empty country', async () => {
        const result = validateProfileData({
            ...profileData,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('empty profile', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
