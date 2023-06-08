import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/validate';

export interface ProfileSchema {
    data?: Profile | null;
    formData?: Profile | null;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
