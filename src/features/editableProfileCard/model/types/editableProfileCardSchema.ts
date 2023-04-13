import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
    INCORRECT_USER_DATA,
    INCORRECT_USERNAME,
    INCORRECT_AGE,
    INCORRECT_COUNTRY,
    NO_DATA,
    SERVER_ERROR
}

export interface ProfileSchema {
    data?: Profile | null;
    formData?: Profile | null;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[]
}
