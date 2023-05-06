import { AVATAR } from '@/shared/consts/tests';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileError } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

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

describe('profileSlice.test', () => {
    test('set readonly from false to true', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true)))
            .toEqual({ readonly: true });
    });
    test('set readonly from true to false', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(false)))
            .toEqual({ readonly: false });
    });
    test('set readonly from true to true', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true)))
            .toEqual({ readonly: true });
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = { formData: { name: 'Prev', age: 40 } };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ name: 'New', age: 30 })))
            .toEqual({ formData: { name: 'New', age: 30 } });
    });

    test('reset form data', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            data: { name: 'name', age: 30 },
            formData: { name: 'new name', age: 40 },
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
        };
        expect(profileReducer(state as ProfileSchema, profileActions.resetFormData()))
            .toEqual({
                readonly: true,
                data: { name: 'name', age: 30 },
                formData: { name: 'name', age: 30 },
                validateErrors: [],
            });
    });

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [
                ValidateProfileError.INCORRECT_USER_DATA,
                ValidateProfileError.INCORRECT_AGE,
            ],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        ))
            .toEqual({
                isLoading: true,
                validateErrors: [],
            });
    });

    test('update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            data: { name: 'name', age: 40 },
            formData: { name: 'name form', age: 50 },
            validateErrors: [
                ValidateProfileError.INCORRECT_USER_DATA,
                ValidateProfileError.INCORRECT_AGE,
            ],
            readonly: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(profileData, ''),
        ))
            .toEqual({
                isLoading: false,
                data: profileData,
                formData: profileData,
                validateErrors: [],
                readonly: true,
            });
    });
});
