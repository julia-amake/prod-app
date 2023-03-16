export interface User {
    id: string,
    username: string
}

// state:
export interface UserSchema {
    authData?: User | null;

    // for auth data initialize check
    _isInitialized: boolean
}
