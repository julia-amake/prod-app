import { ProfileSchema } from '../types/editableProfileCardSchema';

export enum ValidateProfileError {
    INCORRECT_USER_DATA,
    INCORRECT_USERNAME,
    INCORRECT_AGE,
    INCORRECT_COUNTRY,
    NO_DATA,
    SERVER_ERROR,
}

export const profileInitialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: '',
    data: null,
    formData: null,
    validateErrors: [],
};
