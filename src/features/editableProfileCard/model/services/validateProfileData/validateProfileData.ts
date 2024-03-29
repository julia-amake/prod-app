import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/validate';

export const validateProfileData = (profile?: Profile | null) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const { name, lastname, age, country, username } = profile;

    const errors: ValidateProfileError[] = [];

    // todo: валидировать все поля

    if (!name || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
