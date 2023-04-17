import { UserRole } from '../consts/consts';

export interface User {
    id: string,
    username: string,
    avatar?: string,
    roles?: UserRole[]
}

// state:
export interface UserSchema {
    authData?: User | null;

    // for auth data initialize check
    _isInitialized: boolean
}
