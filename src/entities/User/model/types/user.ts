export interface User {
    id: string,
    username: string
}

// state:
export interface UserSchema {
    authData?: User;
}
