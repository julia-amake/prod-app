import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return profile validate errors', () => {
        const errors = [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE];

        // eslint-disable-next-line no-debugger
        debugger;
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });
});
