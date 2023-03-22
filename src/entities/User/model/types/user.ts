export interface User {
    id: string,
    username: string,
    avatar?: string
}

// state:
export interface UserSchema {
    authData?: User | null;

    // for auth data initialize check
    _isInitialized: boolean
}
