import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export enum ValidateProfileError {
    INCORRECT_USER_DATA,
    INCORRECT_AGE,
    INCORRECT_COUNTRY,
    NO_DATA,
    SERVER_ERROR
}

export interface Profile {
    id?: string;
    name?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile | null;
    formData?: Profile | null;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[]
}
