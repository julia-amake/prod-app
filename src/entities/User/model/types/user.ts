export interface User {
    id: number,
    username: string
}

// state:
export interface UserSchema {
    authData?: User;
}
