import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export interface Profile {
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
}
