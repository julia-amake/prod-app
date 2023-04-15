export enum UserRole {
    'USER' = 'USER',
    'ADMIN' = 'ADMIN',
    'MANAGER' = 'MANAGER',
}

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
