import { ProfileSchema } from '../types/editableProfileCardSchema';

export const profileInitialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: '',
    data: null,
    formData: null,
    validateErrors: [],
};
