import { Country, Currency } from 'shared/consts/common';

export interface Profile {
    name: string,
    lastname: string,
    age: number,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
}

export interface ProfileSchema {
    data?: Profile | null;
    isLoading: boolean;
    error?: string | null;
    readonly: boolean;
}
